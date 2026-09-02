---
title: Setting it up
description: URL, credentials, what travels and what does not.
sidebar:
  order: 2
---

Settings → **Vault sync**. It starts off.

## Server

**Add a server** opens a modal with four fields; afterwards the server is a row
in a list.

| Field | Example |
|---|---|
| This device is called | `Desktop` — it goes in the name of a conflict copy |
| Server URL | `https://cloud.example.com/remote.php/dav/files/me/Vault` |
| User name | your account |
| App password | an app-specific one, not your account login |

**Test** asks the server whether it is there and whether it knows you, and
answers in a sentence rather than a status code: the credentials were refused,
the account is not allowed into that folder, that folder does not exist, or the
URL answered but not as WebDAV.

A server **cannot be edited** once saved. A new URL against the old credential
is half a connection, and the first news of that is a failed sync — so to change
one, remove it and add it again. **Remove** clears the stored credential with
it, which the sync used to leave behind. One vault lives on one server, so the
list stops at one entry.

The connection belongs to **this device**, not to the vault: the URL, the user
name and this device's name sit under the device's own key in `data.json`, and
the credential in `localStorage`, unencrypted. Every device connects itself.
That matters more here than anywhere else, because the vault is what gets
uploaded — see [What belongs to a device](/concepts/devices/).

## When

Both of these belong to the device as well: a phone on mobile data and a desktop
rarely want the same number.

| Setting | Default | |
|---|---|---|
| Sync on start | on | So a device you pick up is already what you left |
| Every | 15 minutes | 0 = only when you ask |

Command **Sync the vault now** runs one immediately.

## What

**Carry the settings too** (default on) syncs `.obsidian` as well, so plugins
and themes follow you — **except** the files that describe this machine:

- `.obsidian/workspace.json`
- `.obsidian/workspace-mobile.json`
- `.obsidian/graph.json`
- `.obsidian/plugins/nexus-suite/sync-state.json`

Those would rearrange panes you deliberately arranged.

Never synced at all, whatever the setting: `.git/`, `.trash/`, `.stfolder/`,
`.stversions/`, `node_modules/`, `.DS_Store` and Syncthing's
`*.sync-conflict-*` copies.

**Never sync** takes one rule per line. A trailing slash means a folder; `*`
matches anything.

```
Archive/
*.tmp
Private/notes.md
```

`data.json` itself does sync, settings included — that is wanted. What used to
travel with it was the other machine's server and its device name, which is why
both machines ended up calling themselves the same thing. Those now sit under
each device's own key inside the file, so it can travel without one device's
answer becoming another's. Everything else on this tab is one answer for the
whole vault and is meant to travel: *Carry the settings too*, the **Never sync**
list, the conflict rule, *Shared vault* and the backups.

## The first run

Point it at an **empty folder** and let it upload. Starting from an empty server
is the one case with no ambiguity at all: nothing is recorded, so nothing can be
mistaken for a deletion.

Then open the **second** device and let it pull the vault down. Folders are
created there a segment at a time, on purpose: `adapter.mkdir` is not the same
call on desktop and mobile, and the device receiving a vault it does not have
yet is the one that has to build every path.

## When a run goes wrong

**Settings → Vault sync → The last run** is where to look:

- what the run did — up, down, removed, conflicts, failed — and how long it took
- the first five failures in full, path and reason
- a **Sync** button that runs it and reports right underneath

Every failure, not only the five shown, also goes to the console as
`[Nexus] sync failed on "<path>": <reason>`.

A run that stops without changing anything says so too: an empty server listing
where files were expected, or a plan that would delete a third of what is known,
refuses rather than guesses — see [Conflicts](/sync/conflicts/).
