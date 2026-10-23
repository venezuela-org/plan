import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const path = join(root, 'index.html');
const html = readFileSync(path, 'utf8');
const pattern = /var SECTIONS=(\[.*?\]);\r?\nfunction esc/s;
const match = html.match(pattern);
if (!match) throw new Error('No se encontró SECTIONS en index.html');
const existing = JSON.parse(match[1]);
const labels = new Map(existing.map(section => [section.id, section.label]));
const sections = readdirSync(root).filter(name => /^\d{2}-.*\.md$/.test(name)).sort().map(name => {
  const id = 'd' + name.slice(0, 2);
  const md = readFileSync(join(root, name), 'utf8');
  return {
    id,
    label: labels.get(id) ?? md.split('\n')[0].replace(/^#\s+(?:\d+\s*·\s*)?/, ''),
    sens: id === 'd03',
    md,
  };
});
for (const [id, name] of [['r1', 'grupos-detalle.md'], ['r2', 'ideas-e-inventario.md']]) {
  sections.push({ id, label: labels.get(id), sens: true, md: readFileSync(join(root, 'roster', name), 'utf8') });
}
// Escape '<' so Markdown containing a closing script tag remains inert data.
const serialized = JSON.stringify(sections).replace(/</g, '\\u003c');
const updated = html.replace(pattern, () => 'var SECTIONS=' + serialized + ';\nfunction esc');
if (process.argv.includes('--check')) {
  if (updated !== html) {
    console.error('Manual desactualizado. Ejecuta: node scripts/sync-manual.mjs');
    process.exitCode = 1;
  } else console.log('Manual sincronizado.');
} else {
  writeFileSync(path, updated);
  console.log('Manual actualizado: ' + sections.length + ' secciones.');
}
