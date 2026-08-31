---
title: Kanban
description: A board in a note, and the board view of your tasks.
sidebar:
  order: 4
---

Two boards, one idea: a column is a state, a card is a thing, and dragging one
changes the other.

## A board in a note

A ```` ```nexus-kanban ```` block **is** the board. The columns and cards live
inside the fence, so it is one hand-editable text that travels with the note and
still says something without the plugin.

````md
```nexus-kanban
title: Roadmap
notes: Projects/Roadmap
## Backlog
- [ ] Rework the tab bar
- [ ] [[Kanban module|Kanban]] @2026-08-25 #plugin
  the toolbar first, then the overflow menu
## In progress @2
- [ ] Vikunja buckets
## Done
- [x] Pinned tabs
```
````

| Syntax | Meaning |
|---|---|
| `## Heading` | A column |
| `@2` after a heading | Its WIP limit; the count turns red above it |
| `- [ ] text` | A card |
| `- [x] text` | A done card |
| `[[Note\|Alias]]` | The card points at a note; the alias is what is shown |
| `@2026-08-25` | A due date |
| `#tag` | A tag chip on the card |
| An indented line under a card | Its description, shown under the title |

Column colours come from what the column **is**, read off its own name — nobody
should have to configure that "Done" is green. Both English and German names are
recognised, so renaming a column does not cost you its colour.

The default columns for a new board are `Backlog / In progress / Done`
(Settings → Kanban).

Commands: **Insert a kanban board**, **New kanban board (note)**.

### The card editor

**Clicking a card opens it**: text, description, due date, tags, done, which
column it sits in, and the note it points at — with **To the note** as a button,
so a card that has a note can still be edited. Ctrl/⌘-click goes straight to the
note instead, for a board used as an index.

The description is shown on the card under its title, **four lines at most** and
then an ellipsis; the whole text stays in the editor and in the block.

### The card menu

Open the note, open it in a new tab, unlink it, create a note for the card, link
an existing note, edit, set a due date, mark done, move to another column,
delete.

### Anything it does not understand is kept

Lines the parser does not recognise are written back untouched, so a rewrite —
a drag, a rename, a new card — can never eat a line someone typed.

## The board view of your tasks

The tasks page has a board mode. Its columns are your task
[buckets](/tasks/projects/), and a drag writes `bucket` into the task note.

With a Vikunja project, the board uses that project's own buckets and pushes a
drag straight back to the server. The `bucket:` line in the note is the offline
copy, so the board still reads correctly where no sync runs. Without a
credential on the device, or without a kanban view on the server, it falls back
to your own columns and says so.
