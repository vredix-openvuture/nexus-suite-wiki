---
title: Icons
description: An icon for any folder or file.
sidebar:
  order: 3
---

Right-click a folder or a file in the explorer and give it an icon. It shows in
the tree, in the tab and in the note header.

The mapping is stored in `data.json` under `icons.map`, keyed by path. Nothing
is written into your notes, which means renaming a file through Obsidian keeps
the icon — the map is updated with the rename.

Icons come from Obsidian's own set (Lucide), so they match the rest of the
interface and cost nothing to load.

## Tags

The **Tags** module is next door and does the vault-wide work: command
**Rename a tag …** renames or merges a tag everywhere it appears, including in
frontmatter, and offers to remove one entirely.

A rename is a single pass over the vault with a count shown before it runs, so
you can see how much it will touch.
