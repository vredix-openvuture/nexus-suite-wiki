---
title: The capture hub
description: One view for everything you caught rather than wrote — scans, drawings and spoken notes.
sidebar:
  order: 6
---

Command **Open the capture hub**. Three tabs over the three things this plugin
catches for you:

| Tab | What is on it | Where it comes from |
|---|---|---|
| Ink | Scans — a note carrying `ink-source` | [Ink Capture](/concepts/modules/) |
| Sketch | Every drawing in the vault | [Quick Sketch](/sketch/overview/) |
| Chatter | Every note carrying `nexus-type: quicknote` | [Chatter](/writing/chatter/) |

They never mix. A tab is a kind of thing, and a list that held all three would
have to explain what each row was before you could read it.

Excalidraw drawings show up on the Ink tab as well, marked with their own source
badge. They are already taggable notes in their own right, so they are only
surfaced here rather than rewritten into captures — and it is a switch you can
turn off (Settings → Ink Capture).

This grew out of Ink Capture's gallery, which is why the gallery's commands and
its saved view still open it — on the Ink tab.

## Two tiles and a list

Ink and Sketch are grids of tiles, because both have a picture and the picture
is what you recognise them by.

**Chatter is a list.** A spoken note has no picture, so a tile would be an empty
box with a name under it. The first line of the transcript is the only preview
there is, and it wants the width a cover would have wasted.

| Tab | A card shows |
|---|---|
| Ink | The scan, or a PDF's cached first page; the source it came from as a badge; the name; up to three tags |
| Sketch | The drawing itself; how many sections the page has; whether it has been read yet |
| Chatter | The name, the first line spoken, the date, and how long the recording was |

## One toolbar

The same row over all three tabs: an action button, a search field, a sort, and
a way into select mode. The button is the one thing the tab brings of its own —
**Capture** on Ink, **Find** on Sketch, **Speak** on Chatter.

Search is one field, not one control per tab, because each kind hands it a
different haystack:

| Tab | Searched |
|---|---|
| Ink | Name, source, the short note, tags |
| Sketch | Name, section names, sticky notes, recognised handwriting |
| Chatter | Name, the first line, the recogniser, tags |

Every term has to hit something, so two words narrow rather than widen — the
same rule the [sketch search](/sketch/search/) uses. Typing `paper` or `journal`
is therefore a filter, and the toolbar stays one row wide.

Sort is **Newest** (the default), **Oldest** or **Title**. Newest is the default
because a capture hub is a place you come to for the thing you just made.

## Select mode

The select button turns the cards into a set. **The bulk actions replace the
search row rather than stacking under it**, which is what keeps the toolbar a
single line in a 280px sidebar.

| Action | What it does |
|---|---|
| All | Selects everything currently visible |
| Tag | Adds tags to the selection |
| Read | Ink only — reads the handwriting in the selected scans |
| Delete | Moves them to the trash |
| Done | Leaves select mode |

The selection belongs to the tab, not to the toolbar: switching tabs clears it
and leaves select mode. A set of paths from the Ink tab means nothing on the
Sketch tab, and a bulk delete acting on the leftovers of another one is the
mistake this must not be able to make.

For the same reason a bulk action only ever touches what is **on screen**. An
item you selected and then filtered away with the search box is not included —
the button says "these four", so it has to mean the four you can see.

### Delete names every file

A capture is more than the note you clicked: a scan is a sidecar plus its image,
and a PDF also has its cached first page. Deleting only the note would leave
those behind as orphans nothing links to.

So the confirmation lists **every file** the selection is made of, by name, up
to six of them and then a count. Nothing is deleted outright either — the files
are moved to the trash through Obsidian, so your own *Deleted files* setting
decides whether that means the system bin, the vault's `.trash`, or gone.

A Quick Sketch drawing is one `.svg` and has nothing beside it.

### Tag

One card at a time: **name**, **tags** and a **short note**. Renaming a scan
here renames the sidecar only — the attachment keeps its id-based filename,
which is the whole point of that id.

With several selected, the name and the note are gone: they describe one
capture, and writing the same name onto twenty is not an edit anybody meant to
make. Tags are then **added**, never replaced, because one dialog cannot know
what the other nineteen notes already carry. A scan keeps its `scribble` tag and
an Excalidraw drawing keeps `excalidraw` whatever you do — the second is
load-bearing for that plugin's own file recognition.

The Sketch tab has no tag action: a sidecar has no frontmatter, and its
searchable text (title, sections, sticky notes) lives inside the drawing.

## Reading a scan

Select scans on the Ink tab and press **Read**. The recogniser is the one Quick
Sketch already uses — a program you installed, pointed at the image — so the
setup and its reasoning are on
[Finding a sketch again](/sketch/search/#handwriting).

**The text goes into the note's body**, not into its frontmatter:

```md
Whatever you wrote here yourself is untouched.

%% nexus:ocr %%
## Read from the scan

pick up the connectors
check the datasheet on page 4
%% /nexus:ocr %%
```

A scan you can find with Obsidian's own search is worth far more than one only
this plugin can find, and the body is where Obsidian looks. The two markers are
comments, so they render as nothing.

They also make a second reading safe: it replaces what is between them instead
of stacking a new copy underneath, and it never touches a word you wrote
yourself. Reading a scan that turns out to be illegible removes the section
rather than leaving a stale one.

**A PDF is read from its cached first page**, because that is the only page that
was ever rendered to an image. The result says so — "3 PDFs: first page only" —
instead of quietly reading one page and calling it done.

Progress is shown while it runs, since twenty scans take long enough that
silence reads as a hang, and anything that failed is named at the end.

:::caution[Desktop only]
The recogniser is a program on the machine, and a phone has no shell to run it
in. The button is simply absent there rather than present and failing.
:::

## In the sidebar

Command **Open the capture hub in the sidebar** opens the same hub as a panel.
It is a second view rather than a flag, because Obsidian remembers a leaf by its
type: with one id, a hub in the main area and a hub in the dock could not both
be restored.

The whole view is built for a narrow panel first. The grid fills by available
width and the toolbar collapses to icons based on **its own** width, not the
window's — a narrow panel in a wide window is the normal case, not the
exception.

## On the dashboard

Three cards, added separately from the dashboard's **+** menu: Ink Capture,
Quick Sketch and Chatter. Each is a count, the newest thing, and a door into its
tab of the hub.

A summary and a door, never a gallery — the dashboard is the control room, not
the archive. Three cards and not one with a dropdown, because a vault that only
scans and never speaks should not have to carry two thirds of an empty card.

## The old gallery still opens

The gallery's view id is still registered against the hub, so a workspace saved
before the hub existed opens it instead of reporting "no view of type" — on the
Ink tab. Command **Open the ink gallery** and the Ink Capture ribbon icon do the
same. Each leaf keeps the id it was opened with and saves back unchanged.
