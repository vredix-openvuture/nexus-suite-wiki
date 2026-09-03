---
title: A note's drawing
description: Every note can own one drawing; it opens in a Sketch tab.
sidebar:
  order: 8
---

Every markdown note can own a drawing with **pages**. The note holds nothing but
their ids — `sketch: sk-…`, or a list once there is more than one — and the
drawing itself lives in a Sketch tab, where there is room for it.

## The corner button

Top right of the note, third in the row after the banner and background buttons.

| | |
|---|---|
| Tap | Switch to the drawing in this tab |
| Press and hold, or right-click | *Switch to sketch* · *Open to the left* · *Open to the right* · *Open in a new tab* |
| Hollow icon | This note has no drawing yet — the first tap creates one |
| Filled icon | This note has one |

The way back is the `file-text` button in the Sketch tab's toolbar.

The id and an empty sidecar are written the first time you open the drawing, so
the tab always opens on a real file rather than on "not found". A sidecar that
goes missing later — deleted by hand, a sync that has not caught up — is
replaced by an empty one instead of an error.

| | |
|---|---|
| Make a note that is only a drawing | Command **New sketch note** |
| Open the current note's drawing | Command **Open this note's sketch** |
| …beside it | Command **Open this note's sketch beside it** |

## Pages

| | |
|---|---|
| Next page | Throw one finger to the **left** |
| The page before | Throw it to the **right** |
| A new page | Throw it left off the **last** page |
| All of them | The button next to the page count |

Only at 100 %: zoomed in, sideways is how you look around the sheet.

The page list shows every page as a thumbnail — the sidecars are ordinary SVGs,
so the preview is the file itself. From there you can open a page, add one, or
take one out of the note. Taking a page out leaves its `.svg` where it is: a
drawing is worth more than the line that pointed at it.

## Why a tab and not the note

There used to be a *slate mode* that put an endless drawing surface inside the
note itself, under its title and properties. It is gone, and nothing was lost:
the sidecars, the ids and the `sketch:` key are the same, so every drawing made
in a slate note opens in the tab. A leftover `nexus: slate` line does nothing.

It went because two of its problems could not be fixed where it lived. The
toolbar was sticky but the options row under it was not, so changing colour meant
scrolling back to the top of the note. And a magnified sheet had nowhere to go
sideways, because the note's own scroller had to be pinned against horizontal
overflow for the full-width strip to work at all.

In a tab both are free: the toolbar and its options row sit above a stage that
scrolls in both directions.
