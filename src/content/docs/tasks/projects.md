---
title: Projects and tasks
description: Both are ordinary notes, and what that means in practice.
sidebar:
  order: 1
---

A **project** is a note with `nexus-type: project`. A **task** is a note with
`nexus-type: task`. Both are named after their title; ids live in frontmatter,
never in a file name or a checklist line.

A project note holds a live `## Tasks` checklist. That checklist and the task
notes are kept in step in both directions.

## Making a task by typing one

Write a line under `## Tasks` in a project note:

```md
## Tasks
- [ ] Pay the invoice
```

It becomes a task note, inherits the project's provider and account, and the
line turns into a link to it. A project that syncs to a server therefore gets
the task pushed on the next sync.

The line you are still typing is left alone until the cursor moves away.

## Ticking

Ticking works everywhere — the project note, the [agenda block](/tasks/agenda/),
the tasks page — and always writes to the task note **and** back to the
checklist.

A repeating task rolls its due date forward instead of closing — except on
Vikunja, whose server owns the repeat, so the task is only marked done and the
sync pushes that. A completed task leaves the checklist only once the server has
it: until the sync confirms, un-ticking is still possible.

## The tasks page

Ribbon icon `list-checks`, or command **Open the tasks page**. The project tree
on the left, the selected project's tasks on the right, and a line at the bottom
to add one.

Root projects appear as image cards; subprojects are indented with their
rolled-up open count, so a collapsed parent does not look empty because the work
sits one level down.

## Frontmatter

| Key | Meaning |
|---|---|
| `nexus-type` | `task` or `project` |
| `nexus-project` | The project a task belongs to |
| `nexus-parent` | The parent of a subproject |
| `nexus-provider` | `local` · `vikunja` |
| `nexus-account` | Which configured account |
| `nexus-id` | The id on the server, once it has one |
| `status` | `needs-action` or `completed` |
| `due` | `YYYY-MM-DD`, optionally `THH:mm` |
| `priority` | A number; 1–3 low, 4–6 medium, 7–9 high |
| `repeat` | A repeat rule; the due date advances instead of closing |
| `bucket` | Which board column it sits in. Empty means the first. |

## Folders

| Setting | Default |
|---|---|
| Projects folder | `Tasks/Projects` |
| Items folder | `Tasks/Items` |
