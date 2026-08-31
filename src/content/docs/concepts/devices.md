---
title: What belongs to a device
description: The line between a setting that follows you and one that does not.
sidebar:
  order: 4
---

Some choices are about you and should follow you to every machine. Some are
about the machine in front of you and should stay there. Mixing the two is what
makes a synced vault rearrange itself every time you open it somewhere else.

## Belongs to the device

| | Stored in |
|---|---|
| Credentials (CalDAV, Vikunja, WebDAV) | `localStorage` |
| The sketch toolbar, if you gave this device its own | `localStorage` |
| The device id, used to name conflict copies | `localStorage` |
| The window layout (`workspace.json`) | The vault, but [never synced](/sync/overview/) |
| The graph view state (`graph.json`) | Same |
| The vault sync's own state file | Same |

## Follows you

Everything else on the [settings page](/reference/settings/): the style, the
palette, folder-note behaviour, callout definitions, pen sizes, palettes,
kanban columns, planner defaults.

With *Carry the settings too* on, [vault sync](/sync/setup/) also carries the
rest of `.obsidian` — other plugins and their settings — minus the four
device-specific files above.

## Giving one device its own toolbar

Settings → Quick Sketch → **Just this device**. It copies whatever is on screen
now into `localStorage` and from then on that device reads its own copy. Turning
it back off returns it to the shared setting; nothing is lost either way.

The case it exists for: a phone wants three buttons and a menu where a desktop
wants all of them, and neither should have to be a compromise for the other.
