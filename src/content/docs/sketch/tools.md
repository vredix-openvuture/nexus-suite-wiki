---
title: The tools
description: Pens, selection, spacing, insert, the ruler and the outline.
sidebar:
  order: 3
---

## Pens

Five nibs, each with its own width, colour and behaviour sheet. Tap a pen chip
in the options row a second time to open its settings.

| Pen | Character |
|---|---|
| Fountain | Strong pressure response, sharp tips, dries out on a fast stroke |
| Ballpoint | Nearly constant width |
| Pencil | A grain filter over the stroke, slightly translucent |
| Brush | Wide, very pressure-sensitive, long taper |
| Calligraphy | A fixed 45° nib: width follows the direction of travel |

The **highlighter** is separate: translucent, multiply-blended, and consecutive
strokes of one colour render inside a single group so overlaps do not stack
darker.

| Setting | What it changes |
|---|---|
| Smoothing | How much the input is eased toward the cursor |
| Pressure | How strongly pressure varies the width |
| Sharpness | The distance over which the tips taper to a point |
| Speed fade | How much a fast stroke thins out |
| Tip (highlighter) | Rounded or straight (chisel) |
| Self-overlap (highlighter) | Whether the pen's own overlaps darken |

## Shape recognition

Hold the pen still for about two thirds of a second right after drawing and the
stroke snaps to a clean line, rectangle, ellipse or triangle.

A snapped shape **keeps its description**, not just the points it became. Select
it on its own later and its own control points appear, so a rectangle can be
re-cornered rather than only scaled as a block. Rotating an ellipse gives up
those handles, because the description has no room for an angle and drawing them
anyway would be a lie.

## Select

Lasso, rectangle or ellipse. A stroke is caught when **any** of its points is
inside the region: requiring the whole stroke means a lasso around a word misses
every letter whose tail pokes out.

An object — a photo, a sticker, a note — is caught by its **centre**, so a lasso
clipping one edge of a large picture does not drag the whole thing along. A tap
on one picks it up directly.

With something selected: drag inside the frame to move, drag a handle to scale,
drag the handle on the stalk to rotate. Hold <kbd>Shift</kbd> to keep the aspect
ratio, or to snap rotation to 15°. The ink scales with the drawing, so the ratio
between line width and size is kept.

The options row then offers duplicate, delete, and the colours — which recolour
what is selected as well as arming the pen.

## Spacing

Grab a line and pull it down to open blank paper, up to close it again. The
paper grows with the gap and shrinks back when you close one.

Everything whose **top edge** is below the line moves as a whole. A stroke that
straddles the line stays put, because tearing one in half at an arbitrary height
rips descenders off letters — and because it makes the gesture predictable: you
can see beforehand what will move.

Closing a gap stops where the content meets the line. It will not drag two lines
of writing on top of each other.

## Insert

One tool for everything you put **on** the page rather than draw on it.

| | |
|---|---|
| **Image** | Downscaled to 1400 px on the longest edge and embedded as a data URI. Line art and anything with transparency stays PNG; a photo becomes JPEG. |
| **Sticky note** | A textarea and five paper colours. Text wraps to the note and lines past the bottom are dropped rather than drawn over the edge. |
| **Stickers** | Eight, drawn rather than shipped as files: check, star, arrow, flag, heart, exclamation, question, idea. They take the current ink colour. |

Objects render **below** the ink, so writing goes on top of a photo rather than
under it.

## Ruler

A straight edge the pen slides along. It is a constraint on input, not an object
on the page: while it is on, every sample is projected onto one line, so you see
the line as you draw it rather than having the stroke straightened afterwards.

| Angle | Meaning |
|---|---|
| Free | The direction the stroke starts in, decided after about 8 units of travel |
| 0° · 45° · 90° · 135° | Locked |

Picking an angle arms the ruler. It stays on across strokes, and shape
recognition is suspended while it is — a ruled stroke is already the shape it
wants to be.

## Outline

An endless page needs something instead of headings. A section is a named mark
at a height on the page, drawn as a labelled rule under the ink, and the outline
lists them so you can jump.

Add one with **＋ Section here** in the outline popover; it lands at the middle
of what is on screen.
