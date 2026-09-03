---
title: Overview
description: What Quick Sketch is, how a drawing is stored, and where it can appear.
sidebar:
  order: 1
---

A ```` ```quicksketch ```` block is a pad you draw on with a pen, a finger or a
mouse. Pen pressure drives the width of the line.

Insert one with the command **Insert a sketch**. For a drawing that belongs to a
note but is too big to sit in its text, see [A note's drawing](/sketch/note/).

## How a drawing is stored

Not in the note. Each drawing is a standalone `.svg` in the sketch folder
(`Inbox/Quicksketch` by default) and the note carries only its id.

The file is an ordinary image: any viewer opens it and sees the paper, the
background pattern and the ink. The raw stroke data — every point with its
pressure — rides inside its `<metadata>` as JSON, which is what makes it
losslessly re-editable rather than a flattened picture.

That is also why an inserted image is embedded as a data URI rather than as a
vault path: a sidecar that points at a file somewhere else stops being
standalone the moment it is copied.

## Where a sketch can appear

Two places, one engine over one sidecar.

| Where | How |
|---|---|
| Inside a note | The ` ```quicksketch ` block. Starts in view mode, tap the pencil to draw. |
| Its own tab | The block's `⛶` button, or a note's [corner button](/sketch/note/). Long-press either to pick where it opens. |

A code block is a sketch in the flow of the text. A Sketch tab is the drawing on
its own, with the full toolbar, the options row permanently in reach and room to
zoom — anything longer than a doodle belongs there.

## Latency

The stroke you are drawing is painted on a `desynchronized` canvas overlay,
which is the front-buffer path a browser offers; only the finished stroke is
committed to SVG. Updating SVG on every pointer event rides the full compositor
pipeline and lands several frames behind the pen no matter how fast the maths
is.

On top of that: pointer prediction extends the drawn tail toward where the
system says the pen is going (never recorded, so the saved stroke is unaffected),
input is streamlined against jitter, and palm rejection ignores any touch that
arrives within 600 ms of the pen being near the glass.
