---
title: Setting it up
description: URL, credentials, what travels and what does not.
sidebar:
  order: 2
---

Settings → **Vault sync**. It starts off.

## Server

| Field | Example |
|---|---|
| Server URL | `https://cloud.example.com/remote.php/dav/files/me/Vault` |
| User name | your account |
| App credential | an app-specific one, not your account login |

**Test** asks the server whether it is there and whether it knows you, and
answers in a sentence rather than a status code: the credentials were refused,
the account is not allowed into that folder, that folder does not exist, or the
URL answered but not as WebDAV.

Credentials go to `localStorage` on this device and never into the vault — which
matters here more than anywhere else, because the vault is what gets uploaded.

**This device is called** shows up in the name of a conflict copy, so you can
tell which machine wrote it.

## When

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

## The first run

Point it at an **empty folder** and let it upload. Starting from an empty server
is the one case with no ambiguity at all: nothing is recorded, so nothing can be
mistaken for a deletion.
