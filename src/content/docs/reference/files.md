---
title: Files and paths
description: Everything the plugin reads or writes, and where.
sidebar:
  order: 5
---

## In the vault

| Path | What it is |
|---|---|
| `.obsidian/plugins/nexus-suite/main.js` | The bundle. A build output — do not edit it |
| `.obsidian/plugins/nexus-suite/styles.css` | The same |
| `.obsidian/plugins/nexus-suite/data.json` | [Every setting](/reference/settings/) |
| `.obsidian/plugins/nexus-suite/sync-state.json` | What the vault sync last agreed with the server |
| `.obsidian/themes/Nexus/theme.css` | The theme, if installed |

## Folders it uses

| Setting | Default |
|---|---|
| Sketch folder | `Inbox/Quicksketch` |
| QuickNote folder | `Inbox/Quicknote` |
| Banner folder | `attachments/banners` |
| Task projects | `Tasks/Projects` |
| Task items | `Tasks/Items` |
| Ink capture (paper) | `Inbox/Paper` |
| Calendar data | `_nexus`, when `dataLocation` is `vault` |

## On the sync server

| Path | What it is |
|---|---|
| `/` | The vault, mirrored |
| `/_backups/` | One zip a day, rotated |
| `/_presence/` | One small file per device, when a shared vault is on |

`_backups` and `_presence` are never treated as vault content, so they are not
downloaded into your notes.

## Per-device storage

Three keys in `localStorage`, none of which travel with the vault:

| Key | What it is |
|---|---|
| `nexus-suite-device-id` | A random id for this installation |
| `nexus-suite-cred-<account>` | The sign-in details for one account |
| `nexus-suite-sketchbar` | This device's sketch toolbar, if it has its own |

## The sketch sidecar

```
Inbox/Quicksketch/<id>.svg
```

A standalone SVG: paper, background pattern and rendered stroke outlines, with
the raw stroke data as JSON inside its `<metadata>`.

Any viewer sees an image. The plugin reads the metadata back for lossless
editing. The CDATA payload escapes `]]>` if a section title or a note contains
one — without that, a stray `]]>` would truncate the metadata and leave a file
that no longer parses.
