---
title: One switch per module
description: What a module is, what turning one off actually does, and the full list.
sidebar:
  order: 1
---

A module is a feature with its own settings tab, its own switch at the top of
that tab, and its own key in `data.json`. Turning one off is not cosmetic: the
plugin never registers its commands, its code-block handlers, its event
listeners or its body classes in the first place.

That is why the list is long without the plugin being heavy for any one person.

## The list

| Key | Name | What it does |
|---|---|---|
| `homepage` | Dashboard | Rendered start page with cards, stats and quick actions |
| `theme` | Theme | Interface style, colour palette, spacing and corner radius |
| `explorer` | Explorer | Folder cards and the ribbon in the file tree |
| `folderNotes` | Folder Notes | A note that belongs to a folder, opened by clicking it |
| `icons` | Icons | An icon for any folder or file in the explorer |
| `hider` | Interface | Hide parts of the Obsidian interface |
| `banner` | Banner | Image at the top of a note, plus the note background |
| `callouts` | Callouts | Icon and colour per callout type |
| `columns` | Columns | Side-by-side text via a code block |
| `typography` | Typography | Replaces `--` `...` `->` while you type |
| `propertyHider` | Properties | Hide individual frontmatter properties |
| `tagTools` | Tags | Rename, merge and remove tags across the vault |
| `quicksketch` | Quick Sketch | Draw in a note with pen, touch or mouse |
| `inkCapture` | Ink Capture | Scans and handwriting from other apps |
| `calendar` | Calendar | Month view over your daily notes |
| `tasksCalendar` | CalDAV | Server accounts, local calendars, events and tasks |
| `search` | Search | Weighted search over title, tags, headings, properties, text |
| `workspaces` | Workspaces | Save and switch pane layouts |
| `focus` | Focus | Dims everything but the line you are writing |
| `sprint` | Sprint | Timed writing against a word goal |
| `editorial` | Editorial | Margin notes, pull quotes, drop caps, ornaments |
| `board` | Board | Every note of a folder as cards inside a normal note |
| `kanban` | Kanban | Columns and cards in a note, plus the board view of your tasks |
| `planner` | Planner | A month on one screen, one line per day |
| `vaultSync` | Vault sync | The whole vault to a WebDAV server, with daily backups |
| `quicknote` | Quick Note | A note you speak instead of type |

## Defaults

Most modules start **on**, because they only do something once you use them: the
typography module rewrites nothing until you type `--`, the kanban module renders
nothing until there is a block.

These start **off**, because they either need configuring or change how the app
behaves the moment they are on:

`homepage` · `hider` · `tasksCalendar` · `focus` · `vaultSync`

## Adding a module back later

Nothing is lost by turning one off. Settings stay in `data.json` under that
module's key, so switching it back on restores exactly what was there.
