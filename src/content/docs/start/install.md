---
title: Installation
description: Installing the plugin and the theme through BRAT, or by hand.
sidebar:
  order: 2
---

Nexus Suite is not in the community store. It installs through
[BRAT](https://github.com/TfTHacker/obsidian42-brat), which tracks a GitHub
repository and updates from its releases.

## The plugin

1. Install **BRAT** from the community plugin store.
2. Run `BRAT: Add a beta plugin for testing`.
3. Enter `vredix-openvuture/nexus-suite`.
4. Enable **Nexus Suite** in Settings → Community plugins.

BRAT checks for a new release on every Obsidian start and updates in place.

## The theme

The theme is a separate repository and installs the same way:

1. `BRAT: Add a beta theme`
2. `vredix-openvuture/nexus-theme`
3. Select **Nexus** in Settings → Appearance.

The two work apart, but the plugin's Theme tab (style and palette) drives
variables the theme reads, so together they behave as one thing. Geometry —
radii, borders, spacing — comes from one token block the two share, declaration
for declaration, so an element cannot have a different corner in the plugin than
in the theme.

## By hand

Copy `main.js`, `manifest.json` and `styles.css` into
`<vault>/.obsidian/plugins/nexus-suite/`, and `theme.css` plus `manifest.json`
into `<vault>/.obsidian/themes/Nexus/`. Then reload Obsidian.

:::caution[Releases, not the branch]
A plain push to the repository is invisible to BRAT. Only a GitHub release with
the built files attached updates anything. In the repository that is what
`./release.sh` does.
:::

## Removing it

Disable the plugin in Settings → Community plugins, then delete
`.obsidian/plugins/nexus-suite/`.

Nothing you wrote goes with it. Notes, task notes, boards, planners and sketches
are ordinary files: a board is a fenced block that still reads as a list, a
sketch is a standalone `.svg`, a task is a note with frontmatter. What you lose
is the rendering, not the content.
