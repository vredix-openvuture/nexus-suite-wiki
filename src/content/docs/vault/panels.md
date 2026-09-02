---
title: Sidebar panels
description: The views that live in the right dock — what opens them, and the two that write notes.
sidebar:
  order: 8
---

Six views open in the right dock. Each is opened by a command and closed by you;
none of them opens or closes itself.

| Panel | Command | Module |
|---|---|---|
| Mini calendar | Open calendar in the sidebar | Mini calendar |
| Calendar | Open the calendar in the sidebar | Calendar |
| Tasks | Open the tasks in the sidebar | Calendar |
| [Captures](/vault/captures/#in-the-sidebar) | Open the capture hub in the sidebar | none |
| Scratch | Open the scratch panel | none |
| Timer | Open the timer panel | none |

A panel that is already open is revealed rather than opened a second time, so
running the command twice does not give you two of them.

The capture hub is registered under a **second view id** for the dock. Obsidian
remembers a leaf by its type, so with one id a hub in the main area and a hub in
the dock could not both be restored from a saved workspace.

## Scratch

An empty surface that writes the note by itself. Type, press **Save** (or
Ctrl/⌘+Enter), and it becomes a note named after the moment you wrote it —
`2026-09-02_07-40.md`. Two notes in the same minute do not collide; the second
one earns seconds.

The point of it is that nothing has to be opened before you can type.

**The draft survives.** What is in the box is kept until you save it, through a
closed panel and through a restarted Obsidian, because the one thing this must
never do is eat a thought you typed and did not save. A save that fails leaves
the draft exactly where it was and says why. The draft is per device by nature —
it lives in the browser's own storage and does not travel.

It is the same writer as the dashboard's Scratch card, so both make the same
note. What differs is that the panel is always there.

:::note[No settings yet]
The panel reads a per-device folder and template, but there is no control that
writes them. Until there is, its notes land at the vault root with no template.
The dashboard's Scratch card has both fields in its own settings.
:::

## Timer

Command **Open the timer panel**. **Add a timer** puts one in the panel; the ✕
takes it out again.

It used to open itself the moment a timer started and detach itself the moment
none was running — which also tore away a panel you had deliberately opened. It
is an ordinary panel now.

The panel keeps **its own** timers, per device. A dashboard card is part of a
layout you arranged; a panel timer is the one you reach for while working, and
tying them together meant the panel could only ever show what the dashboard
already showed. Which timers you want at hand is also not a thing worth syncing.

A dashboard timer that is **running** is shown beside them, set back and with no
remove button, so you can still reach it when the dashboard is not the tab you
are looking at. It is only visiting; it is removed where it lives.
