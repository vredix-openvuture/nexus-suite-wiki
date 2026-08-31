# Project Rules — nexus-suite-wiki

Overrides `~/.claude/CLAUDE.md`.

## Stack

Astro + Starlight documentation site for the Nexus Suite Obsidian plugin. Node,
npm. The plugin itself lives at
`~/DEV/OBSIDIAN-nexus-DEV/.obsidian/plugins/nexus-suite`, and the theme it pairs
with at `~/DEV/OBSIDIAN-nexus-DEV/.obsidian/themes/Nexus`.

## Commands

```bash
npm install
npm run dev        # astro dev
npm run build      # astro build — run this before every commit
npm run preview
```

There is deliberately **no** `.claude/verify.sh`: `astro check` wants to install
`@astrojs/check` and `typescript` interactively, which would hang the Stop hook.
Install them once (`npm i -D @astrojs/check typescript`) and a verify script
becomes worth adding.

## Structure

- `src/content/docs/` — the pages, one folder per section.
- `astro.config.mjs` — the sidebar, written out by hand.
- `src/styles/nexus.css` — palette and rhythm over Starlight.

## Conventions specific to this project

- **The sidebar is explicit.** A new page exists but is unreachable until it is
  listed in `astro.config.mjs`. That is on purpose: the order should be a
  decision, not a side effect of file names. A slug that does not exist breaks
  the build, which is the built-in test.
- **Every page needs `title` and `description`** in its frontmatter, plus
  `sidebar.order`. A description containing a colon must be quoted.
- **Document what the code does**, not what it should do. Where something is
  unfinished, say so on the page rather than only in the source.
- **Reference material goes in tables, explanations in prose.** Do not mix them.
- **The settings reference is generated** from the plugin's `DEFAULT_SETTINGS`.
  Regenerate it rather than editing it by hand, or it will drift from the code:

  ```bash
  cd ~/DEV/OBSIDIAN-nexus-DEV/.obsidian/plugins/nexus-suite
  node -e "…"   # see the git history of reference/settings.md
  ```

- **Check internal links before committing**, anchors included. A dead link here
  is a defect like any other.
- **This documents what shipped.** Design decisions belong in the plugin repo.
  A wiki page ahead of the code is worse than a missing one.
