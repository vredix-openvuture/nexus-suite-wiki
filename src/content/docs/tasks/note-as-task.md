---
title: A note as a task
description: Tracking a whole note without moving it or making a second one.
sidebar:
  order: 2
---

`nexus-task: true` in the frontmatter of **any** note puts it in the tasks view
and lets you tick it there — without moving it into the task folder, and without
a second note standing in for it.

Command **Track this note as a task** toggles it.

## Why

The case is a thought written down in the middle of something else that should
be picked up later. Taking it out of the note it belongs to would take the
context with it, which is exactly why a checklist line somewhere else is not
good enough. The note **is** the task.

## How it behaves

| | |
|---|---|
| Where it can live | Anywhere in the vault |
| Key | The note's path, not a basename in the task folder |
| Provider | Always `local` — a note is not on anyone's server |
| Ticking | Writes `status` and `completed` into that note's own frontmatter |
| In the list | Shows a small note icon; clicking opens the whole note |

It reads the same optional fields a real task note does: `due`, `priority`,
`repeat`, `bucket`, `nexus-project`.

## Turning it off

The `nexus-task` key is removed and the note leaves the list. The `status` it
collected stays, so switching tracking back on does not silently resurrect it as
open.

## Accepted values

`true`, and the strings `true`, `yes`, `y`, `1` — because YAML is not always
typed the way you expect. A real task note (`nexus-type: task`) is never treated
as a note tracking itself, even if it carries the key.
