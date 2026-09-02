---
title: Where everything is stored
description: Which file holds what, and why secrets are not in the vault.
sidebar:
  order: 3
---

## The four places

| Place | Holds | Travels with the vault |
|---|---|---|
| Your notes | Tasks, projects, boards, planners, agendas — all of it | Yes |
| `.obsidian/plugins/nexus-suite/data.json` | Every setting on the [settings page](/reference/settings/) | Yes |
| `localStorage` | Secrets, and a handful of choices that belong to one device | **No** |
| The sketch folder | One standalone `.svg` per drawing | Yes |

## Why secrets are not in `data.json`

`data.json` is a file in the vault. The vault is the thing that gets synced,
backed up, copied to a second machine and occasionally shared. A password in it
is a password in all of those places.

So every credential goes to `localStorage`, per device:

| Key | Holds |
|---|---|
| `nexus-suite-device-id` | A random id for this installation |
| `nexus-suite-cred-<id>` | The sign-in details for one connection |
| `nexus-suite-sketchbar` | This device's sketch toolbar, if it has its own |

That includes Vikunja API tokens and the WebDAV app password. `<id>` is
`vaultsync` for the sync server and the account's own id for a Vikunja account,
and [removing a connection](/concepts/devices/#connections) empties its entry.

It means you type a secret once per device, which is the trade — and it is the
right way round.

## Credentials are not encrypted

They are stored as plain JSON in `localStorage`, in the clear. Anything that can
read the browser storage of your Obsidian installation — another plugin, a
process running as you, someone at the unlocked machine — can read them.

What `localStorage` buys is that a secret does not travel: it stays out of the
vault, out of the sync, out of the backups and off the second machine. That is
the whole of the protection, and it is worth being exact about it. Use an app
password or a scoped API token, never your account password, and revoke it on
the server if a device is lost.

## What is under a device's own key

Settings that describe **one machine** — the sync server, its user name, this
device's name, the sync schedule and the Vikunja accounts — are in `data.json`
but under `devices.<device id>`, so a synced file cannot carry one device's
connection onto another. See
[What belongs to a device](/concepts/devices/).

## The sketch sidecar

A drawing is not stored in the note. It is a standalone `.svg` in the sketch
folder (`Inbox/Quicksketch` by default), and the note carries only its id.

The file is a real image any viewer can open: background, paper texture and the
rendered stroke outlines. The raw stroke data — points and pressure — rides
along inside its `<metadata>` as JSON, which is what makes it losslessly
re-editable. See [Files and paths](/reference/files/).

## What a task is

A note. `nexus-type: task` in its frontmatter makes it one, `nexus-type: project`
makes a project, and a plain note with `nexus-task: true` is
[a note that tracks itself](/tasks/note-as-task/). Nothing is stored anywhere
else; the tasks page is a view over the vault.
