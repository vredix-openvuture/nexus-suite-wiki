---
title: The planner
description: A month on one screen, with one line per day.
sidebar:
  order: 5
---

A ```` ```nexus-planner ```` block is a month with **one line per day**.

````md
```nexus-planner
view: month
month: 2026-09
2026-09-03: Ship 0.25
2026-09-11: Dentist, 14:00
```
````

Command **Insert a planner** writes the skeleton for the current month.

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
| `YYYY-MM-DD` | the line for that day | — |

Entries are written back sorted by date, so the block reads as a calendar and a
diff shows what changed rather than where a line happened to be appended. An
empty day is removed rather than stored blank, and a newline in a line is
flattened — one line per day is the format.

Anything the parser does not understand is kept and written back untouched.

## Using it

- Click a cell and type. It saves when you leave the field or press
  <kbd>Enter</kbd>; <kbd>Esc</kbd> puts back what was there.
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

## Not the calendar's day text

[The calendar](/tasks/calendar/) also gives a month a text per day, but it keeps
it in **that day's own note**, as a frontmatter field. The planner keeps its
lines in **the block**. Two answers to the same question, and the calendar no
longer reads the planner's — pick the storage you want.

The sidebar **mini calendar** marks a day that has either; a sidebar column is
too narrow for a sentence.

A planner month resolves to one note by two settings on the **Calendar** tab:

| Setting | Default | |
|---|---|---|
| Planner folder | `Planner` | Empty means the vault root. |
| File name | `YYYY-MM` | `YYYY`, `YY`, `MM`, `MMM`, `MMMM`. A slash makes a subfolder, so `YYYY/YYYY-MM` files each year separately. |

September 2026 is then `Planner/2026-09.md`, holding one `nexus-planner` block.
Nothing is guessed and nothing is written until you type:

- a month with no note shows nothing and **creates no file** — the first line
  you type creates the note *with* the block;
- a note that already exists but holds no ```` ```nexus-planner ```` block is an
  empty month, and a first line is **appended** rather than replacing anything
  in it;
- a note with more than one planner block uses the **first**; the rest are left
  alone.
