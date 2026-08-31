---
title: Troubleshooting
description: Things that go wrong, and what they actually mean.
sidebar:
  order: 1
---

## A feature works on the desktop but not on the tablet

If the styling is right but nothing responds, the tablet is running an old or
half-synced `main.js`. Obsidian on mobile does **not** hot-reload a plugin:
disable and re-enable Nexus Suite in Settings → Community plugins.

CSS and JavaScript arrive as separate files, which is why the look can be
current while the behaviour is not.

## The sync says it stopped and changed nothing

That is the safety guard, and it is doing its job. Two things trigger it:

- **The server folder came back empty** while files were expected there. Almost
  always a wrong URL or a folder renamed on the server. Check the URL with
  **Test** before syncing again.
- **More than a third of the files** would be deleted on one side. If you really
  did delete that much, sync in two goes, or clear
  `sync-state.json` to start from a fresh agreement — with the caveat that a
  fresh agreement treats everything as new.

## Every sync re-downloads files I just uploaded

Fixed. If you see it, the state file is from before the fix: delete
`.obsidian/plugins/nexus-suite/sync-state.json` and run one sync. The next
agreement records both sides.

## A kanban board only accepts one card

Fixed. It was the block failing to find itself again after Obsidian re-rendered
it, which made every edit after the first silently do nothing — not just cards,
also renaming, linking and due dates. Update the plugin.

## The handwriting reader says it needs a desktop shell

It does. Recognition runs a program on the machine, and there is no shell on a
phone to run it in. Read the sketch on a desktop; the text lands in the sidecar
and syncs, so the search finds it everywhere afterwards.

## The recogniser produced nothing

- Check the command with **Test** in the settings.
- Run it by hand on a PNG to see its own error.
- Tesseract needs the language data for the language you asked for: `-l deu`
  requires the German data to be installed.

## A callout lost its colour

An Obsidian version change: `--callout-color` used to be an RGB triplet and is
now a colour. A snippet of your own that wraps it in `rgb()` becomes invalid and
the whole declaration is dropped.

Use it directly inside `color-mix()`. The plugin normalises its own values to
whatever the running version expects.

## A dropdown or a checkbox is the wrong colour

Obsidian draws part of its own interface from an accent it keeps separately from
the theme, and it defaults to a blue-violet. Before plugin 0.25.1 and theme
0.7.1 nothing handed it the palette, so a menu panel came out in the palette and
the selected row inside it did not.

Update both. If it persists, the theme is the older copy: check *Settings →
Appearance → Themes* for the version, and reload the theme after BRAT updates
it — Obsidian does not always pick up a new `theme.css` on its own.

## The sketch toolbar looks different on two devices

Probably deliberate: **Just this device** in Settings → Quick Sketch gives that
machine its own toolbar, stored locally and never synced. Turn it off there to
go back to the shared one.

## A drawing will not open

The sidecar is a standalone SVG, so open it in any image viewer to see whether
the picture survived. If the image is fine but the plugin will not edit it, the
metadata is damaged — the strokes are gone but the rendered outlines remain, and
the file is still a valid picture of the drawing.

## Nothing renders after an update

Check the developer console (`Ctrl+Shift+I`). The plugin guards each module's
start-up separately, so one module failing leaves the rest working — and it logs
which one it was.
