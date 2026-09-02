---
title: Code blocks
description: Every fence the plugin renders, with its keys.
sidebar:
  order: 3
---

## `quicksketch`

A drawing pad. The fence holds the sketch id and its display settings; the
drawing itself is a `.svg` sidecar. See [Quick Sketch](/sketch/overview/).

## `nexus-kanban`

A board. Config lines, then one section per column. `source:` decides where the
cards come from; it is read before anything else, and only above the first
column. See [Kanban](/tasks/kanban/).

| Line | Meaning |
|---|---|
| `source: block` | The cards are the checklist lines in the fence (the default) |
| `source: folder` | The cards are the notes of a folder |
| `title: …` | The board's name |
| `counts: false` | Hide the per-column count |
| `due: false` | Hide due dates on cards |
| `tags: false` | Hide tag chips |
| `compact: true` | Denser cards |
| `## Name @2` | A column with a WIP limit |
| `- [ ] text` | A card |

With `source: block`:

| Line | Meaning |
|---|---|
| `notes: …` | The folder new card notes are created in — `folder:` is the other spelling |
| `template: …` | A note used as the body of a new card note |
| `- [x] text` | A done card |
| `[[Note\|Alias]]` in a card | The note it points at |
| `@2026-08-25` in a card | A due date |
| `#tag` in a card | A tag chip |
| An indented line under a card | Its description |

With `source: folder`:

| Line | Meaning |
|---|---|
| `folder: …` | The folder to show; empty = the folder this note is in |
| `status: …` | The frontmatter property holding the column — `statusproperty:` is the other spelling |
| `states: A, B, C` | The columns as one line — `columns:` is the other spelling |
| `view: board` | `board` · `grid` · `graph` — `mode:` is the other spelling |
| `sort: name` | `name` · `modified` · `created` · `state` |
| `dir: asc` | `asc` · `desc` — `direction:` is the other spelling |
| `size: medium` | `small` · `medium` · `large` |
| `props: due, rating` | Frontmatter keys shown as badges |
| `height: 260` | The link web's height in pixels |
| `show: excerpt, links` | Which of `excerpt`, `tags`, `links`, `orphans`, `state`, `graph` are on; what is not named is off |
| `excerpt: false` | The same six, one at a time |

Both spellings of a key are read, and each is written back as itself.

## `nexus-planner`

A month or a week, one line per day. See [The planner](/tasks/planner/).

| Key | Values |
|---|---|
| `view` | `month` · `week` |
| `month` | `YYYY-MM` |
| `week` | any date in the week |
| `title` | replaces the heading |
| `weekstart` | `monday` · `sunday` |
| `YYYY-MM-DD` | the line for that day |

## `nexus-agenda`

One day: events, tasks, backlinks. Every key is on
[The agenda block](/tasks/agenda/).

## `nexus-board`

Every note of a folder as cards, grouped by a frontmatter property. The same
block as `nexus-kanban` with `source: folder` and `view: grid` pre-set, so it
takes every key in the folder table above. See
[Workspaces and boards](/vault/workspaces/#nexus-board).

`view: board` gives it columns; `view: graph` or `show: … graph` gives it the
link web. Both are rendered by `nexus-graph` below, which is where they moved —
an existing fence reaches them unchanged.

## `nexus-graph`

One folder as a wall of cards or as the web of links between its notes. Neither
has columns and neither writes anything into a note, which is why they are not
the board. Same keys as the folder table above. See
[Workspaces and boards](/vault/workspaces/#nexus-graph).

| Line | Meaning |
|---|---|
| `folder: …` | The folder to show; empty = the folder this note is in |
| `view: graph` | The link web — the default for this fence |
| `view: grid` | Every note once, as a sorted wall of cards |
| `view: board` | Hands the block back to the columns |
| `height: 260` | The web's height in pixels |

## `folder-overview`

The contents of a folder, rendered inside a note. See
[Folder notes](/vault/folder-notes/).

## `columns`

Side-by-side text, split on a delimiter (`===` by default). See
[Typography](/writing/typography/).

## `nexus-separator`

An image separator: a shaped horizontal rule. See [Banners](/writing/banner/).

## What happens to lines it does not understand

Every block that writes itself back — kanban, board, graph, planner — keeps
unrecognised lines and writes them out untouched. A rewrite can never eat a line
someone typed.

The board fences go one step further and keep the **spelling** a key was written
in, so a save does not turn `states: A, B` into three headings or
`statusproperty:` into `status:`. The exceptions are listed under
[Saving does not reshape the block](/tasks/kanban/#saving-does-not-reshape-the-block).
