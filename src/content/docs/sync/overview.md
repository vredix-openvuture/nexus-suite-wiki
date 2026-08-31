---
title: How it decides
description: Three-way sync, what the third input buys, and when it refuses to run.
sidebar:
  order: 1
---

The whole vault to a WebDAV server: Nextcloud, a Synology, anything that speaks
it. It runs on mobile too, because it goes through Obsidian's own `requestUrl`.

## Three-way, not two-way

It compares three things: what is **here**, what is on the **server**, and what
was here the last time the two **agreed**.

Without that third input a sync cannot tell a file you *deleted* from a file that
has not *arrived* yet. Both look like "on one side and not the other". A two-way
sync therefore has to guess, and whichever way it guesses is wrong half the
time: it either resurrects everything you delete, or it deletes everything you
have not downloaded.

## The table

| Here | Server | Result |
|---|---|---|
| new | — | upload |
| — | new | download |
| changed | unchanged | upload |
| unchanged | changed | download |
| deleted | unchanged | delete on the server |
| unchanged | deleted | delete here |
| deleted | deleted | nothing |
| changed | changed, identically | nothing |
| changed | changed, differently | [conflict](/sync/conflicts/) |
| deleted | changed | conflict |
| changed | deleted | conflict |

A difference of up to two seconds in modification time is not treated as a
change. Timestamps cross machines and file systems, and two seconds covers a FAT
timestamp's own resolution, which is the coarsest thing likely to be underneath.

## The record of the agreement keeps both sides

Not one timestamp — two. A file uploaded to a server comes back with the
**server's** modification time, which is not the local one. A record that
remembers a single timestamp would declare the remote side changed on the very
next run and download back what had just been uploaded, for ever.

After a run, what each side actually looks like is read back rather than
assumed.

## When it refuses to run

A wrong URL, or a folder renamed on the server, comes back as an **empty
listing** — and then every file looks deleted remotely. The plan would be to
delete the entire vault. That is one typo away at all times, so it is checked
rather than trusted:

- The server answered empty while files were expected there → **stop**.
- More than a third of the known files, and more than ten of them, would be
  deleted on either side → **stop**.

Nothing is changed, and the reason is said in words. A refused sync costs an
afternoon; the other way round costs the vault.

A first sync has nothing recorded, so an empty server is simply a new one and
runs normally.

## Deletions go to the trash

Through Obsidian's trash, not a raw delete. A sync that removes the wrong file
has to be recoverable.
