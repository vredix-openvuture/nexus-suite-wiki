---
title: One switch per module
description: What a module is, what turning one off actually does, and the full list.
sidebar:
  order: 1
---

A module is a feature with its own settings tab, its own switch at the top of
that tab, and its own key in `data.json`.

Turning one off is not cosmetic. The plugin wires everything up once at load —
Obsidian has no way to take a command or a handler back out afterwards — and
every module then reads its own switch before it does anything. An off module
renders no block, sets no body class, and returns from its listeners without
touching the vault. What it costs is the listener returning, which is nothing
you can measure.

Its commands stay in the palette, which is the deliberate part: a command that
vanished would take your hotkey with it. Run one whose module is off and it
either says so or does the harmless half of its job — inserting a code block
into a note is not dangerous, it simply will not render. See
[Commands](/reference/commands/).

That is why the list is long without the plugin being heavy for any one person.

## The list

| Key | Name | What it does |
|---|---|---|
| `homepage` | Dashboard | Rendered start page with cards, stats and quick actions |
| `theme` | Theme | Interface style and colour palette |
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
| `calendar` | Mini calendar | Month grid over your daily notes, in the sidebar |
| `tasksCalendar` | Calendar | Local calendars, events and tasks — the full-page view |
| `search` | Search | Weighted search over title, tags, headings, properties, text |
| `workspaces` | Workspaces | Save and switch pane layouts |
| `kanban` | Kanban | Columns and cards in a note, or every note of a folder — plus the board view of your tasks |
| `planner` | Planner | A month on one screen, one line per day — the paper-calendar view |
| `vaultSync` | Vault sync | The whole vault to a WebDAV server, with daily backups and conflict copies |
| `quicknote` | Chatter | A note you speak instead of type |
| `galaxy` | Galaxy | The vault as a turnable map of its links |

:::note[One exception]
`galaxy` has its key and its defaults but **no settings tab yet**, so its five
keys can only be changed in `data.json`. See [The galaxy](/vault/galaxy/#settings).
:::

## Defaults

Most modules start **on**, because they only do something once you use them: the
typography module rewrites nothing until you type `--`, the kanban module renders
nothing until there is a block.

These start **off**, because they either need configuring or change how the app
behaves the moment they are on:

`homepage` · `hider` · `tasksCalendar` · `vaultSync`

## Two calendars, and which is which

`calendar` is the **Mini calendar**: a month grid over your daily notes, in the
sidebar. `tasksCalendar` is **Calendar**: the full-page month, week and day view
over local calendars, events and tasks. They are separate modules because they
answer different questions, and each can be off without the other.

The key `tasksCalendar` is a leftover from when the module was called CalDAV.
Renaming a key means rewriting live `data.json` files, so the name changed and
the key did not.

## Adding a module back later

Nothing is lost by turning one off. Settings stay in `data.json` under that
module's key, so switching it back on restores exactly what was there.

## What was removed

Focus mode, writing sprints, editorial blocks and the separate Board module are
gone, not deprecated. The first three were three modules nobody used; the fourth
became a source of the kanban block rather than a module of its own. Notes are
untouched — the editorial marks were ordinary callouts and still render as
callouts.
