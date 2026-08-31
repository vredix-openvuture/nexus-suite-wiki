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
| `localStorage` | Secrets, and the choices that belong to one device | **No** |
| The sketch folder | One standalone `.svg` per drawing | Yes |

## Why secrets are not in `data.json`

`data.json` is a file in the vault. The vault is the thing that gets synced,
backed up, copied to a second machine and occasionally shared. A password in it
is a password in all of those places.

So every credential goes to `localStorage`, per device:

| Key | Holds |
|---|---|
| `nexus-suite-device-id` | A random id for this installation |
| `nexus-suite-cred-<id>` | User name and secret for one account |
| `nexus-suite-sketchbar` | This device's sketch toolbar, if it has its own |

That includes CalDAV passwords, Vikunja API tokens and the WebDAV app password.
It means you type them once per device, which is the trade — and it is the right
way round.

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
