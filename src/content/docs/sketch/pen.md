---
title: Pen buttons
description: What a stylus can actually tell a web app, and what to map it to.
sidebar:
  order: 5
---

Worth being blunt about the limits, because the marketing is not.

## What a browser cannot see

The S Pen's **air actions** — the double-tap in the air, the wave, the remote
shutter — are handled by Android itself and never reach a web page. Neither does
the Lenovo pen's top button. No setting can change that, because the events do
not arrive.

## What a browser can see

Everything the pen does on or near the glass:

| Gesture | Reported as |
|---|---|
| Side button | `PointerEvent.buttons` bit 2 |
| Eraser end | `PointerEvent.buttons` bit 5 |
| Double-tap | Two taps of the tip, timed and placed by the plugin |

A double-tap counts when the two taps are within 320 ms **and** within 24 units
of each other. Time alone turns a fast writer into a gesture machine. The two
stray dots it leaves behind are taken back, along with their undo entries.

## Actions

| Action | Behaviour |
|---|---|
| Nothing | |
| Erase while held | Switches to the eraser for as long as the button is down, then puts the previous tool back |
| Switch to the eraser | Toggles |
| Switch to select | Toggles |
| Undo · Redo | Once per press |
| Toggle the ruler | |
| Next colour in the palette | Steps through the current tool's palette |
| Back to the previous tool | |

The side button is read on **every** pen event, not only on pointer-down —
pressing it mid-stroke is exactly when someone wants to rub something out.

## Profiles

Presets over those three gestures. They differ in what the hardware has, not in
what the browser exposes.

| Profile | Side button | Eraser end | Double-tap |
|---|---|---|---|
| Generic stylus | Erase while held | Switch to the eraser | Nothing |
| Samsung S Pen | Erase while held | Nothing (it has no eraser end) | Back to the previous tool |
| Lenovo Precision Pen | Erase while held | Switch to the eraser | Undo |
| Wacom / AES pen | Switch to select | Erase while held | Nothing |

Changing the profile clears any per-gesture override, rather than carrying it
silently onto a different pen.
