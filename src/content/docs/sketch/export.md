---
title: Export
description: SVG, PNG and PDF, and what each one costs.
sidebar:
  order: 6
---

The **Export** button writes the file next to the other sketches and tells you
where it went.

| Format | What it is |
|---|---|
| SVG | Vector, and the same file the sketch is already stored as |
| PNG | A picture, at the scale you pick |
| PDF | One page, sized to the drawing |

Scale (1× to 4×) applies to PNG and PDF. SVG is vector and ignores it.

## How it is rendered

The raster goes through the **same string the sidecar is written as**. A second
renderer could disagree with the stored file and nobody would notice until it
mattered.

## The PDF

Written by hand rather than with a library, for the same reason the ZIP writer
is: the plugin has to stay one bundled file that also runs on a phone, and a
single-page document with one image on it is about eighty lines of the format.

The image inside it is **lossless** where the platform allows it: raw RGB
samples deflated with `CompressionStream` and declared `/FlateDecode`.
Handwriting through a JPEG looks like handwriting through a JPEG, so JPEG is only
the fallback for a runtime without that API.

Transparency is composited onto white first: a PDF page has no transparency to
fall back on, and ink over nothing renders as ink over black in some readers.

## Naming

`<title> <date> <time>.<ext>`, with anything a file system refuses stripped out
and a leading dot removed — a name that starts with a dot makes a hidden file. A
sketch with no title becomes `Sketch`.

If the name is taken, a counter is appended rather than anything being
overwritten.
