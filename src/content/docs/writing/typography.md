---
title: Typography
description: Substitutions while you type, and side-by-side columns.
sidebar:
  order: 5
---

## Substitutions

Replaces what you type as you type it. Each group has its own switch, because
the one that gets in the way differs per person.

| Group | Replaces |
|---|---|
| Dashes | `--` → – · `–-` → — |
| Ellipsis | `...` → … |
| Quotes | Straight quotes → typographic ones |
| Arrows | `->` → → · `<-` → ← · `=>` → ⇒ |
| Symbols | `(c)` → © · `(r)` → ® · `(tm)` → ™ |

The substitution happens in the editor, so the file holds the real character —
this is not a display trick, and the text keeps its meaning anywhere else.

## Columns

A ```` ```columns ```` block puts text side by side.

````md
```columns
Left hand side.

===

Right hand side.
```
````

| Setting | Default |
|---|---|
| Gap | `1.5rem` |
| Delimiter | `===` |

Columns stack into one on a narrow screen — three columns on a phone are three
columns of nothing.
