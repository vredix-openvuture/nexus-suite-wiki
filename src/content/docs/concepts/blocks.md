---
title: Blocks that are their own data
description: Why a board, a planner and a sketch live inside their own fence, and what that buys you.
sidebar:
  order: 2
---

Several features are code blocks in an ordinary note, and the block **is** the
data — there is no separate database and no hidden id.

````md
```nexus-kanban
title: Roadmap
## Backlog
- [ ] Rework the tab bar
## Doing @2
- [ ] Vikunja buckets
## Done
- [x] Pinned tabs
```
````

## Why not a database

Three reasons, in order of how much they matter:

1. **It still says something without the plugin.** Uninstall it and the board
   above is a heading and a checklist. A database leaves a dead reference.
2. **It travels with the note.** Copy the file, and the board comes with it.
3. **It is hand-editable.** A find-and-replace across the vault reaches it.

The cost is that the block has to be rewritten in place every time you drag a
card, and doing that safely is more work than writing a row to a table. That
work is done once, in `lib/blockedit.js`, and shared by every block that needs
it.

## How a block finds itself again

Obsidian can map a rendered element back to its source lines, but it stops
answering once it has re-rendered the block — which is exactly what the first
save causes. A block that relied only on that would accept one edit and silently
ignore every one after it.

So the block is found by its **content**: the body that was last rendered
identifies it, which is also what distinguishes it from a second board of the
same kind in the same note. If the content cannot be found and there is exactly
one block of that kind in the note, that one is used.

:::note
If you edit a fence by hand while its rendered version is open, the next change
made in the rendered version wins. Reload the note after editing the source.
:::

## The blocks

| Fence | What it renders | Page |
|---|---|---|
| `quicksketch` | A drawing pad | [Quick Sketch](/sketch/overview/) |
| `nexus-kanban` | A board — cards in the fence, or the notes of a folder | [Kanban](/tasks/kanban/) |
| `nexus-planner` | A month or a week, one line per day | [The planner](/tasks/planner/) |
| `nexus-agenda` | One day: events, tasks, backlinks | [The agenda block](/tasks/agenda/) |
| `nexus-board` | Every note of a folder as cards | [Workspaces and boards](/vault/workspaces/#nexus-board) |
| `nexus-graph` | The same notes as a grid or a web of links | [Workspaces and boards](/vault/workspaces/#nexus-graph) |
| `folder-overview` | The contents of a folder | [Folder notes](/vault/folder-notes/) |
| `columns` | Side-by-side text | [Typography](/writing/typography/) |
| `nexus-separator` | An image separator | [Banners](/writing/banner/) |

## When the block is not the data

Three of them are a **question**, not a store. `folder-overview`, `nexus-board`
and `nexus-graph` — and `nexus-kanban` with `source: folder` — hold their
configuration in the fence and read their contents from the vault. Dragging a
card on one of those writes into the note it stands for, not into the block.

That is the same principle one level up: the answer lives in the note's own
frontmatter, so it survives without the plugin and any other block can read it.
