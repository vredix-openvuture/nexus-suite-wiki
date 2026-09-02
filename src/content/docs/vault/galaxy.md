---
title: The galaxy
description: The vault's links laid out in three dimensions, drawn on an ordinary canvas.
sidebar:
  order: 7
---

Command **Open the galaxy**, or the ribbon icon. Every note is a point, every
link a line, and the whole thing is laid out in three dimensions and drawn to a
plain 2D canvas.

## It is a second view, not a switch on Obsidian's

This is the question everyone asks first, so: **Obsidian's own graph view is a
closed core plugin.** It cannot be extended, read or drawn into, and no plugin
can add a 3D toggle to it. The galaxy is a separate view that sits beside it —
its own layout, its own drawing, its own settings.

Nothing is added to the bundle for it. There is no graph library: the layout is
a single file of arithmetic with no DOM and no Obsidian in it — which is also
what makes its behaviour testable — and the picture is drawn by hand.

## What makes it read as depth

Four things, and none of them is a glow:

- The perspective divide, so a nearer note is genuinely larger.
- The painter's algorithm, so what is in front covers what is behind.
- A fade towards the background colour, so the far side recedes instead of
  cluttering.
- Links drawn first and fainter than the notes they join.

Colours are read off the theme rather than written into the view, so it follows
your palette. A note's size is how many links it has, so hubs read as hubs, and
the seven biggest carry their name on the map — enough that it reads as a map of
somewhere rather than a cloud of dots.

## Moving around it

| Gesture | 3D | 2D |
|---|---|---|
| Drag | Turns it | Pans it |
| Flick | Keeps spinning, and slows down | — |
| Wheel · pinch | Zoom | Zoom |
| Hover | Names the note and lights its neighbours | The same |
| Click | Opens the note | The same |

Pointer events throughout, so a pen on a tablet orbits exactly as a mouse does.
On touch the first tap lights a note and the second opens it, because a finger
has not hovered by the time it taps.

The toolbar carries the **3D / 2D** switch, the note and link count, and a
button back to the starting view. The switch animates between the two rather
than cutting.

## It unfolds while you watch

The layout is stepped inside the frame loop instead of being computed up front,
because watching the vault unfold is half of what this is for. Once it has
settled it never steps again: a frame after that is a projection and a sort.

It is **deterministic** — the same vault opens the same way twice. A map that
rearranged itself on every open could neither be returned to nor reasoned about.

## What it costs

Notes push each other apart, and that is every pair against every other: the
cost is quadratic in the number of notes. Measured on the developer's machine,
for the whole unfold rather than one step:

| Notes | Steps | Whole unfold | Per step |
|---|---|---|---|
| 150 | 468 | 45 ms | 0.10 ms |
| 400 | 248 | 134 ms | 0.54 ms |
| 800 | 600 | 1 303 ms | 2.17 ms |
| 1500 | 600 | 4 557 ms | 7.59 ms |

A vault of a few hundred notes opens instantly. At fifteen hundred the unfold is
four and a half seconds there and several times that on a tablet, which is where
it stops being pleasant. Above nine hundred notes the step budget is cut from
600 to 220 — fewer steps rather than a slower unfold.

Beyond that the honest fix is a different algorithm, not a bigger budget: the
ceiling is the pair count, and no amount of tuning moves a quadratic.

## Settings

:::caution[No settings tab yet]
The Galaxy module is the one module with **no page in Settings**. Its five keys
exist in `data.json` and are read, but nothing writes them from the interface —
so for now they can only be changed by editing the file. The module is on with
its ribbon icon until you do.
:::

| Key | Default | |
|---|---|---|
| `galaxy.enabled` | `true` | Gates the ribbon icon; the command opens the view regardless |
| `galaxy.ribbon` | `true` | An icon to open it |
| `galaxy.drift` | `true` | The slow idle turn |
| `galaxy.linkDistance` | `60` | The rest length of a link; clamped to 20–200 |
| `galaxy.showOrphans` | `true` | `false` drops every note that has no link |

**Drift** is a switch and not a slider because it is the first thing anyone will
want off. It is also off automatically while the view is flat, and the drift and
the 2D/3D tween are both off entirely under `prefers-reduced-motion`.

Those two are the only decorative motion in the plugin. The project's own style
rules ban it; this view is the deliberate exception, and it goes no further than
this view.
