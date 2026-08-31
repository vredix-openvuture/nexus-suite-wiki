---
title: Explorer
description: Folder cards in the file tree, and hiding parts of the interface.
sidebar:
  order: 1
---

## Folder cards

Top-level folders render as tinted blocks rather than as plain rows, with their
children inside the same block — so an expanded folder reads as one thing.

| Setting | Default | |
|---|---|---|
| Folder background | on | The tinted blocks |
| Intensity | 22 | The base strength of the tint |

The tint runs from warm at the top of the list to cool at the bottom, so the
list has a direction as well as a grouping.

:::note[Under review]
Whether the blocks stay as they are is an open question — four alternatives are
being compared. Nothing changes until one is picked.
:::

## Hiding parts of the interface

The **Interface** module (settings key `hider`). It starts off; each item is
its own switch, and all of them are off inside it.

| Switch | Hides |
|---|---|
| Tooltips | Obsidian's hover tooltips |
| Scrollbars | Every scrollbar |
| Status bar | The bar at the bottom |
| Title bar | The window buttons |
| Vault name | The vault name in the sidebar |
| Tab bar | The row of tabs |
| Instructions | The hint lines in prompts |
| Ribbon | The left icon rail |
| Explorer buttons | The new-note and sort buttons above the tree |

Each is a body class, so a snippet of your own can key off the same state.

## The ribbon

`ribbon.mode` decides how the left icon rail behaves: `hover` (default) shows it
when the pointer is near, `always` pins it, `hidden` removes it.

## Pinned tabs

The dashboard, the calendar page and the tasks page can live permanently in the
tab bar as an icon: pinned in Obsidian's own sense, the close button hidden, and
reopened if something detaches them anyway.

| Key | Default |
|---|---|
| `pinnedTabs.home` | off |
| `pinnedTabs.calendar` | off |
| `pinnedTabs.tasks` | off |
