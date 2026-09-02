---
title: Every setting
description: Each key in data.json that has a default, and what that default is.
sidebar:
  order: 1
---

```
<vault>/.obsidian/plugins/nexus-suite/data.json
```

One object per module, keyed by the module id. Every key below has a default in
the code, so a missing key is never an error — which is what lets a vault from
an older version keep working.

:::caution[Merged one level deep]
Settings are merged one level deep on load. A key nested **two** levels down
that is new in a release does not appear in a vault that already has its parent
object. The code therefore reads such keys defensively, and this is worth
knowing before adding one.
:::

## What is not in these tables

**Bags that start empty** and fill up as you use the plugin: the icon map
(`icons.map`), the dashboard's layout and per-device profiles
(`homepage.layout`, `.profiles`, `.profileNames`), the collapsed banner groups
(`banner.collapsed`), the per-pen overrides and gesture map
(`quicksketch.penConfig`, `.penMap`) and the per-tool colours and palettes
(`.toolColors`, `.toolPalettes`). They have no default to print, so they have
no row — a `data.json` in use holds more keys than this page lists.

**Credentials.** They live in `localStorage` per device, in plain text — see
[Where everything is stored](/concepts/storage/).

**Anything that describes one machine.** The sync server, its device name, the
sync schedule and the task accounts live under `devices.<device id>`, so a
synced `data.json` cannot carry one device's connection onto another. That
object is empty by default and therefore absent below. See
[What belongs to a device](/concepts/devices/).

## Where a value is read

The authoritative source is `src/constants.js` (`DEFAULT_SETTINGS`). This page
is generated from it by `scripts/gen-settings.mjs`; do not edit it by hand.

### `banner` — Banner

Image at the top of a note, plus the note background.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `height` | `250` |
| `fade` | `true` |
| `folder` | `"attachments/banners"` |
| `behindTabs` | `true` |
| `nameTemplate` | `"{{name}}"` |
| `defaultGroup` | `""` |
| `bgStrength` | `4.5` |
| `sepHeight` | `26` |
| `sepPosition` | `50` |
| `sepFade` | `false` |
| `sepRound` | `true` |
| `handScale` | `1.54` |

### `hider` — Interface

Hide parts of the Obsidian interface.

| Key | Default |
|---|---|
| `enabled` | `false` |
| `tooltips` | `false` |
| `scrollbars` | `false` |
| `status` | `false` |
| `titlebar` | `false` |
| `vaultname` | `false` |
| `tabbar` | `false` |
| `instructions` | `false` |
| `ribbon` | `false` |
| `explorerButtons` | `false` |

### `columns` — Columns

Side-by-side text via a code block.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `gap` | `"1.5rem"` |
| `delimiter` | `"==="` |

### `homepage` — Dashboard

Rendered start page with cards, stats and quick actions.

| Key | Default |
|---|---|
| `enabled` | `false` |
| `name` | `""` |
| `hero` | `""` |
| `widgets` | `[]` |
| `stats` | `[{"kind":"total"},{"kind":"streak"}]` |
| `ribbon` | `true` |
| `startup` | `"tab"` |
| `openWhenEmpty` | `false` |
| `perDevice` | `false` |

### `search` — Search

Weighted search over title, tags, headings, properties, text.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `fields.title` | `true` |
| `fields.tags` | `true` |
| `fields.headings` | `true` |
| `fields.props` | `true` |
| `fields.text` | `true` |

### `typography` — Typography

Replaces -- ... -> while you type.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `dashes` | `true` |
| `ellipsis` | `true` |
| `quotes` | `true` |
| `arrows` | `true` |
| `symbols` | `true` |

### `calendar` — Mini calendar

Month grid over your daily notes, in the sidebar.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `ribbon` | `true` |

### `tasksCalendar` — Calendar

Local calendars, events and tasks — the full-page view.

| Key | Default |
|---|---|
| `enabled` | `false` |
| `ribbon` | `true` |
| `dataLocation` | `"plugin"` |
| `dataFolder` | `"_nexus"` |
| `defaultView` | `"month"` |
| `weekStart` | `"locale"` |
| `syncOnStartup` | `true` |
| `syncIntervalMin` | `15` |
| `conflictPolicy` | `"server"` |
| `localCalendars` | `[]` |
| `hiddenCalendars` | `[]` |
| `planner.folder` | `"Planner"` |
| `planner.pattern` | `"YYYY-MM"` |
| `tasks.projectsFolder` | `"Tasks/Projects"` |
| `tasks.itemsFolder` | `"Tasks/Items"` |
| `tasks.providerDefault` | `"local"` |
| `tasks.buckets` | `["Backlog","In progress","Waiting","Done"]` |

### `propertyHider` — Properties

Hide individual frontmatter properties.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `hidden` | `[]` |
| `reveal` | `false` |

### `callouts` — Callouts

Icon and colour per callout type.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `migrated` | `false` |
| `items` | `[]` |

### `workspaces` — Workspaces

Save and switch pane layouts.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `selectMode` | `"release"` |

### `galaxy` — Galaxy

The vault as a turnable map of its links.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `ribbon` | `true` |
| `drift` | `true` |
| `linkDistance` | `60` |
| `showOrphans` | `true` |

### `explorer` — Explorer

Folder cards and the ribbon in the file tree.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `folderBg` | `true` |
| `intensity` | `22` |
| `hideAttachments` | `false` |
| `attachmentFolder` | `""` |

### `folderNotes` — Folder Notes

A note that belongs to a folder, opened by clicking it.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `noteName` | `"{{folder_name}}"` |
| `fileType` | `"md"` |
| `storage` | `"inside"` |
| `openTrigger` | `"click"` |
| `openInNewTab` | `false` |
| `focusExistingTab` | `false` |
| `collapseOnClick` | `false` |
| `hideInExplorer` | `true` |
| `underline` | `true` |
| `bold` | `false` |
| `italic` | `false` |
| `openFromPath` | `true` |
| `autoCreate` | `false` |
| `templatePath` | `""` |
| `syncRename` | `true` |
| `syncDelete` | `false` |
| `confirmDelete` | `true` |
| `confirmRename` | `true` |
| `excludeFolders` | `[]` |
| `supportedTypes` | `["md","canvas","base"]` |

### `icons` — Icons

An icon for any folder or file in the explorer.

| Key | Default |
|---|---|
| `enabled` | `true` |

### `kanban` — Kanban

Columns and cards in a note, or every note of a folder — plus the board view of your tasks.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `buckets` | `["Backlog","In progress","Done"]` |
| `notesFolder` | `""` |
| `boardsFolder` | `""` |
| `compact` | `false` |
| `statusProperty` | `"status"` |

### `planner` — Planner

A month on one screen, one line per day — the paper-calendar view.

| Key | Default |
|---|---|
| `enabled` | `true` |

### `quicknote` — Chatter

A note you speak instead of type.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `folder` | `"Inbox/Quicknote"` |
| `engine` | `"local"` |
| `command` | `"whisper-cli -f {in} -otxt -of {out} -l auto"` |
| `language` | `"en-US"` |
| `asTask` | `false` |
| `openAfter` | `true` |

### `vaultSync` — Vault sync

The whole vault to a WebDAV server, with daily backups and conflict copies.

| Key | Default |
|---|---|
| `enabled` | `false` |
| `config` | `true` |
| `backup` | `true` |
| `keepBackups` | `30` |
| `conflict` | `"keepBoth"` |
| `shared` | `false` |
| `exclude` | `[]` |

### `tagTools` — Tags

Rename, merge and remove tags across the vault.

| Key | Default |
|---|---|
| `enabled` | `true` |

### `inkCapture` — Ink Capture

Scans and handwriting from other apps.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `ribbon` | `true` |
| `tagOnCapture` | `true` |
| `sources` | `[{"id":"paper","label":"Paper (camera)","folder":"Inbox/Paper","enabled…` |
| `excalidraw.enabled` | `true` |

### `quicksketch` — Quick Sketch

Draw in a note with pen, touch or mouse.

| Key | Default |
|---|---|
| `enabled` | `true` |
| `folder` | `"Inbox/Quicksketch"` |
| `ratio` | `"16:9"` |
| `paper` | `"paper"` |
| `paperStyle` | `true` |
| `invertOnDark` | `true` |
| `bg` | `"#f7f6f2"` |
| `ink` | `"#2f2f2f"` |
| `palette` | `["#2f2f2f","#1e6fd9","#d92f2f","#1f9e57","#e0a800"]` |
| `palettes` | `[{"name":"Default","colors":["#2f2f2f","#1e6fd9","#d92f2f","#1f9e57","#…` |
| `activePalette` | `0` |
| `penSizes.fountain` | `3` |
| `penSizes.ballpoint` | `2` |
| `penSizes.pencil` | `2.5` |
| `penSizes.brush` | `5` |
| `penSizes.calligraphy` | `3.5` |
| `penSizes.marker` | `10` |
| `sizeFavorites` | `[1.5,3,8]` |
| `shapeSnap` | `true` |
| `autoGrow` | `false` |
| `bgType` | `"none"` |
| `bgSize` | `27` |
| `bgOpacity` | `0.12` |
| `bgColor` | `"#334155"` |
| `bar.mode` | `"pinned"` |
| `bar.compact` | `null` |
| `bar.full` | `null` |
| `paperWidth` | `1100` |
| `ocr.enabled` | `false` |
| `ocr.command` | `"tesseract {in} {out} -l eng"` |
| `ocr.onSave` | `false` |
| `penProfile` | `"generic"` |
| `hideFrontmatter` | `false` |
| `immersive` | `false` |

### `ribbon`

| Key | Default |
|---|---|
| `mode` | `"hover"` |

### `pinnedTabs`

| Key | Default |
|---|---|
| `home` | `false` |
| `calendar` | `false` |
| `tasks` | `false` |

### `theme` — Theme

Interface style and colour palette.

| Key | Default |
|---|---|
| `style` | `"mirobo"` |
| `palette` | `"nexus"` |
| `gap` | `null` |
| `radius` | `null` |
| `homeGap` | `null` |
| `homePad` | `null` |
| `homeCols` | `24` |
| `homeRow` | `40` |
