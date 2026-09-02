---
title: What belongs to a device
description: The line between a setting that follows you and one that does not.
sidebar:
  order: 4
---

Some choices are about you and should follow you to every machine. Some are
about the machine in front of you and should stay there. Mixing the two is what
makes a synced vault rearrange itself every time you open it somewhere else.

## Belongs to the device

| | Stored in |
|---|---|
| Credentials (Vikunja, WebDAV) | `localStorage`, [in plain text](/concepts/storage/#credentials-are-not-encrypted) |
| The sync server, its user name and this device's name | `data.json`, under this device's own key |
| Sync on start, and the sync interval | Same |
| The Vikunja accounts | Same |
| The dashboard layout, with *Per device* on | `data.json`, under `homepage.profiles.<device id>` |
| The sketch toolbar, if you gave this device its own | `localStorage` |
| The device id, used to name conflict copies | `localStorage` |
| The window layout (`workspace.json`, `workspace-mobile.json`) | The vault, but [never synced](/sync/overview/) |
| The graph view state (`graph.json`) | Same |
| The vault sync's own state file | Same |

## Follows you

Everything else on the [settings page](/reference/settings/): the style, the
palette, folder-note behaviour, callout definitions, pen sizes, palettes,
kanban columns, planner defaults — and the shared half of the sync policy: the
exclude list, *Carry the settings too*, the conflict rule, *Shared vault* and
the backups.

With *Carry the settings too* on, [vault sync](/sync/setup/) also carries the
rest of `.obsidian` — other plugins and their settings — minus the
device-specific files above.

## Why a per-device setting is in `data.json` anyway

`data.json` is a file in the vault, and the vault is what the sync uploads. A
server URL written at the top level of it is therefore the other machine's copy
the moment it lands — which is how two devices ended up calling themselves the
same name.

`localStorage` would avoid the collision, but it is also never backed up, and
the wanted behaviour is the opposite: sync everything a device knows, just never
let one device's answer become another's. So the file keeps syncing, and
anything describing one machine lives under that machine's own key inside it:

```
"devices": {
  "dev-m1x2k9ab": {
    "migrated": true,
    "vaultSyncUrl": "https://cloud.example.com/…/Vault",
    "vaultSyncDeviceName": "Desktop",
    "vaultSyncOnStart": true,
    "vaultSyncIntervalMin": 15,
    "taskAccounts": []
  }
}
```

The key is the device id from `localStorage`, so a device that loses it —
cleared storage, a reinstall — becomes a new device with an empty entry rather
than inheriting someone else's. It is the same arrangement the per-device
dashboards already used.

From then on nothing writes a device's own answer back over the shared key.
That write was the whole bug.

### What happens to what you already had

On the first load after the update, the values that used to be vault-wide are
copied into this device's entry: `vaultSync.url`, `vaultSync.deviceName`,
`vaultSync.onStart`, `vaultSync.intervalMin` and `tasksCalendar.accounts`.

The originals stay in the file untouched. `data.json` travels between devices,
so the second machine still has to find them when it updates — deleting them
here would migrate one device and leave the other with nothing to migrate from.
A flag in the entry, not the presence of a value, decides whether the migration
has run, so a connection you have since removed cannot come back on the next
load.

The accounts are the one value that could not be left where it was:
`tasksCalendar.accounts` is now an accessor onto this device's list, and
serialising that would write one device's accounts over the shared key on every
save. The original is parked under `tasksCalendar.accountsBeforeDeviceStore`, a
name nothing writes to.

## Connections

A WebDAV server and a Vikunja account are **list entries**, not rows of text
fields. You declare one in a modal, and afterwards the row shows its name, its
kind and its host, and offers exactly two things: *Test* and *Remove*.

| Kind | Where | What it asks for |
|---|---|---|
| WebDAV server | Settings → Vault sync | What this device is called, the server URL, a user name, an app password |
| Vikunja account | Settings → Calendar | A label, the server URL, an API token |

There is no editing, on purpose. Half-changing a connection — a new URL against
the old secret — produces something whose first news of being wrong is a failed
sync. To change one, remove it and add it again.

**Test** asks the server whether it is there and whether it knows you, and
answers in a sentence rather than a status code. It is available while adding
one as well, so a typo is caught before it is saved.

**Remove** clears the stored credential with it — the key stays, its contents
go. A secret for a server nothing lists any more is not a convenience, it is a
leftover, and the vault sync used to leave one behind.

Removing the sync server also empties the vault-wide `vaultSync.url` and
`vaultSync.deviceName` that the migration reads from. Left filled, a device
whose id changed would migrate the removed server straight back in on its next
load.

One vault lives on one server, so the sync list stops at one entry: with a
server configured there is no *Add* button until you remove it. The account list
has no such limit.

## Giving one device its own toolbar

Settings → Quick Sketch → **Just this device**. It copies whatever is on screen
now into `localStorage` and from then on that device reads its own copy. Turning
it back off returns it to the shared setting; nothing is lost either way.

The case it exists for: a phone wants three buttons and a menu where a desktop
wants all of them, and neither should have to be a compromise for the other.
