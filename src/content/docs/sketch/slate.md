---
title: Slate notes
description: A whole note as one endless page of paper.
sidebar:
  order: 8
---

A note with `nexus: slate` in its frontmatter renders its title, properties and
banner natively, and then puts an endless drawing surface underneath.

| | |
|---|---|
| Make one | Command **New slate (drawing note)** |
| Convert one | Command **Toggle slate mode** |
| Undo it | The same command; the frontmatter key is removed |

The surface grows as you scroll toward the bottom, so the note is a roll of
paper rather than a page. Its width follows the [sheet width](/sketch/page/)
setting.

## The two chrome switches

Both in Settings → Quick Sketch, and both apply only while a slate note is open.

| Setting | Default | What it does |
|---|---|---|
| Hide properties | off | Takes the frontmatter block above the paper out of the way, so the note opens on the paper and nothing else |
| Hide the app chrome | off | Hides the tab bar, the status bar and the left ribbon |

Everything comes back the moment you leave the note. The full-size editor
already covers the window on its own, so it does not need either.

## Beside the note

The split button puts the drawing next to the note's text: words on one side,
paper on the other. Long-press or right-click the full-size button to get the
same thing from a sketch inside a note.

## The paper picker writes back

Changing the paper in a slate note writes `sketch-bg` into that note's
frontmatter, so the choice belongs to the note rather than to the plugin.
