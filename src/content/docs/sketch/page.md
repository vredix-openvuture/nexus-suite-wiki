---
title: The page
description: Paper, width, growth, zoom and scrolling.
sidebar:
  order: 4
---

## Paper

| Setting | Values | Default |
|---|---|---|
| Default paper | `native` · `paper` · `white` · `black` | `paper` |
| Paper texture | on / off | on |
| Invert ink on dark paper | on / off | on |

`native` is transparent, so the note's own background shows through. `paper` is
a slightly yellowish off-white. The paper colour also owns the colour of the
background pattern, so a grid stays legible on any of them.

**Invert ink on dark paper** lifts only near-black ink on the black paper, so a
dark drawing stays readable while vivid colours keep their punch. It is
non-destructive: colours are changed for display and export, never in the file.

A single note can override the default with `sketch-bg: black` in its
frontmatter.

## Background pattern

`none` · `grid` · `graph` · `lines` · `dots` · `cross` · `isometric` ·
`iso dots`, with sliders for spacing and opacity.

The default spacing of 27 is not arbitrary: the canvas is 1600 units wide, which
stands for 297 mm — A4 landscape — so 27 units is about 5 mm, the squares of
real grid paper.

## Width

The sheet has a **fixed width**, set in Settings → Quick Sketch → **Sheet
width** (default 1100 px, 0 = fill).

That cap is what stops a tablet turned to landscape from rendering the same note
at a bigger ink size. Endless paper has a fixed width by definition; without the
cap, handwriting that fitted the page in portrait no longer does in landscape,
and the note looks like it grew.

## Growth

**Auto-extend** keeps blank paper below the pen while you write near the bottom,
so a page never runs out mid-sentence. It is off by default in a note and always
on in the full-size editor, where the whole point is an endless sheet.

Slate notes grow endlessly on their own, so the toggle does not appear there.

## Zoom and scrolling

| Gesture | What it does |
|---|---|
| One finger, not zoomed | Scrolls the page |
| One finger, zoomed in | Pans the canvas |
| Two fingers, pinching | Zooms |
| Two fingers, parallel | Scrolls the page |
| Pen or mouse | Always draws |

Zoom runs from **0.3×** — an overview of a long page — to **5×**. Returning to
exactly 1× restores the resting sheet width.

A one-finger scroll now **coasts** after the finger lifts, with velocity taken
from the tail of the drag. A drag-scroll that stops dead reads as slow however
fast the drag was, which is what made this feel heavier than the note around it.
Any new touch, or the pen, stops the coast immediately.
