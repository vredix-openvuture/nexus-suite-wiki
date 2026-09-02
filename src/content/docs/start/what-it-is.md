---
title: What it is
description: One plugin that replaces a dozen, and the reasoning behind doing it that way.
sidebar:
  order: 1
---

Nexus Suite is a single Obsidian plugin that does the work a stack of separate
ones used to do in this vault: the dashboard, the theme controls, the explorer
decoration, folder notes, icons, banners, callouts, columns, typography,
property hiding, tag tools, drawing, scan capture, spoken notes, two calendars,
task sync, search, kanban boards, a planner, a vault sync and workspaces — plus
a capture hub over everything you catch rather than write, and a map of the
vault's links.

## Why one plugin

Twelve plugins that each style the file explorer produce twelve sets of CSS that
fight each other, twelve settings pages with the same words in different places,
and a vault that breaks in a new way every time one of them updates. Putting
them in one plugin means one place where those decisions are made, and one
release to test.

The cost is honest: this plugin is large, and turning a module off is the only
way to make it small. So every module has a switch, and an off module does
nothing at all — see [One switch per module](/concepts/modules/).

## What it is not

- **Not a theme.** The look lives in the separate
  [Nexus theme](https://github.com/vredix-openvuture/nexus-theme). The plugin
  drives it (style, palette, spacing) and adds the surfaces the theme styles,
  but you can run either on its own.
- **Not a sync service.** [Vault sync](/sync/overview/) talks to a WebDAV server
  you already have. There is no account and no middle party.
- **Not a general task manager.** It reads and writes ordinary notes. A task is
  a note; a project is a note; a board is a code block in a note. Nothing is
  locked in a database.

## The shape of it

| | |
|---|---|
| **Modules** | Twenty-three, each with its own switch and its own settings tab. |
| **Storage** | Ordinary notes and frontmatter, plus `data.json` for settings. Secrets go to `localStorage`, unencrypted; what describes one machine goes under that machine's key in `data.json`. See [Where everything is stored](/concepts/storage/). |
| **Blocks** | ` ```quicksketch `, ` ```nexus-kanban `, ` ```nexus-planner `, ` ```nexus-agenda `, ` ```nexus-board `, ` ```nexus-graph `, ` ```columns `, ` ```folder-overview `, ` ```nexus-separator `. |
| **Platform** | Desktop and mobile. A handful of features need a desktop shell, and each one says so where it appears. |
