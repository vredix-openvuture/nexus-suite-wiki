---
title: CalDAV and Vikunja
description: Server accounts, local calendars, and how a sync round works.
sidebar:
  order: 6
---

The **CalDAV** module (settings key `tasksCalendar`) holds the accounts, the
local calendars, the events and the server-backed tasks. It starts off.

## Accounts

| Kind | What it brings |
|---|---|
| CalDAV | Calendars (`VEVENT`) and tasks (`VTODO`) |
| Vikunja | Projects and tasks over the REST API |
| Local | A calendar that lives only in this vault |

Add one in Settings → CalDAV. The server URL, the user name and which calendars
are enabled are stored in `data.json`; **the password or API token is not** — it
goes to `localStorage` on that device. See
[Where everything is stored](/concepts/storage/).

## Sync

| Setting | Default |
|---|---|
| Sync on startup | on |
| Interval | 15 minutes |
| Conflict policy | `server` |

Command **Sync calendars and tasks now** runs a round immediately.

A round is three-way for tasks: what is here, what is on the server, and what
was here at the last agreement. A conflict raises the conflict dialog unless the
policy says the server always wins.

CalDAV `VTODO` has no server-side recurrence roll-over, so a repeating task's
due date is advanced by the plugin — for local and CalDAV alike. Vikunja is the
exception: its server owns the repeat, so the task is only marked done and the
sync pushes it.

## Data location

| Setting | Values | Default |
|---|---|---|
| `dataLocation` | `plugin` · `vault` | `plugin` |
| `dataFolder` | any folder | `_nexus` |

`plugin` keeps the calendar cache in the plugin folder; `vault` puts it in a
folder of your choosing, where it is visible and syncable.

## Views

| | |
|---|---|
| Month, week or day, full page | Command **Open the full-page calendar** |
| In the sidebar | Command **Open the calendar in the sidebar** |
| One day inside a note | The [agenda block](/tasks/agenda/) |

Network access uses Obsidian's `requestUrl`, so it works on mobile as well as
on the desktop.
