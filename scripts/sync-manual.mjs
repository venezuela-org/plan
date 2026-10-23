import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { publicDocuments } from './public-documents.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const path = join(root, 'index.html');
const html = readFileSync(path, 'utf8');
const pattern = /var SECTIONS=(\[.*?\]);\r?\nfunction esc/s;
const match = html.match(pattern);
if (!match) throw new Error('No se encontró SECTIONS en index.html');
const sections = publicDocuments.map(([id, name, label]) => {
  const md = readFileSync(join(root, name), 'utf8');
  return {
    id,
    label,
    sens: false,
    md,
  };
});
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
