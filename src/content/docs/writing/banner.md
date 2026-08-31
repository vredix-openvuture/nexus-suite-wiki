---
title: Banners
description: An image at the top of a note, the note background, and image separators.
sidebar:
  order: 1
---

An image at the top of a note, picked from a folder of them and grouped so a
long list stays navigable.

| Setting | Default | |
|---|---|---|
| Height | 250 | Pixels |
| Fade | on | Fades the bottom edge into the note |
| Folder | `attachments/banners` | Where the pictures live |
| Behind the tabs | on | The banner runs up under the tab bar |
| Name template | `{{name}}` | For an imported file. Tokens: `{{name}}`, `{{note}}`, `{{date}}`, `{{time}}` |
| Default group | — | Which group the picker opens on |
| Background strength | 4.5 | How strongly the banner tints the note background |

The banner is set per note in its frontmatter, and the picker writes it there.

## The note background

A banner also tints the note behind the text, at the strength above. It is
subtle by design: a background that competes with the text is a background that
gets turned off.

## Image separators

A ```` ```nexus-separator ```` block draws a shaped rule from an image — a
horizontal divider that is not a plain line.

| Setting | Default |
|---|---|
| Height | 26 |
| Position | 50 |
| Fade | off |
| Rounded | on |

Command **Insert an image separator**.

## Handwritten notes

`handScale` (default 1.54) is the size factor for the handwritten note font. It
is measured rather than guessed: Grape Nuts has an x-height of 0.35em against a
sans' 0.54em, so 0.54 / 0.35 puts both at the same *read* size.
