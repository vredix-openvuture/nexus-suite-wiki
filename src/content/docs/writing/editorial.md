---
title: Editorial marks
description: Margin notes, pull quotes, drop caps, ornaments and checklist states.
sidebar:
  order: 3
---

Five typographic devices, each with its own switch.

| Feature | Default | Command |
|---|---|---|
| Margin notes | on | **Insert a margin note** |
| Pull quotes | on | **Insert a pull quote** |
| Drop caps | off | — |
| Ornaments | on | **Insert an ornamental divider** |
| Checklist states | on | **Set the checklist state** |

## Margin notes

A note that sits in the margin beside the text rather than interrupting it.
`marginWidth` (default 200) is how wide that margin is. On a narrow screen it
falls back into the flow, because a 200px margin beside a phone column is not a
margin.

## Pull quotes

A line lifted out of the text at a larger size. Editorial, not semantic: it does
not become a blockquote.

## Drop caps

Off by default. A drop cap on every note is a lot of drop caps.

## Ornaments

A centred glyph as a section divider, `❦` by default. Any character works.

## Checklist states

Beyond done and not done: in progress, waiting, cancelled and so on, each with
its own mark. **Set the checklist state** cycles the box under the cursor.

These are ordinary Markdown — `- [/]`, `- [?]` — so a note still reads as a
checklist anywhere else.
