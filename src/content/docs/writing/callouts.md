---
title: Callouts
description: Your own callout types, with an icon and a colour each.
sidebar:
  order: 2
---

Define a callout type once — a name, an icon and a colour — and use it like any
built-in one.

````md
> [!decision] Why WebDAV
> Because the vault is files, and a file server already speaks files.
````

Command **Insert a callout** offers the list.

## Colour

The plugin stores a colour per type and emits it as a **colour**, not as an RGB
triplet.

That distinction is load-bearing. Obsidian changed `--callout-color` from a
triplet to a colour, and CSS written for the old form
(`rgb(var(--callout-color))`) becomes invalid against the new one — which makes
the whole declaration fall away, so every callout that takes its colour from
Obsidian loses its fill.

Worse, which form applies depends on the **Obsidian version**, not on the vault:
the same vault looked different on two devices. The plugin therefore normalises
at runtime to whatever the running version expects, and the theme reads that
normalised value.

If you write your own snippet: never wrap it in `rgb()`, and use it directly
inside `color-mix()`.

## Look

The colour lives in the **surface**, quietly tinted — a coloured block rather
than a boxed-in frame. It is mixed into the note background rather than into
transparent, so the tint stays equally quiet on any background.
