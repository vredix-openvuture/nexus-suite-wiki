---
title: Style
description: The shape of the interface — cards, or nothing at all.
sidebar:
  order: 1
---

Settings → Theme → **Style**. It decides the *shape* of the interface; the
[palette](/look/palette/) decides its colour. The two are independent.

| Style | What it does |
|---|---|
| **Mirobo** (default) | Every pane is a rounded, tinted card floating on a desk |
| **Almost nothing** | No cards, no gaps, no tint |

## Mirobo

Named after the quickshell style it copies. A card is a bar plus its content,
joined into one: the tab bar sits as a strip inside the card, set off only by a
dividing line rather than being a chip of its own.

The style reaches the plugin's own surfaces too — the dashboard, boards, the
tasks page, the agenda, banners — so the app changes as a whole rather than
just around the edges.

## Almost nothing

The Notion end of the range, and openly so: one continuous surface, hairlines
instead of borders, almost no radius, a system sans, tight block spacing, and
text as the only hierarchy.

| | |
|---|---|
| Text column | 708 px |
| Line height | 24 px |
| Block spacing | About 4 px |
| Inline code | 85%, red, on the one tinted surface |
| Headings | By size and weight only, never by colour |
| Links | Underlined in the text colour |
| Sidebar | 14 px, 27 px rows, no folder blocks |

Colour survives only where it carries meaning: active, due, done.

Pair it with the **Minimal** palette for the full effect; any other palette
works too — the style shapes, the palette colours.

## Geometry is not a setting

The Theme tab is style and palette, and nothing else. The **card gap** and
**corner radius** sliders that used to sit here are gone.

Radii, border width and colour, surface lifts, control height and spacing are
declared in one token block, written twice: in the plugin's
`src/styles/00-tokens.css` on `:root, body`, and in the theme's `theme.css` on
`.theme-dark, .theme-light`. The theme's selector is the more specific, so it
wins when the theme is active, and the plugin still has every token it uses
under any other theme. The two blocks must stay identical, and a test in the
plugin fails if they drift.

`:root, body` and not `:root` alone, because Obsidian declares its own variables
on `body`: a token that references one has to be substituted on an element where
it exists.

Before that, the two disagreed — the theme said one container radius, the
plugin's fallbacks said two different ones — which is why the same element could
have a different corner on every page, and why a slider competing with the
tokens had to go.

| Token | For |
|---|---|
| `--nx-radius` | Anything that **contains** something: card, panel, modal, code block, callout, banner, image, popover |
| `--nx-r-tile` | Anything that **is** a control: button, input, list row, tab, chip, tag, swatch, toggle |

Two more exist and are shapes rather than radii: `--nx-r-circle` where the
element genuinely is a circle, and `--nx-r-pill` only where the pill carries
meaning — a segmented control, a status pill. An ordinary button is never a
pill.

A style variant changes the two radii and the handful of tokens that belong to
its shape — `Almost nothing` also flattens `--nx-gap`, the tab gap, the bar
height and the card shadow — and nothing beyond that. Obsidian's own
`--radius-*`, `--tab-radius` and `--input-radius` are derived from the two radii,
so they follow on their own; restating them is what used to leave a menu, a
button and a row at three different corners.

Values anyone had already set with the old sliders are still read, so nothing
you configured was thrown away; there is simply no longer a control inviting
it.

The dashboard's own grid sliders — columns, card height, gap, edge padding —
moved to Settings → Dashboard, where the thing they size actually lives. Only
the controls moved: the values are still `theme.homeCols`, `theme.homeRow`,
`theme.homeGap` and `theme.homePad` in `data.json`, so nobody's dashboard
changed shape.
