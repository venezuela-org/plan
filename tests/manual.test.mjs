import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';
import vm from 'node:vm';
import { publicDocuments } from '../scripts/public-documents.mjs';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
const context = vm.createContext({});
vm.runInContext(script.split('// sidebar')[0], context);

test('only approved public documents are embedded without drift', () => {
  assert.equal(context.SECTIONS.length, publicDocuments.length);
  for (const [id, name, label] of publicDocuments) {
    const section = context.SECTIONS.find(s => s.id === id);
    assert.equal(section.md, readFileSync(new URL(name, root), 'utf8'), name);
    assert.equal(section.label, label);
    assert.equal(section.sens, false);
  }
  for (const section of context.SECTIONS) assert.match(context.renderMD(section.md), /<h1>/);
});

test('student manual stays public and retains the existing roster', () => {
  const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' }).split('\0').filter(Boolean);
  const allowedRoster = new Set(['roster/README.md', 'roster/grupos-detalle.md', 'roster/ideas-e-inventario.md', 'roster/Inventario_talento_RedJIV.xlsx']);
  const reviewedMarkdown = new Set(['README.md', 'roster/README.md', ...publicDocuments.map(([, name]) => name)]);
  for (const name of tracked) {
    assert.ok(!name.startsWith('.private/'), 'Private coordination folder must not be tracked');
    if (name.startsWith('roster/')) assert.ok(allowedRoster.has(name), 'Unreviewed roster file: ' + name);
    if (name.endsWith('.md')) assert.ok(reviewedMarkdown.has(name), 'Unreviewed public Markdown: ' + name);
  }
  assert.ok(tracked.includes('roster/Inventario_talento_RedJIV.xlsx'), 'Keep the original talent inventory');
  const inventory = readFileSync(new URL('roster/Inventario_talento_RedJIV.xlsx', root));
  assert.equal(inventory.subarray(0, 2).toString(), 'PK');
  const teams = context.SECTIONS.find(s => s.id === 'r1').md;
  assert.match(teams, /- Lead: /);
  assert.match(teams, /- Equipo: /);
  assert.match(context.SECTIONS.find(s => s.id === 'd03').md, /Leads propuestos por track/);
  assert.match(html, /Manual público/);
  assert.doesNotMatch(html, /manual interno|\(PRIVADO\)|noindex/);
  assert.match(readFileSync(new URL('README.md', root), 'utf8'), /GitHub Pages permanecen públicos/);
});

test('renders inline code once and preserves code as literal text', () => {
  assert.equal(context.inl('`x < y && z`'), '<code>x &lt; y &amp;&amp; z</code>');
  assert.equal(context.inl('`**literal**`'), '<code>**literal**</code>');
  assert.equal(context.inl('**bold**'), '<strong>bold</strong>');
  assert.equal(context.inl('<script>'), '&lt;script&gt;');
});

test('renders numbered steps and task status distinctly', () => {
  assert.equal(context.renderMD('Intro\n1. First\n2. Second'),
    '<p>Intro</p>\n<ol start="1"><li>First</li><li>Second</li></ol>');
  const tasks = context.renderMD('- [x] Done\n- [ ] Pending');
  assert.equal((tasks.match(/type="checkbox"/g) || []).length, 2);
  assert.equal((tasks.match(/disabled checked/g) || []).length, 1);
  assert.match(context.renderMD('3. Third'), /<ol start="3">/);
});

test('escapes link attributes and rejects executable or obfuscated URLs', () => {
  assert.equal(context.inl('[Example](https://example.org/"onclick="alert)'),
    '<a href="https://example.org/&quot;onclick=&quot;alert" target="_blank" rel="noopener">Example</a>');
  for (const url of ['javascript:alert%281%29', 'data:text/html,test', 'java\tscript:test', '//example.org', '\\example.org']) {
    assert.doesNotMatch(context.inl('[Example](' + url + ')'), /<a /, url);
  }
  for (const url of ['https://example.org', 'mailto:test@example.org', '#d00', '../README.md']) {
    assert.match(context.inl('[Example](' + url + ')'), /<a /, url);
  }
});
