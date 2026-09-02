/* Generates src/content/docs/reference/settings.md from the plugin's own
   DEFAULT_SETTINGS and NX_MODULES.

   The page is generated because a default written out by hand drifts away from
   the code, and a wrong default in a reference table is worse than no table.
   The prose above the tables is kept in this file, so the whole page is one
   output and nothing has to be merged by hand afterwards.

     npm run gen:settings
     node scripts/gen-settings.mjs <path-to-plugin>
     NEXUS_PLUGIN_DIR=… node scripts/gen-settings.mjs

   With no argument it looks for the plugin in the dev vault it is normally
   written beside; that path is a convenience, not an assumption, so a wrong or
   missing one says what it was looking for instead of throwing a module trace.
*/

import { createRequire } from 'node:module';
import { existsSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_PLUGIN_DIR = path.join(
  homedir(), 'DEV/OBSIDIAN-nexus-DEV/.obsidian/plugins/nexus-suite');

const pluginDir = process.argv[2] || process.env.NEXUS_PLUGIN_DIR || DEFAULT_PLUGIN_DIR;
const constantsPath = path.join(pluginDir, 'src/constants.js');

if (!existsSync(constantsPath)) {
  console.error('No plugin source at ' + constantsPath + '.\n'
    + 'Pass the plugin folder as an argument, or set NEXUS_PLUGIN_DIR.');
  process.exit(1);
}

const require = createRequire(import.meta.url);
const { DEFAULT_SETTINGS, NX_MODULES } = require(constantsPath);

/* A value is a leaf unless it is a plain object with keys — those are flattened
   one level, so `ocr.command` reads as the path you would write in data.json.
   An empty object is a bag filled at runtime (the icon map, the per-pen
   overrides, the per-device entries); it has no default worth printing, and the
   page says so rather than pretending the list is every key in the file. */
const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

const skipped = [];
const tooDeep = [];

function rows(obj, prefix = '') {
  const out = [];
  for (const [key, value] of Object.entries(obj)) {
    if (isPlainObject(value)) {
      if (!Object.keys(value).length) { skipped.push(prefix + key); continue; }
      /* Nothing in DEFAULT_SETTINGS is three levels deep today. If something
         becomes so, it must not vanish from a page that claims to list every
         default — so it is reported rather than dropped in silence. */
      if (prefix) { tooDeep.push(prefix + key); continue; }
      out.push(...rows(value, key + '.'));
      continue;
    }
    out.push([prefix + key, JSON.stringify(value)]);
  }
  return out;
}

/* Long arrays are cut rather than wrapped: the table is for looking a default
   up, and the full value is one `git show` away in constants.js. */
const CUT = 71;
const cut = (s) => (s.length > CUT ? s.slice(0, CUT) + '…' : s);

const head = `---
title: Every setting
description: Each key in data.json that has a default, and what that default is.
sidebar:
  order: 1
---

\`\`\`
<vault>/.obsidian/plugins/nexus-suite/data.json
\`\`\`

One object per module, keyed by the module id. Every key below has a default in
the code, so a missing key is never an error — which is what lets a vault from
an older version keep working.

:::caution[Merged one level deep]
Settings are merged one level deep on load. A key nested **two** levels down
that is new in a release does not appear in a vault that already has its parent
object. The code therefore reads such keys defensively, and this is worth
knowing before adding one.
:::

## What is not in these tables

**Bags that start empty** and fill up as you use the plugin: the icon map
(\`icons.map\`), the dashboard's layout and per-device profiles
(\`homepage.layout\`, \`.profiles\`, \`.profileNames\`), the collapsed banner groups
(\`banner.collapsed\`), the per-pen overrides and gesture map
(\`quicksketch.penConfig\`, \`.penMap\`) and the per-tool colours and palettes
(\`.toolColors\`, \`.toolPalettes\`). They have no default to print, so they have
no row — a \`data.json\` in use holds more keys than this page lists.

**Credentials.** They live in \`localStorage\` per device, in plain text — see
[Where everything is stored](/concepts/storage/).

**Anything that describes one machine.** The sync server, its device name, the
sync schedule and the task accounts live under \`devices.<device id>\`, so a
synced \`data.json\` cannot carry one device's connection onto another. That
object is empty by default and therefore absent below. See
[What belongs to a device](/concepts/devices/).

## Where a value is read

The authoritative source is \`src/constants.js\` (\`DEFAULT_SETTINGS\`). This page
is generated from it by \`scripts/gen-settings.mjs\`; do not edit it by hand.
`;

const parts = [head];
let modules = 0, keys = 0;
for (const [id, value] of Object.entries(DEFAULT_SETTINGS)) {
  if (!isPlainObject(value)) continue;
  const table = rows(value);
  if (!table.length) { skipped.push(id); continue; }
  modules++; keys += table.length;
  const meta = NX_MODULES[id];
  parts.push('\n### `' + id + '`' + (meta ? ' — ' + meta.name : '') + '\n');
  if (meta && meta.sub) parts.push('\n' + meta.sub + '.\n');
  parts.push('\n| Key | Default |\n|---|---|\n');
  for (const [key, def] of table) parts.push('| `' + key + '` | `' + cut(def) + '` |\n');
}

const target = path.join(here, '../src/content/docs/reference/settings.md');
writeFileSync(target, parts.join(''));
console.log('wrote ' + target);
console.log('  ' + modules + ' modules, ' + keys + ' keys');
console.log('  ' + skipped.length + ' empty objects skipped: ' + skipped.join(', '));
if (tooDeep.length) {
  console.warn('  WARNING — nested deeper than one level and NOT on the page: '
    + tooDeep.join(', ') + '\n  Flatten it in constants.js, or teach this script to render it.');
  process.exitCode = 1;
}
