---
title: Folder notes
description: A note that belongs to a folder, and the overview block.
sidebar:
  order: 2
---

A note that belongs to a folder and opens when you click the folder. The
defaults mirror the folder-notes plugin's own, so an existing vault of
`{{folder_name}}` notes keeps working unchanged.

| Setting | Default | |
|---|---|---|
| Note name | `{{folder_name}}` | Tokens: `{{folder_name}}`, `{{date}}` |
| File type | `md` | `md` · `canvas` · `base` |
| Storage | `inside` | `inside` the folder, or beside it |
| Open trigger | `click` | `click` · `ctrl` · `alt` · `off` |
| Open in a new tab | off | |
| Focus an existing tab | off | Rather than opening a second one |
| Collapse on click | off | Clicking also folds the folder |
| Hide in the explorer | on | The note itself is not listed under its own folder |
| Underline · Bold · Italic | on · off · off | How a folder with a note is marked |
| Open from a path | on | A link to the folder opens the note |
| Create automatically | off | |
| Template | — | A note used as the body for new ones |
| Sync rename | on | Renaming the folder renames the note |
| Sync delete | off | Deleting the folder deletes the note |
| Confirm delete · rename | on · on | |
| Exclude folders | — | |
| Supported types | `md`, `canvas`, `base` | |

## The overview block

A ```` ```folder-overview ```` block lists the contents of a folder inside a
note — the natural body for a folder note.

Command **Create a folder note for this folder** makes the note and drops the
block in.
