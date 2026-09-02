---
title: Workspaces and boards
description: Saved pane layouts, and every note of a folder as cards.
sidebar:
  order: 5
---

## Workspaces

Save a pane layout and switch back to it. Command **Open the workspace
switcher**.

| Setting | Values | Default |
|---|---|---|
| Select mode | `release` · `enter` | `release` |

`release` switches when you let go of the key, which makes the switcher work as
a hold-and-flick; `enter` waits for a confirmation.

## Boards

A folder of notes shown as cards is the [kanban block with
`source: folder`](/tasks/kanban/#a-folder-as-the-board). Two more fences render
the same notes without repeating that key, and both read exactly the same
configuration.

| Fence | What it starts as |
|---|---|
| ```` ```nexus-board ```` | The old subject dashboard — a grid of cards |
| ```` ```nexus-graph ```` | The web of links between the folder's notes |

### `nexus-board`

The same block with `source: folder` and `view: grid` already set. Nothing about
an existing one changed: it still renders every note of the folder as a wall of
cards, grouped and coloured by a frontmatter property.

It also **writes back its own spellings**. `states:`, `columns:`,
`statusproperty:`, `direction:` and `show:` are read, and each is written out as
itself rather than as the kanban block's favourite form — `states: A, B, C`
stays one line instead of becoming three headings, and a fence that never needed
a `source:` line never grows one. A board is one hand-editable text, and a save
that reshaped it would be a save that overwrote a decision somebody made. The
[full list of what does change](/tasks/kanban/#saving-does-not-reshape-the-block)
is on the Kanban page; a WIP limit is the one that will bite, because a
`states:` list has no room for `@3`.

### `nexus-graph`

````md
```nexus-graph
folder: SCHOOL/Biology
view: graph
height: 320
```
````

| `view:` | What you get |
|---|---|
| `graph` | The notes as nodes, the links between them as edges. The default for this fence. |
| `grid` | Every note once, as a sorted wall of cards |
| `board` | Hands the block back to the columns — a [folder board](/tasks/kanban/#a-folder-as-the-board) |

Command **Insert a folder graph**.

Neither the grid nor the web has columns, and neither writes anything into a
note — which is why they are their own block rather than a mode of the board
that does. Three buttons in the head switch between the arrangements, and the
choice is written into the fence, because the fence is the config. A block that
never carried a `view:` line gains one the first time you press one of them.

In the web, a node's size is how many notes of this folder it links to and its
colour is the column it would stand in; a note nothing links to gets a ring
around it. Hovering names it and lights its neighbours, clicking opens it. The
layout is computed once — a few hundred notes need no animation loop, and a
static picture costs nothing on a tablet — and only a real change of width
redoes it. Links pointing outside the folder are not drawn.

The graph view has no filter field: there are no cards to narrow down.

The same web can also be shown **under** a folder board, with `graph: true` or
`show: … graph`. It is off by default — it is an extra, not the board.

### The state property setting

The **Board** module is gone; these fences belong to
[Kanban](/concepts/modules/) now and live or die with its switch.

| Setting | Key | Default |
|---|---|---|
| Default state property | `kanban.statusProperty` | `status` |

It is only a starting value. A folder board writes the property into its own
block on the first save, so from then on the board names it itself and a change
in the settings cannot re-bucket a note.

A vault that had set a property on the old Board page keeps it:
`board.statusProperty` is copied to `kanban.statusProperty` on load — unless you
had already set the new one — and the `board` key is then removed.

## The dashboard

The **Dashboard** module (settings key `homepage`) is the rendered start page:
cards, stats and quick actions. It starts off.

| Setting | Default | |
|---|---|---|
| Ribbon | on | An icon to open it |
| On startup | Open it in a tab of its own | See below |
| Open when the last tab closes | off | Instead of leaving an empty pane |
| Per device | off | Each device gets its own dashboard document |
| Stats | total, streak | Which counters are shown |

**Per device** keeps a separate layout per installation in
`homepage.profiles[deviceId]`. Those documents do sync, but each device reads
only its own entry — so a phone dashboard and a desktop dashboard can differ
without either overwriting the other.

The card grid — columns, card base height, gap and edge padding — is set here as
well. The controls used to live on the Theme tab; they describe the dashboard,
not the look of the app. Only the controls moved: the values are still
`theme.homeCols`, `theme.homeRow`, `theme.homeGap` and `theme.homePad`.

### On startup

`homepage.startup` has three values. The old on/off toggle was migrated: on
became *a tab of its own*, off became *nothing*.

| Value | What happens |
|---|---|
| `off` | Nothing |
| `tab` | Open it in a tab of its own |
| `closeAll` | Close every tab in the main area, then open it |

**The dashboard never replaces an open note.** It used to be handed the active
tab, which meant that on startup it ate whatever you had left open. Now it
brings a dashboard that is already open forward — the pinned one included —
takes over a tab that is empty, because an empty tab is not a note, and
otherwise opens one of its own.

*Close every tab* leaves the pinned Nexus pages where they are. The watchdog
that keeps them pinned would only put them back, so closing them buys a flicker
and nothing else.

**Open when the last tab closes** (`homepage.openWhenEmpty`, off by default)
brings the dashboard up when the final tab in the main area is closed.
