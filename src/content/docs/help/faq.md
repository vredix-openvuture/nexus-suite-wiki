---
title: FAQ
description: The questions worth answering before they are asked.
sidebar:
  order: 2
---

## Does it work on mobile?

Yes, as one bundled file with no runtime `require` of sibling modules. Two
things need a desktop shell because they run a program on the machine —
handwriting recognition and the local speech recogniser — and each says so where
it appears rather than leaving a button that does nothing.

## What happens to my notes if I uninstall it?

They stay as they are. A task is a note, a project is a note, a board and a
planner are fenced blocks that still read as a list and a set of dated lines,
and a sketch is a standalone `.svg`. What you lose is the rendering, not the
content.

## Can I use it without the theme?

Yes. The theme is a separate repository and the two work apart. Together they
behave as one thing, because the plugin's Theme tab drives variables the theme
reads.

## Why is everything one plugin?

Twelve plugins that each style the file explorer produce twelve sets of CSS
fighting each other and a vault that breaks in a new way whenever one of them
updates. One plugin means one place where those decisions are made. The cost is
size, and the answer to that is that every module has a switch and an off module
registers nothing at all.

## Does anything leave my machine?

Only what you point at your own server. There is no service in the middle:

- **Vault sync** talks to your WebDAV server.
- **CalDAV and Vikunja** talk to your server.
- **Handwriting recognition** runs a program you installed.
- **Speech**, with the local recogniser, runs a program you installed. The
  browser recogniser is the exception, and the settings say so — most builds
  send the audio to the browser vendor.

## Can two people work in the same vault at once?

You can share a vault and be told when someone else is in it. You cannot type in
the same paragraph at the same time — that needs a CRDT and a relay server
holding the document in memory, which a file server cannot provide. The
reasoning is on [A shared vault](/sync/shared/).

## Why does it refuse to sync sometimes?

Because a wrong URL looks exactly like "the server deleted everything", and
acting on that would delete your vault. See
[How it decides](/sync/overview/).

## Can I put a sketch in a normal note and also full screen?

Yes — it is the same drawing. A sketch lives in its own file and the note refers
to it, so the code block, the full-size editor, the split pane and a slate note
are four views of one thing.

## Why is my drawing an SVG and not a proprietary format?

So that it is still a picture in ten years. Any viewer opens it; the plugin
reads its own metadata back for lossless editing. A format only this plugin
understands would be a format that dies with it.

## Which pen do I need?

Any that reports pressure. Beyond that: the side button and the eraser end are
what a browser can see, and the profiles in the settings map them. Air gestures
— the S Pen's wave and double-tap in the air — are handled by Android and never
reach a web page, whatever the pen.

## How do I back up?

Vault sync writes one zip a day to `_backups` on the server and keeps thirty by
default. That is a backup of the vault, not of the server: keep the server
backed up too.
