---
title: Frontmatter
description: Every key the plugin reads from a note.
sidebar:
  order: 4
---

## Type

| Key | Values | Meaning |
|---|---|---|
| `nexus-type` | `task` · `project` · `quicknote` | What kind of note this is |
| `nexus` | `slate` | Render the note as [a page of paper](/sketch/slate/) |
| `nexus-task` | `true` · `yes` · `y` · `1` | [This note is a task](/tasks/note-as-task/) |

## Tasks

| Key | Meaning |
|---|---|
| `nexus-project` | The project a task belongs to |
| `nexus-parent` | The parent of a subproject |
| `nexus-provider` | `local` · `caldav` · `vikunja` |
| `nexus-account` | Which configured account |
| `nexus-id` | The id on the server |
| `nexus-color` | A project's colour |
| `status` | `needs-action` · `completed` |
| `completed` | When it was ticked |
| `due` | `YYYY-MM-DD`, optionally `THH:mm` |
| `priority` | 1–9 |
| `repeat` | A repeat rule |
| `bucket` | The board column. Empty means the first. |
| `sequence` | Bumped on each change, for the server |

## Notes

| Key | Meaning |
|---|---|
| `title` | Overrides the file name wherever a title is shown |
| `banner` | The banner image |
| `sketch` | The id of the sketch belonging to a slate note |
| `sketch-bg` | `native` · `paper` · `white` · `black`, for this note |

## Quick Note

| Key | Meaning |
|---|---|
| `recorded` | When it was spoken |
| `seconds` | How long the recording was |
| `engine` | `local` · `browser`, so a poor transcript can be explained later |

## Hiding a key

The **Properties** module hides individual frontmatter keys from the rendered
block without removing them from the file. `propertyHider.hidden` is the list;
`propertyHider.reveal` shows them again temporarily.
