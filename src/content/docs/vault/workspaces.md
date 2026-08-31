---
title: Workspaces and boards
description: Saved pane layouts, and every note of a folder as cards.
sidebar:
  order: 5
---

## Workspaces

Save a pane layout and switch back to it. Command **Open the workspace
switcher**.

| Setting | Values | Default |
|---|---|---|
| Select mode | `release` · `enter` | `release` |

`release` switches when you let go of the key, which makes the switcher work as
a hold-and-flick; `enter` waits for a confirmation.

## Boards

A ```` ```nexus-board ```` block renders every note of a folder as cards inside
an ordinary note — a subject dashboard.

Command **Insert a subject dashboard**.

| Setting | Default |
|---|---|
| Status property | `status` |

Cards group by that frontmatter property, so a folder of notes with
`status: reading` / `status: done` becomes a board without anything else being
set up.

This is the read-only cousin of the [kanban board](/tasks/kanban/): a board
block *shows* what is in a folder, a kanban block *is* the data.

## The dashboard

The **Dashboard** module (settings key `homepage`) is the rendered start page:
cards, stats and quick actions. It starts off.

| Setting | Default | |
|---|---|---|
| Ribbon | on | An icon to open it |
| Open on startup | on | |
| Per device | off | Each device gets its own dashboard document |
| Stats | total, streak | Which counters are shown |

**Per device** keeps a separate layout per installation in
`homepage.profiles[deviceId]`. Those documents do sync, but each device reads
only its own entry — so a phone dashboard and a desktop dashboard can differ
without either overwriting the other.
