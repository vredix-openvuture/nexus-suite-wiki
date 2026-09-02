---
title: Commands
description: Every command the plugin registers, and the module it belongs to.
sidebar:
  order: 2
---

Every command is registered whatever your settings say — the plugin never
removes one. Some check their module when you run them and report that it is
switched off; the rest simply do their job, because what they do is harmless
with the module off.

The **Module** column below is therefore the feature a command belongs to, not a
switch that hides it. Where it says *none*, no module governs the command at
all.

Two calendar commands read almost alike. **Open the calendar in the sidebar**
belongs to the Calendar module and opens its side panel, which lists the next
seven days; **Open calendar in the sidebar** belongs to the Mini calendar and
opens the month grid over your daily notes.

Two capture commands read almost alike as well. **Open the capture hub** and
**Open the ink gallery** open the same view; the second one lands on the Ink tab
and exists so a hotkey set against the old gallery keeps working. The hub itself
belongs to no single module — its three tabs are Ink Capture, Quick Sketch and
Chatter — which is why it says *none*.

**Insert a subject dashboard** is gone. It is now two commands, because the
board and the link web are two blocks: **Insert a folder board** writes a
`nexus-kanban` fence with `source: folder`, **Insert a folder graph** writes a
`nexus-graph` one. Both are pre-filled with the folder of the note you are in.

## Creating things

| Command | Module |
|---|---|
| Insert a sketch | Quick Sketch |
| New slate (drawing note) | Quick Sketch |
| Toggle slate mode | Quick Sketch |
| Insert a kanban board | Kanban |
| New kanban board (note) | Kanban |
| Insert a planner | Planner |
| Insert an agenda block | Calendar |
| Insert a folder board | Kanban |
| Insert a folder graph | Kanban |
| Insert a callout | Callouts |
| Insert an image separator | Banner |
| Create a folder note for this folder | Folder Notes |
| New task project | Calendar |
| New task | Calendar |
| New event | Calendar |
| Chatter (speak a note) | Chatter |
| Capture a scan | Ink Capture |

## Opening things

| Command | Module |
|---|---|
| Open dashboard | Dashboard |
| Open the full-page calendar | Calendar |
| Open the calendar in the sidebar | Calendar |
| Open calendar in the sidebar | Mini calendar |
| Open the tasks page | Calendar |
| Open the tasks in the sidebar | Calendar |
| Open the capture hub | none |
| Open the capture hub in the sidebar | none |
| Open the ink gallery | Ink Capture |
| Open the galaxy | Galaxy |
| Open the scratch panel | none |
| Open search | Search |
| Search sketches | Quick Sketch |
| Open the workspace switcher | Workspaces |
| Open the timer panel | none |

## Doing things

| Command | Module |
|---|---|
| Sync the vault now | Vault sync |
| Back the vault up to the server now | Vault sync |
| Sync calendars and tasks now | Calendar |
| Read the handwriting in this sketch | Quick Sketch |
| Track this note as a task | none |
| Rename a tag … | Tags |

## Desktop only

Three commands need a desktop shell. On mobile they report that rather than
failing quietly.

- Read the handwriting in this sketch — it runs a program on the machine
- Chatter (speak a note), with the local recogniser — the same
- Sync calendars and tasks now — the Vikunja client is behind the same guard, so
  a phone reads the synced notes and a desktop does the round trip
