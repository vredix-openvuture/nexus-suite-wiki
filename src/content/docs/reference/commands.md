---
title: Commands
description: Every command the plugin registers, and the module it belongs to.
sidebar:
  order: 2
---

All of them appear in the command palette. A command only exists while its
module is on.

## Creating things

| Command | Module |
|---|---|
| Insert a sketch | Quick Sketch |
| New slate (drawing note) | Quick Sketch |
| Toggle slate mode | Quick Sketch |
| Insert a kanban board | Kanban |
| New kanban board (note) | Kanban |
| Insert a planner | Planner |
| Insert an agenda block | CalDAV |
| Insert a subject dashboard | Board |
| Insert a callout | Callouts |
| Insert a margin note | Editorial |
| Insert a pull quote | Editorial |
| Insert an ornamental divider | Editorial |
| Insert an image separator | Banner |
| Create a folder note for this folder | Folder Notes |
| New task project | CalDAV |
| New task | CalDAV |
| New event | CalDAV |
| Quick note (speak it) | QuickNote |
| Capture a scan | Ink Capture |

## Opening things

| Command | Module |
|---|---|
| Open dashboard | Dashboard |
| Open the full-page calendar | CalDAV |
| Open the calendar in the sidebar | CalDAV |
| Open calendar in the sidebar | Calendar |
| Open the tasks page | CalDAV |
| Open the tasks in the sidebar | CalDAV |
| Open the ink gallery | Ink Capture |
| Open search | Search |
| Search sketches | Quick Sketch |
| Open the workspace switcher | Workspaces |

## Doing things

| Command | Module |
|---|---|
| Sync the vault now | Vault sync |
| Back the vault up to the server now | Vault sync |
| Sync calendars and tasks now | CalDAV |
| Read the handwriting in this sketch | Quick Sketch |
| Track this note as a task | CalDAV |
| Set the checklist state | Editorial |
| Toggle focus mode | Focus |
| Start a writing sprint | Sprint |
| Stop the writing sprint | Sprint |
| Rename a tag … | Tags |

## Desktop only

Two commands need a desktop shell, because they run a program on the machine.
On mobile they report that rather than failing quietly.

- Read the handwriting in this sketch
- Quick note (speak it), with the local recogniser
