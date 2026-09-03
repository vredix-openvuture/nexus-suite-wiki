---
title: The planner
description: A whole month of day texts, in a block.
sidebar:
  order: 5
---

A ```` ```nexus-planner ```` block is a month on one screen, showing **the same
text per day the calendar does**.

````md
```nexus-planner
view: month
month: 2026-09
```
````

Command **Insert a planner** writes the skeleton for the current month.

## One store, two views

The fence says only *which* month. What a day says lives in
[that day's own note](/tasks/calendar/#where-it-lives), so the block and the
full-page calendar are one thing seen twice and cannot disagree. Typing in a
cell writes to the note, not to the block.

The sidebar **mini calendar** marks a day that has a text; a sidebar column is
too narrow for a sentence.

## What it is for

It is deliberately not the tasks module and not the agenda. Those answer *what
is due*; this answers *what is this month for*, which is a much shorter answer.
Daily and weekly notes stay where the detail goes — the planner exists so the
shape of a month is visible without opening thirty of them.

## Keys

| Key | Values | Default |
|---|---|---|
| `view` | `month` · `week` | `month` |
| `month` | `YYYY-MM` | the current month |
| `week` | any date in the week | today |
| `title` | replaces the heading | the month or the week's range |
| `weekstart` | `monday` · `sunday` | `monday` |

Anything the parser does not understand is kept and written back untouched.

## Using it

- Click a cell and type. `Ctrl` / `⌘ + Enter` finishes it, or click away;
  `Esc` puts back what was there. Enter opens a new line — a day is a paragraph,
  not a field.
- The arrows page through months or weeks and write the new position back.
- The dot returns to now.
- The last button switches between the month and the week, keeping you where you
  were: the week that holds the month you were looking at, and the month that
  holds the week.
- Each cell has a small button that opens that day's **daily note**, using the
  core plugin's own format and folder — the planner never invents a second
  naming scheme.

A month always draws six rows. One that fits in five would otherwise make the
block change height as you page through the year, and that jump reads as a bug
every single time.

On a narrow screen the seven columns become two.

## Lines an old block still holds

The block used to *be* the store: `2026-09-03: Ship 0.25` lines inside the
fence, in a month note the plugin resolved from a folder and a pattern. Those
lines are no longer read.

To carry them over, run **Move planner lines into the daily notes** — a command,
and a button under *Settings → Calendar → Planner*.

| | |
|---|---|
| Before it writes | It counts what it found and says how many daily notes it would have to create |
| A day whose note already has a text | Left exactly as it is, and reported as such |
| The blocks | Keep their old lines, inert — nothing is deleted |

So a run that went wrong costs nothing, and running it twice only picks up what
was added since.
