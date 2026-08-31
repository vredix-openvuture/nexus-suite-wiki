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

A board. Config lines, then one section per column and one checklist line per
card. See [Kanban](/tasks/kanban/).

| Line | Meaning |
|---|---|
| `title: …` | The board's name |
| `notes: …` | The folder new card notes are created in |
| `counts: false` | Hide the per-column count |
| `due: false` | Hide due dates on cards |
| `tags: false` | Hide tag chips |
| `compact: true` | Denser cards |
| `## Name @2` | A column with a WIP limit |
| `- [ ] text` | A card |

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

Every note of a folder as cards, grouped by a frontmatter property. See
[Workspaces and boards](/vault/workspaces/).

## `folder-overview`

The contents of a folder, rendered inside a note. See
[Folder notes](/vault/folder-notes/).

## `columns`

Side-by-side text, split on a delimiter (`===` by default). See
[Typography](/writing/typography/).

## `nexus-separator`

An image separator: a shaped horizontal rule. See [Banners](/writing/banner/).

## What happens to lines it does not understand

Every block that writes itself back — kanban, planner — keeps unrecognised lines
and writes them out untouched. A rewrite can never eat a line someone typed.
