import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
new vm.Script(script);
const context = vm.createContext({});
vm.runInContext(script.split('// sidebar')[0], context);

test('all numbered documents and roster sources are embedded without drift', () => {
  const files = readdirSync(root).filter(name => /^\d{2}-.*\.md$/.test(name));
  assert.equal(context.SECTIONS.length, files.length + 2);
  for (const name of files) {
    assert.equal(context.SECTIONS.find(s => s.id === 'd' + name.slice(0, 2))?.md,
      readFileSync(new URL(name, root), 'utf8'), name);
  }
  for (const [id, name] of [['r1', 'grupos-detalle.md'], ['r2', 'ideas-e-inventario.md']]) {
    const section = context.SECTIONS.find(s => s.id === id);
    assert.equal(section.md, readFileSync(new URL('roster/' + name, root), 'utf8'));
    assert.equal(section.sens, true);
  }
  for (const section of context.SECTIONS) assert.match(context.renderMD(section.md), /<h1>/);
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
