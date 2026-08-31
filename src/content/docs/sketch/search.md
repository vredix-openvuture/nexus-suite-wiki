---
title: Finding a sketch again
description: Searching drawings, and the handwriting recogniser that is not bundled.
sidebar:
  order: 7
---

Command **Search sketches**. It reads every sidecar once, caches it against the
file's modification time, and searches four things.

| Field | Weight | What it is |
|---|---|---|
| Title | 100 | What the sketch IS |
| Sections | 60 | Where you were on the page |
| Sticky notes | 40 | Something you wrote deliberately |
| Handwriting | 18 | A guess |

Ranking them equally would put a shaky recognition above an exact title match.
A hit in recognised handwriting is labelled as such in the results, because it
**is** a guess.

Every term has to hit something, so two words narrow rather than widen.

:::tip
This works with nothing installed. Naming your sections is the cheapest way to
make a long page findable.
:::

## Handwriting

Command **Read the handwriting in this sketch**. It renders the page, hands the
image to a program **you** installed, and stores the text back into the sidecar
where the search picks it up.

Settings → Quick Sketch → **Recognition command**. The default:

```
tesseract {in} {out} -l eng
```

`{in}` is the image; `{out}` is where the text should land — Tesseract appends
`.txt` itself, and a program that prints to standard output instead is also
accepted. For German, `-l deu`.

The command line is split here, never handed to a shell, so a vault path with a
space in it is just a path and not an injection point.

### Why it is not bundled

A recogniser is tens of megabytes of model. The plugin has to stay one file and
also run on a phone. Running a binary you already have keeps both true, and
keeps the text on your machine.

The cost is stated rather than hidden: **it is desktop only**, because a phone
has no shell to run it in. On mobile the command reports that instead of failing
quietly.

### What comes back

Recognised text is noisy by nature. Empty lines, single stray characters and
runs of punctuation — what a page of handwriting produces where there was
nothing to read — are dropped before anything is indexed.

The text is stored but **never drawn on the page**. A guess rendered as ink would
look like something that was actually written there.
