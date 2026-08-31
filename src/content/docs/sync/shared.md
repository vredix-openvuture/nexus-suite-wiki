---
title: A shared vault
description: Knowing someone else is in the vault, and why that is not live editing.
sidebar:
  order: 5
---

**Shared vault** makes each device leave a note on the server saying it is here.
Anything older than fifteen minutes is not "here" any more.

That lets you be told that someone else is in the same vault, so you find out
before a conflict rather than through one.

## What this is not

It is not live co-editing, and no amount of work on this feature would make it
so.

Two people typing in the same paragraph at the same time needs a **CRDT** — a
data structure in which concurrent edits merge deterministically — and a **relay
server** holding the document in memory so those edits can be exchanged as they
happen, character by character.

A WebDAV server stores files and answers requests for them. No arrangement of
file uploads and downloads adds up to character-level merging: by the time a
file has been written, the two versions have already diverged, and merging them
is exactly the problem a CRDT exists to solve.

So the honest version of that feature is what is here: a short sync interval, so
changes land in seconds rather than minutes, plus a warning that someone else is
in the vault.

## If you want the real thing

It needs a component this plugin does not have and cannot fake: a server process
you run, holding the documents. That is a separate project, not a setting.

## Practical advice for two people

- Turn the interval down to a minute or two.
- Agree on who owns which folder. Conflicts between people are almost always two
  people editing the same note, and the fastest fix is not editing the same
  note.
- Leave the conflict policy on **Keep both**. With two people it is the only one
  that cannot silently discard someone else's afternoon.
