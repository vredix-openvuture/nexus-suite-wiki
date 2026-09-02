---
title: Calendars and Vikunja
description: Local calendars, events, and the accounts your tasks sync against.
sidebar:
  order: 6
---

The **Calendar** module holds the local calendars, the events, the tasks page
and the Vikunja accounts the tasks sync against. It starts off.

Its settings key is still `tasksCalendar`, although the module is called
Calendar. The name is what you read; the key is what your `data.json` already
contains, and renaming it would strand settings that are in use.

:::note[CalDAV is gone, the calendar is not]
The network layer under this module was removed: server discovery, the mirror of
a server calendar, write-through for server events, and the two-way `VTODO` task
sync. Local calendars, events, recurrence, the full-page view, its pinnable tab
and the whole Vikunja sync work exactly as before.

An account left over from CalDAV is skipped with a message saying to remove it,
rather than handed to the Vikunja client — its URL is a DAV path and its secret
an app password, so it would fail on every run. A `calendar/remote/` folder in
the data directory is now inert data: nothing reads it, and nothing deletes it
either.
:::

## Calendars

| Kind | What it is |
|---|---|
| Local | A calendar that lives only in this vault, with a name and a colour |
| Tasks | Not a calendar — your tasks' due dates, drawn alongside the events |

Add a local calendar in Settings → Calendar. Events are edited in the event
modal and stored in the calendar's own file; a repeat rule is expanded by the
plugin when the view is drawn.

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
syncs. The local calendars, the events and the views all work everywhere.
:::

## Data location

| Setting | Values | Default |
|---|---|---|
| `dataLocation` | `plugin` · `vault` | `plugin` |
| `dataFolder` | any folder | `_nexus` |

`plugin` keeps the calendar files in `.nexus-calendar` beside the plugin: out
of the file explorer, out of search and out of the graph, and no plugin update
touches them — but they only travel if your sync includes `.obsidian`. `vault`
puts them in a folder of your choosing, where they are visible and syncable.
Local calendars end up in `<data folder>/calendar/local/`, one JSON file each.

## Views

| | |
|---|---|
| Month, week or day, full page | Command **Open the full-page calendar** |
| The next seven days, in the sidebar | Command **Open the calendar in the sidebar** |
| The tasks page, and the same in the sidebar | **Open the tasks page** · **Open the tasks in the sidebar** |
| One day inside a note | The [agenda block](/tasks/agenda/) |

The month grid over your daily notes is a **different** module — Mini calendar,
settings key `calendar` — and its own command is **Open calendar in the
sidebar**. The two names differ by one word because the commands do; the module
list on [One switch per module](/concepts/modules/) is the way to tell them
apart.

All three Nexus pages can be [pinned to the tab bar](/vault/explorer/#pinned-tabs).

## The month shows the planner

A month view resolves to one note holding a `nexus-planner` block, shows that
block's line for a day under the day number, and can write one there. Two
surfaces, one store. The settings for where those notes live, and what is
written when, are on [The planner](/tasks/planner/).
