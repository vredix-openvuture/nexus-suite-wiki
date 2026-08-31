---
title: The agenda block
description: One day — events, tasks and backlinks — inside an ordinary note.
sidebar:
  order: 3
---

A ```` ```nexus-agenda ```` block puts one day inside a note. It is built for a
daily-note template: drop it in once and every daily note carries its own
agenda.

````md
```nexus-agenda
date: note-date
show: calendar, tasks, linked
```
````

Command **Insert an agenda block** writes the skeleton.

Ticking a task here writes to its task note **and** to the checklist line in its
project note. A repeating task advances its due date instead of closing.

## Keys

| Key | Values | Default |
|---|---|---|
| `date` | `today` · `note-date` (from the file name) · `tomorrow` / `yesterday` · `+3` / `-1` · `2026-07-29` | `today` |
| `show` | any of `calendar`, `tasks`, `linked` — what is not named is off | all three |
| `hide` | the same names, switched off individually | — |
| `title` | replaces the date heading | the day |
| `calendars` | calendar names, comma separated | all |
| `project` | project names, comma separated | all |
| `state` | `open` · `done` · `all` | `open` |
| `priority` | `>=5` · `=9` · `high` / `medium` / `low` | — |
| `due` | any of `day`, `overdue`, `week`, `month`, `upcoming`, `none`, `any` | `day, overdue` |
| `sort` | `smart` · `due` · `priority` · `title` | `smart` |
| `limit` | maximum number of tasks | all |
| `exclude` | folders kept out of the linked-notes list | — |
| `hide-empty` | `true` drops sections that have nothing to show | `false` |

A note whose name holds no date falls back to today, so the block is never a
dead end.
