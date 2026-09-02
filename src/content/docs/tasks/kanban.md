---
title: Kanban
description: One block with two sources — cards you write, or the notes of a folder — and the board view of your tasks.
sidebar:
  order: 4
---

A column is a state, a card is a thing, and dragging one changes the other.

There is **one** board. What differs is where its cards come from and where a
move is written, and that is the one key the block asks for:

| `source:` | The cards are | A drag writes to |
|---|---|---|
| `block` (default) | the checklist lines inside the fence | the fence |
| `folder` | every note of a folder | the note's own frontmatter |

Everything else — the head, the column strip, the card, the drag with its edge
auto-scroll, the colours — is the same code either way. The two used to be two
blocks built on opposite ideas, which is how the same column name could be a
different colour on each.

## A board in a note

A ```` ```nexus-kanban ```` block with `source: block` **is** the board. The
columns and cards live inside the fence, so it is one hand-editable text that
travels with the note and still says something without the plugin.

````md
```nexus-kanban
title: Roadmap
notes: Projects/Roadmap
## Backlog
- [ ] Rework the tab bar
- [ ] [[Kanban module|Kanban]] @2026-08-25 #plugin
  the toolbar first, then the overflow menu
## In progress @2
- [ ] Vikunja buckets
## Done
- [x] Pinned tabs
```
````

| Syntax | Meaning |
|---|---|
| `## Heading` | A column |
| `@2` after a heading | Its WIP limit; the count turns red above it |
| `- [ ] text` | A card |
| `- [x] text` | A done card |
| `[[Note\|Alias]]` | The card points at a note; the alias is what is shown |
| `@2026-08-25` | A due date |
| `#tag` | A tag chip on the card |
| An indented line under a card | Its description, shown under the title |

A card written before the first heading gets a `Backlog` column of its own
rather than being dropped.

The default columns for a new board are `Backlog / In progress / Done`
(Settings → Kanban).

Commands: **Insert a kanban board**, **New kanban board (note)**.

### The card editor

**Clicking a card opens it**: text, description, due date, tags, done, which
column it sits in, and the note it points at — with **To the note** as a button,
so a card that has a note can still be edited. Ctrl/⌘-click goes straight to the
note instead, for a board used as an index.

The description is shown on the card under its title, **four lines at most** and
then an ellipsis; the whole text stays in the editor and in the block.

### The card menu

Open the note, open it in a new tab, unlink it, create a note for the card, link
an existing note, edit, set a due date, mark done, move to another column,
delete.

**Create a note for this card** puts the note in `notes:`, or in the Kanban
module's folder setting, or beside the board note — the first of those that is
set. With a `template:` line the template's text is used; without one the note
gets `nexus-type: card`, a `nexus-board` link back to the board, and the card's
due date and tags.

### The column menu

Rename, WIP limit, move left, move right, remove done cards, delete column. The
board head adds **+** for a new column and an eraser for every done card on the
board; deleting a column asks first, and notes its cards point at are kept.

## A folder as the board

`source: folder` turns the columns into a question about the vault instead of a
list inside the fence.

````md
```nexus-kanban
source: folder
folder: SCHOOL/Biology
status: status
## Offen
## In Arbeit @3
## Erledigt
```
````

**It never filters.** Every note of the folder is on it, including the folder
note beside it (`SCHOOL/Biology.md`), so nothing can quietly go missing. Which
column a note is in lives in that note's own frontmatter, so it survives without
the plugin and any search or card can read it too.

An empty `folder:` means the folder this note is in. A note at the vault root
has no such folder, and the board then shows nothing rather than claiming the
whole vault. The resolved folder is never written back into the fence, so a
board that follows its note keeps following it.

**The first column is the absence of a value.** Dropping a note there deletes
the property instead of writing `status: open` into every note in the vault for
no gain — which is also why that column cannot be moved out of the front, and
why it is grey whatever it is called.

Command **Insert a folder board** writes the block, pre-filled with the folder
of the note you are in.

### The keys

Both spellings of a key are read, and each is written back as itself.

| Key | Values | Default |
|---|---|---|
| `source` | `block` · `folder` | `block` |
| `folder` | the folder to show | the note's own folder |
| `title` | replaces the heading | the folder name |
| `status` / `statusproperty` | the frontmatter property holding the column | `status` |
| `states` / `columns` | the columns as one comma-separated line | `Offen, In Arbeit, Ausbessern, Erledigt` |
| `## Name @3` | the columns as headings, with a WIP limit | — |
| `view` / `mode` | `board` · `grid` · `graph` | `board` here; see [the other two fences](/vault/workspaces/#boards) |
| `sort` | `name` · `modified` · `created` · `state` | `name` |
| `dir` / `direction` | `asc` · `desc` | `asc` |
| `size` | `small` · `medium` · `large` | `medium` |
| `props` | frontmatter keys shown as badges, comma separated | — |
| `height` | the link web's height in pixels | `260` |
| `show` | which of `excerpt`, `tags`, `links`, `orphans`, `state`, `graph` are on — what is not named is off | — |
| `excerpt` `tags` `links` `orphans` `state` `graph` | the same six, switched one at a time | all on but `graph` |

A card carries a state dot you can click to step to the next column, the note's
first real line as an excerpt, up to three tags, the `props:` badges, and a
count of how many notes **of this folder** it links to — hovering a card lights
those up and steps the rest back. A note with no such link is marked as an
orphan; a link pointing outside the folder is not counted, because it says
nothing about how well the subject hangs together.

The head carries a tally — how many notes stand in each column — and a filter
field over the cards. The gear opens the same configuration as a dialog. All of
it is written into the block, so how a board looks travels with its note.

### Columns nobody configured

A value that no column claims still gets a column, named the way the notes spell
it and marked as a stray. Dropping the value would silently hide notes, which is
the one thing this board must not do. A stray column has no menu, and clicking
through the state dot skips it — stepping into a column that exists only because
some note says so is not a move anybody asked for.

Two columns whose names slug to the same id are not merged: the first one keeps
the notes, so a careless rename empties a column rather than re-filing a folder.

### Renaming a column renames it in the notes

The column's name **is** the value the notes carry. A rename therefore writes
the new value into every note in that column — but only after the block itself
has been saved, so a rename that did not reach the fence cannot leave notes
saying something no column claims. Renaming a column onto a name another column
already has is refused.

The first column names nothing and is left alone.

## Column colours

A column's colour says what **kind** of column it is, read off its own name —
nobody should have to configure that "Done" is green.

| Kind | Colour | Names that read as it |
|---|---|---|
| open | grey | anything not matched below — `Backlog`, `Offen`, `Ideas` |
| doing | blue | `In Arbeit` · `Doing` · `In progress` · `Aktiv` · `Active` · `WIP` · `Läuft` · `Running` · `Lernen` |
| wait | orange | `Wartet` · `Waiting` · `Blocked` · `Pausiert` · `Später` · `Later` · `Review` · `Prüfen` · `Ausbessern` · `Fix` · `Wiederholen` · `Repeat` |
| done | green | `Erledigt` · `Fertig` · `Done` · `Closed` · `Abgeschlossen` · `Shipped` · `Gelernt` |

These are Obsidian's semantic colours rather than palette slots: on a warm
palette every column came out the same coral and the board lost its meaning.

:::caution[Ausbessern, Fix and Wiederholen changed colour]
The folder board used to have a fifth, red kind for those three. There is now
one vocabulary for every board and four kinds, because a fifth colour on a strip
of columns stops being information — a column that needs rework is a column the
board is waiting on, so it is orange. It is a visible change on existing boards,
and on columns of the [task board](#the-board-view-of-your-tasks) with those
names, which reads the same list.
:::

Both languages are recognised for every kind, so renaming a column from German
to English does not cost it its colour. On a folder board the first column is
always grey, whatever it is called, because it means "nothing set".

## Saving does not reshape the block

A board is one hand-editable text, so a rewrite — a drag, a rename, a new card —
writes the block back in the shape it arrived in. Lines the parser does not
recognise are kept and written out untouched, and each key keeps the spelling it
was typed in: `states: A, B, C` stays one line instead of becoming three
headings, `statusproperty:` stays `statusproperty:`, and a fence that never
needed a `source:` line never grows one.

Four things do change:

- **A WIP limit forces headings.** `states:` has no room for `@3`, so a board
  that gains one is written as `## Name @3` columns from then on.
- **A key already at its default is dropped.** `sort: name`, `dir: asc`,
  `size: medium` and `height: 260` say nothing the block does not already mean.
- **Blank lines between config lines are not kept**, and an unrecognised line
  is re-emitted with the other config lines, so its position can move.
- **A key is written back lower-case.** `statusProperty:` comes back as
  `statusproperty:`.

:::note
A `show:` line that leaves `tags` out gains a separate `tags: false` line on the
first save. `tags` is both a card-part flag and a board-wide one, and the writer
emits it in both places. The two always agree and the block is stable from the
second save on.
:::

## The board view of your tasks

The tasks page has a board mode. Its columns are your task
[buckets](/tasks/projects/), and a drag writes `bucket` into the task note.

With a Vikunja project, the board uses that project's own buckets and pushes a
drag straight back to the server. The `bucket:` line in the note is the offline
copy, so the board still reads correctly where no sync runs. Without a
credential on the device, or without a kanban view on the server, it falls back
to your own columns and says so.

Its columns are coloured off the same list as the blocks above, so a column
called `Waiting`, `Ausbessern` or `Lernen` now has a colour it did not have
before. The default columns are `Backlog / In progress / Waiting / Done`.
