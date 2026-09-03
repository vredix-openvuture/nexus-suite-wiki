---
title: The toolbar
description: The tool row, the options row underneath it, and deciding what goes where.
sidebar:
  order: 2
---

Two rows. The top one holds the tools; the one under it holds the options of
whichever tool is active — pen types, widths and colours for the pen, widths and
colours for the highlighter, marquee shapes for select.

The eraser has nothing to configure, so its row collapses rather than sitting
there empty.

## The options row

Settings → Quick Sketch → **Options row**:

| Value | Behaviour |
|---|---|
| `Always open` (default) | The row stays under the bar. |
| `Opens when you pick a tool` | It opens on a tool tap and closes again on your first stroke, giving the space back to the canvas. |

Both render the same row; only whether it is pinned differs.

## What is in the bar

Every button below can be in the bar or in the bar's `⋯` menu, set separately
for a note and for the Sketch tab.

| Item | Kind | In a note by default | In a Sketch tab |
|---|---|---|---|
| Pen | tool | yes | yes |
| Highlighter | tool | yes | yes |
| Eraser | tool | yes | yes |
| Select | tool | yes | yes |
| Spacing | tool | menu | yes |
| Insert | tool | menu | yes |
| Ruler | action | menu | yes |
| This drawing | tool | menu | yes |
| Undo | action | yes | yes |
| Redo | action | yes | yes |
| Zoom | action | menu | yes |
| Background | action | menu | yes |

**This drawing** is not a pen, and does not sit among them: it is on the right,
with the other things you do TO a drawing. It borrows the options row the same
way the pen does and holds four labelled buttons — the outline, export, *open
the note beside this*, and clear. Four buttons that are each used once in a
while do not each deserve a place in the bar.

Two buttons are **never** movable: *Save & close* and *Open in a Sketch tab*.
Hiding the way out of an editor is not a preference.

At least one tool has to stay in the bar. Turning the last one off is refused.

## Per device

**Just this device** gives this machine its own copy of all of the above, stored
in `localStorage` and never synced. See
[What belongs to a device](/concepts/devices/).

## Colours per tool

Every tool remembers the ink it was last used with, so switching to the
highlighter and back does not cost you the pen's colour.

A tool can also be put on a palette of its own: pick the tool, then the swatch
book at the end of the colour strip. Tools you never assign follow the palette
marked active in the settings.

The pen starts at the **Default ink color** setting on a vault that has never
drawn; every other tool starts at the head of its own palette. Deleting a
palette that a tool was using drops that tool back to the active one rather than
silently moving it to a different set of colours.
