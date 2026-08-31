---
title: Conflicts
description: What happens when two devices changed the same file, and how to choose.
sidebar:
  order: 3
---

A conflict is when **both** sides moved since the last agreement, and moved
differently. Nothing is overwritten without saying so.

## The policies

| Policy | What it does |
|---|---|
| **Keep both** (default) | The server version keeps the file name; your copy is saved beside it |
| Newer wins | The older of the two is overwritten |
| This device wins | The server version is overwritten |
| The server wins | Your version is overwritten |

Only *Keep both* cannot lose work. The other three exist because sometimes you
do know which side is right — and they are described as what they are, which is
a choice to discard something.

*Newer wins* with two identical timestamps falls back to keeping both, rather
than deciding by a coin toss.

## The copy

```
notes/Idea (conflict Tablet 2026-08-31 1400).md
```

The device name and the time are in the name, so a folder of them still tells
you which machine wrote which. Path separators in a device name are stripped —
a name cannot reach outside the folder.

A file without an extension keeps working:

```
LICENSE (conflict Desk 2026-08-31 1400)
```

The copy is written on **both** sides, so it is visible wherever you look next.

## Being told

A conflict always raises a notice naming the file and where your copy went, even
on an automatic background sync where nothing else is announced.
