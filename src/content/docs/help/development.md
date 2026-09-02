---
title: Development
description: The source layout, the build, and how the tests run without Obsidian.
sidebar:
  order: 3
---

## Layout

The source lives in `src/`. Obsidian only ever loads the bundled `main.js` and
`styles.css` at the plugin root — those are **build outputs**, they are
gitignored, and releases carry them.

```
src/
├── main.js            the plugin class, commands, code-block registration
├── constants.js       every default, every table
├── settings.js        the settings tabs
├── lib/               logic with no DOM where possible
├── modals/            dialogs
├── views/             panes and rendered blocks
└── styles/            one file per area, concatenated by the build
```

## Building

```sh
npm install        # once
npm run dev        # watch: rebuilds on every save in src/
npm run build      # one production build — the resting state
```

While `npm run dev` runs, edit anything under `src/` and reload the plugin in
Obsidian (disable and re-enable, or `Ctrl-R`).

## Tests

```sh
./test/run.sh          # the suite
./test/run.sh visual   # also writes test/visual.png
```

There is no Obsidian here, so the plugin is bundled against a **stub** of the
Obsidian API (`test/obsidian-stub.js`) and driven in headless Chromium against a
**real DOM**. It needs `chromium` and `python3` on PATH.

Thirteen pages, around six hundred checks: the toolbar and its options row,
selection and transforms, the canvas and the spacing tool, objects and the
ruler, pen gestures, export, sketch search and the OCR command line, the kanban
board writing itself back, notes as tasks, the planner, the sync decision table
with the ZIP writer, and Chatter.

### Checked outside the harness too

A structural check is not proof a file opens, so:

- the exported PDF passes `qpdf --check` and renders with `pdftoppm`
- a generated backup archive passes `unzip -t` and reads correctly in Python's
  `zipfile`, umlaut file names included
- the OCR pipeline is run against a real `tesseract`

## Conventions worth knowing

- **Pure where it can be.** Decisions live in `lib/` with no DOM; the parts that
  touch files carry them out. That is what makes the sync's rules testable
  without a server.
- **One implementation.** The vault search's scoring is imported by the sketch
  search rather than rewritten; the block-rewriting logic is shared by the kanban
  board and the planner.
- **Comments say why.** What the line does is in the line.
- **Settings merge one level deep.** A new key nested two levels down never
  reaches an existing vault, so read such keys defensively.

## Releasing

`./release.sh` bumps the version, builds, tags and creates the GitHub release
with the built files attached. A plain push is invisible to BRAT — only a
release updates anything.
