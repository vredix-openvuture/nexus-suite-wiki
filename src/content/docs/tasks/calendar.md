---
title: Calendars and Vikunja
description: A month, what each day is for, and the accounts your tasks sync against.
sidebar:
  order: 6
---

The **Calendar** module holds the month view, the tasks page and the Vikunja
accounts the tasks sync against. It starts off.

Its settings key is still `tasksCalendar`, although the module is called
Calendar. The name is what you read; the key is what your `data.json` already
contains, and renaming it would strand settings that are in use.

:::note[There are no events any more]
CalDAV went first, and local calendars — the only source left — went after it,
together with the event dialog, recurrence and the iCalendar parser. What
replaced them is the day's text below. The tasks page, the Vikunja sync, the
pinnable tab and the views all stay.

**Nothing was deleted.** Any calendar JSON in the data folder is inert: nothing
reads it, and nothing removes it either. See §6 of `docs/removed-features.md` in
the repo for the account and the way back.
:::

## What a day is for

Every cell of the month is a writing surface. Tap it and type — not one line,
as much as fits. The text fills the cell and is clipped at the bottom rather
than pushing the row taller, because a month whose rows change height as you
write is not a month.

| | |
|---|---|
| Save | `Ctrl` / `⌘` `+ Enter`, or tap away |
| Cancel | `Esc` — puts back what was there |
| Open the note | The day number, not the cell |

### Where it lives

In that day's own note, as one frontmatter field:

```md
---
important: Ship 0.29, then rest
---
```

Not in a plugin file. Obsidian's own search finds it, a template can prefill it,
a Dataview query can read it, and it survives without this plugin.

| Setting | Default |
|---|---|
| Frontmatter key | `important` |

Writing on a day that has no note yet **creates one**, from your daily-note
template. Clearing the text removes the field rather than leaving an empty one
behind.

Tasks with a due date ride along as chips under the text. The sidebar mini
calendar only *marks* a day that has a text — a sidebar column is too narrow
for a sentence.

## Accounts

One kind is left: **Vikunja**, over its REST API. An account is a
[connection](/concepts/devices/#connections) — a label, the server URL and an
API token, declared once and afterwards only tested or removed.

The account belongs to **this device** and is never carried to another one:
every device signs itself in. The token goes to `localStorage` in plain text,
the rest into this device's own entry in `data.json`. See
[What belongs to a device](/concepts/devices/).

## Sync

| Setting | Default |
|---|---|
| Sync on startup | on |
| Sync interval | 15 minutes |
| Conflict policy | Server wins |

Command **Sync calendars and tasks now** runs a round immediately, and reports
per account what it pulled, pushed and created.

A round is three-way: what is here, what is on the server, and what was here at
the last agreement. Without that third side a two-way sync cannot tell a
deletion from a file it has never seen. A collision raises the conflict dialog
unless the policy says the server always wins.

A repeating task normally has its due date advanced by the plugin instead of
being closed. Vikunja is the exception: its server owns the repeat, so the task
is only marked done and the sync pushes that.

:::caution[The task sync runs on the desktop only]
It sits behind the same guard as the other features that need a desktop shell,
and on mobile it says so: *Sync runs on desktop only (mobile reads the synced
cache).* A phone reads and writes the task notes as ordinary notes — what it
cannot do is talk to Vikunja, so the round trip happens the next time a desktop
syncs. Writing a day's text and every view work everywhere.
:::

## Data location

| Setting | Values | Default |
|---|---|---|
| `dataLocation` | `plugin` · `vault` | `plugin` |
| `dataFolder` | any folder | `_nexus` |

`plugin` keeps the plugin's own JSON in `.nexus-calendar` beside the plugin: out
of the file explorer, out of search and out of the graph, and no plugin update
touches it — but it only travels if your sync includes `.obsidian`. `vault` puts
it in a folder of your choosing, where it is visible and syncable. What lives
there now is the task-sync state; the day texts are in your daily notes.

## Views

| | |
|---|---|
| The month, full page | Command **Open the full-page calendar** |
| The next seven days, in the sidebar | Command **Open the calendar in the sidebar** |
| The tasks page, and the same in the sidebar | **Open the tasks page** · **Open the tasks in the sidebar** |
| One day inside a note | The [agenda block](/tasks/agenda/) |

The month grid over your daily notes is a **different** module — Mini calendar,
settings key `calendar` — and its own command is **Open calendar in the
sidebar**. The two names differ by one word because the commands do; the module
list on [One switch per module](/concepts/modules/) is the way to tell them
apart.

All three Nexus pages can be [pinned to the tab bar](/vault/explorer/#pinned-tabs).

## Not the planner

[The planner](/tasks/planner/) block also gives a month one line per day, but it
keeps those lines **in the block**. The calendar keeps its text **in the daily
note**. Two answers to the same question, and the calendar no longer reads the
planner's — pick the storage you want.
