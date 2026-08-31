---
title: Quick Note
description: A note you speak instead of type.
sidebar:
  order: 6
---

Command **Quick Note (speak it)** opens a recorder. Say the thing, press stop,
and it becomes a note.

It is the sister of Quick Sketch: the same idea — catch the thought before it is
gone — with the other hand free.

## The note

The first eight words become the file name, because that is what you will be
scanning for later. The exact time goes into the frontmatter, where it does not
have to be short.

```md
---
nexus-type: quicknote
recorded: 2026-08-31T14:00
seconds: 13
engine: local
---
Remember to call the supplier

About the pricing on the second batch
```

The recogniser's line breaks are where the speaker paused, and that is the only
structure a recording actually has — so they become paragraphs.

Ticking **Track the note as a task** in the recorder writes `nexus-task: true`,
so a spoken reminder turns up in the [tasks view](/tasks/note-as-task/).

## The two recognisers

| | |
|---|---|
| **A program on this machine** (default) | Runs the command below on the recording. Nothing is uploaded. **Desktop only** — a phone has no shell to run it in. |
| **The browser's own recogniser** | No install and it works on mobile — but most builds send the audio to the browser vendor to transcribe it, which is the opposite of local. |

The difference is stated in the settings rather than hidden, and the local one
is the default for that reason.

### The command

```
whisper-cli -f {in} -otxt -of {out} -l auto
```

`{in}` is the recorded audio; `{out}` is where the text should land. A program
that prints to standard output instead is also accepted, so the command line is
not forced into one shape. For German, `-l de`.

The command is split here and never handed to a shell, so a path with a space
in it is just a path.

### The browser recogniser

Set a **language** as a BCP-47 tag (`de-DE`, `en-GB`). If the device has no
recogniser at all, the settings page says so rather than letting recording start
and fail.

Obsidian on Android draws in the system WebView, and a WebView is not a browser:
the Web Speech API is a Chrome feature that WebView does not ship. Open
**Settings → Quick Note** on the device with the browser engine selected — the
page states outright whether *this* device has a recogniser.

## What it needs, before you speak

The recorder refuses to start, and says why, when the engine cannot work here:

| Situation | What you see |
|---|---|
| Local engine on a phone or tablet | "The local recogniser runs a program on the machine, and a phone or tablet has no shell for it." |
| Local engine, no command set | The setting to fill in, with an example. |
| Browser engine, no recogniser on the device | "This device has no browser recogniser." |
| Local engine, command names a program that is not installed | The program's own name, not `spawn … ENOENT`. |

That check used to happen *after* the recording, which meant speaking a
paragraph and then losing it.

## Settings

| Setting | Default |
|---|---|
| Folder | `Inbox/Quicknote` |
| Recogniser | `local` |
| Command | `whisper-cli -f {in} -otxt -of {out} -l auto` |
| Language | `en-US` |
| Track new notes as tasks | off |
| Open the note afterwards | on |
