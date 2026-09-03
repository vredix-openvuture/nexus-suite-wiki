---
title: The first hour
description: What to turn on first, and what each choice commits you to.
sidebar:
  order: 3
---

Everything is off or on out of the box in a way that assumes nothing about your
vault. This is the order worth going in.

## 1. Pick a look

Settings → **Theme**. Two decisions that do not depend on each other:

- **Style** — the *shape* of the interface. `Mirobo` makes every pane a floating
  card; `Almost nothing` builds no cards at all. See [Style](/look/style/).
- **Palette** — the *colour* of whatever the style built. See
  [Palette](/look/palette/).

## 2. Turn off what you do not want

Every module has a switch at the top of its own settings tab. An off module
renders nothing, styles nothing and touches no note, so there is no cost to
leaving it off — and no reason to keep one on "just in case".

The ones that do nothing until you configure them: **Calendar**, **Vault
sync**, **Dashboard**.

## 3. If you draw

Turn on **Quick Sketch**, then run `Insert a sketch` in a note. The
[toolbar](/sketch/toolbar/) is worth five minutes: which buttons are in the bar
and which are in the `⋯` menu is yours to set, and it can differ per device.

## 4. If you keep tasks

Turn on **Calendar** and run `New task project` — a project is a note, and its
tasks are notes. See [Projects and tasks](/tasks/projects/). A Vikunja account
is only needed if the tasks also live on a server; everything works without one.

The module is called Calendar because it also holds the full-page month, where
each day carries what it is for. Its settings key is still `tasksCalendar`.

## 5. If you want the vault on more than one machine

[Vault sync](/sync/setup/) needs a WebDAV URL and an app password. Read
[How it decides](/sync/overview/) first: it is a three-way sync and it will
refuse to run in situations where a two-way one would quietly destroy things.

Each device adds its own server: the connection belongs to the machine, not to
the vault. See [What belongs to a device](/concepts/devices/).

:::tip[Do this one first]
Point it at an empty folder and let the first sync upload. Starting from an
empty server is the one case with no ambiguity at all.
:::
