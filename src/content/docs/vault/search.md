---
title: Search
description: Weighted search over the whole note, and what each field is worth.
sidebar:
  order: 4
---

Command **Open search**. It scores each note against every term and ranks by the
total.

| Field | Weight | Switch |
|---|---|---|
| Title | highest | on |
| Tags | high | on |
| Headings | medium | on |
| Properties | medium | on |
| Text | lowest | on |

Turn a field off and it stops contributing entirely, which is the fastest way to
stop a vault of long notes drowning its own titles.

## How a term scores

- A match at the **start** of a field scores highest.
- A match at a **word boundary** scores above one in the middle of a word.
- A **subsequence** match — the letters in order but not adjacent — only counts
  when the matched letters sit close together. Without that cap, `abc` matches
  almost any long note and the ranking turns to noise.
- A term shorter than three characters never fuzzy-matches.

## Sketches have their own

Drawings are not text, so they are searched separately by
**Search sketches** — see [Finding a sketch again](/sketch/search/). The scoring
maths is shared rather than reimplemented, so the two rank consistently.
