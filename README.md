<div align="center">

**Nexus Suite Wiki** is the documentation for the Nexus Suite Obsidian plugin.

</div>

Astro + [Starlight](https://starlight.astro.build). Navigation on the left, page
contents on the right. Its own repository beside the plugin, with its own
history and its own deploy, because documentation kept inside a project repo
drifts until nobody notices it has stopped building.

<br>

## Install

    npm install

Then `npm run dev` for a local server, or `npm run build` for the static site in
`dist/`.

Requires Node. Nothing else — the wiki has no back end.

<br>

## Features

### The documentation

- **Start here.** What the plugin is, installing it, and what to turn on first.
- **How it fits together.** Modules, the blocks that are their own data, where
  everything is stored, and what belongs to a single device.
- **Quick Sketch.** Eight pages: the toolbar, the tools, the page, pen buttons,
  export, search and slate notes.
- **Tasks and planning.** Projects, a note as a task, the agenda block, kanban,
  the planner, calendars and Vikunja.
- **Vault sync.** How it decides, setting it up, conflicts, backups, and what a
  shared vault is not.
- **Writing.** Banners, callouts, typography, Chatter.
- **Around the vault.** Explorer, folder notes, icons, search, workspaces and
  boards, the capture hub, the galaxy, and the sidebar panels.
- **Look.** Style, palette, and what happens on a phone or a tablet.
- **Reference.** Every setting with its default, every command, every code
  block, every frontmatter key, every path.
- **Help.** Troubleshooting, FAQ, development.

### How it is kept honest

- **The sidebar is written out by hand** in `astro.config.mjs`. A page that is
  not listed there is unreachable, and a slug that does not exist breaks the
  build. That is the check that a page was finished.
- **The settings reference is generated** from the plugin's own
  `DEFAULT_SETTINGS` by `npm run gen:settings`, so a default cannot drift away
  from the code.
- **Every internal link is checked** against the built pages before a commit.

<br>

## Roadmap

- **Screenshots.** Every feature page would carry one; none do yet.
- **Deploy.** The site builds to `dist/` and is not published anywhere.
- **A page per module for the ones that only appear in tables.** Ink Capture
  and the Mini calendar deserve their own pages — Ink Capture is described from
  the capture hub's side only, and its sources and inbox watcher are nowhere.
  The Calendar module has one under Tasks and planning.

<br>

## Links

[Plugin](https://github.com/vredix-openvuture/nexus-suite) ·
[Theme](https://github.com/vredix-openvuture/nexus-theme)

MIT licensed.
