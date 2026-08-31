---
title: Phone and tablet
description: What the card system does on a small screen, and why.
sidebar:
  order: 3
---

The card layout is a desktop idea. On smaller screens it is adjusted rather than
merely scaled, and the two cases are different.

## Phone

The card system is **removed**, not shrunk.

Obsidian only ever shows one column on a phone: the explorer, the editor and the
right sidebar are full-screen views that a drawer switches between. Cards there
separate nothing that is not already separated — they only cost border, radius
and area on the smallest screen there is.

So: no desk, no gap, no rounding, no side borders. The ground becomes the
surface. The explorer uses the full width, and the tinted folder blocks lose
their margins, because the full-screen drawer already does the separating.

## Tablet

Cards stay, because two columns really do sit side by side. But tighter, and
with **one** device instead of three:

| | Desktop | Tablet |
|---|---|---|
| Border | yes | yes |
| Shadow | yes | no |
| Gap | 12 px | 8 px |
| Radius | 16 px | 10 px |

Border plus shadow plus gap say the same thing three times and make the columns
look narrower than they are.

Folder blocks lose their outer margin on a tablet: the double inset — card
border plus block border — eats the folder names in an already narrow column.

## A narrow window

A vertical split on a desktop between 621 px and 1100 px wide gets the tablet
treatment. The policy hangs on the **width**, not on the device.
