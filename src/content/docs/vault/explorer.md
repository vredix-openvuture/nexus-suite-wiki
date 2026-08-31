---
title: Explorer
description: Folder cards in the file tree, and hiding parts of the interface.
sidebar:
  order: 1
---

## Folder rails

Top-level folders are marked by a two-pixel rail on their left edge.

| Setting | Default | |
|---|---|---|
| Folder background | on | The rails |
| Intensity | 22 | How present the rail is, from a hairline to a firm mark |

The rail carries the palette: warm Ember at the top of the list, cooling to
Prussian at the foot, so the list has a direction as well as a grouping. The
sweep is spread over seven positions, because a vault has four to eight
top-level folders and a gradient sized for more would leave a real one entirely
in the warm end.

Hovering a folder lifts its row and brightens its rail, so the hover reads as
*this folder* rather than *this row*.

:::note[This replaced filled blocks]
Folders used to be tinted blocks. A sidebar is short of exactly one thing —
width — and a block spends it twice, on its own margin and on its inner padding.
A folder is also a place rather than a weighted category, and with no coloured
field competing, the accent is free for the file you are actually looking at.
The full reasoning is in the theme's `docs/style-guide.md`.
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
