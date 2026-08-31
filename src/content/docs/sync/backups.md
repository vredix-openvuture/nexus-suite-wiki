---
title: Backups
description: A daily archive on the server, and how many are kept.
sidebar:
  order: 4
---

One zip a day into `_backups` on the server, taken after the first sync of the
day.

| Setting | Default |
|---|---|
| Daily backup | on |
| Keep | 30 |

**Back up now** does not wait for the daily one.

## Naming and rotation

```
My Vault 2026-08-31.zip
```

The date is in the name and sorts with it, which is what makes the rotation a
one-liner: sort the names, delete everything past the number you keep. A backup
that will not delete is not worth failing the run over, so a failure there is
ignored.

## The archive

The ZIP writer is in the plugin (`lib/zip.js`) rather than a dependency, for the
same reason the PDF writer is: it has to stay one bundled file that also runs on
a phone, and the format needs about a hundred lines — the local header, the
central directory and the record that says where that starts.

- Compression is `deflate-raw` through `CompressionStream`, which is exactly
  what ZIP wants. Where a runtime lacks it the entries are **stored** instead:
  the archive is bigger, not broken.
- A file that grows when compressed is stored rather than deflated, which is the
  normal outcome for anything already compressed.
- File names are UTF-8 with the language-encoding flag set, so an umlaut in a
  path survives.
- Every entry carries a CRC-32, and unzippers check it.

The backup contains what the sync contains: the same exclusion rules apply, so a
folder you told it never to sync is not in the archive either.
