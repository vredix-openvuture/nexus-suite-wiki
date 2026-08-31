---
title: Palette
description: Fifteen palettes, picked by looking at them.
sidebar:
  order: 2
---

Settings → Theme → **Palette**. Picked from swatches rather than from names:
each one is a disc in four quarters — ground, accent, second hue, ink — beside a
plain name.

## The groups

| Group | Palettes |
|---|---|
| **Nexus** | Nexus · Azure · Teal · Emerald · Slate · Sunset |
| **Neutral** | Minimal |
| **Classics** | Catppuccin · Dracula · Everforest · Gruvbox · Nord · Solarized · Tokyo Night |
| **Live** | Velumeron |

## Nexus, the default

"Ember & Prussian": a molten Rain Boots orange accent over a deep aubergine
ground, with a cool Prussian blue as the second hue on the borders. Madder Lake
and Claret fill the warm red and wine slots.

The five identity colours are the swatch card one to one. The light text tones
are warm tints of the same family, because a dark theme needs a legible light
ink.

## Minimal

The only palette that follows Obsidian's own light and dark mode: a white page
with a `#f7f7f5` sidebar in light, `#191919` and `#202020` in dark.

Unlike the signature palettes it carries explicit light and dark blocks. A
neutral scheme is defined by *not* mixing the accent into its surfaces, which is
what the other palettes do.

## Velumeron

Not a fixed palette: it follows the live wallust snippet, so the vault takes its
colours from the wallpaper. It only does anything when the Velumeron desktop
shell is running and writing that snippet.

## What the accent reaches

`color3` is not only the theme's accent. Obsidian paints a good part of its own
interface — the selected row of a menu, suggestion lists, checkboxes, toggles,
sliders, focus rings — from an accent of its own, which it builds from three
numbers rather than a colour. The plugin converts the palette's `color3` into
those numbers and hands them over, so those surfaces follow the palette too.

This needs the **Nexus theme at 0.7.1 or newer**. On an older theme the panel of
a dropdown follows the palette while the selected row inside it stays on
Obsidian's default blue-violet.

If you have set an accent by hand in *Appearance → Accent color*, the palette
overrides it while a fixed palette is active.

## Slots

Every palette defines the same slots, and the theme derives everything from
them:

| Slot | Role |
|---|---|
| `color0` | Ground |
| `color3` | Accent |
| `color5` | Border source |
| `color7` / `foreground` | Text |
| `color8` | Muted |
| `color15` | Bright |

That mapping is identical to Velumeron's own, which is why the two match when
they run together.
