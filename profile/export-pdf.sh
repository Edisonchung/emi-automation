#!/usr/bin/env bash
# Export a .pptx to .pdf with Microsoft PowerPoint for Mac (no LibreOffice needed).
#   bash profile/export-pdf.sh profile/dist/EMI-Automation-Company-Profile-2026.pptx
# The PDF lands next to the .pptx. PowerPoint is sandboxed: input and output must
# be under your home folder (Downloads, Documents, ...); /tmp paths are refused.
# If every open fails with error -9074, PowerPoint is stuck behind a dialog —
# quit it (force-quit if needed) and re-run.
set -euo pipefail
src="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
dst="${src%.pptx}.pdf"
rm -f "$dst"
osascript - "$src" "$dst" "$(basename "$src")" <<'EOF'
on run argv
  set src to POSIX file (item 1 of argv)
  set dst to POSIX file (item 2 of argv)
  set base to item 3 of argv
  with timeout of 180 seconds
    tell application "Microsoft PowerPoint"
      -- Refuse if this deck is already open: exporting would use the in-memory copy
      -- and "close saving no" would throw away any unsaved edits.
      repeat with q in presentations
        if name of q is base then error "'" & base & "' is already open in PowerPoint — close it first"
      end repeat
      open src
      set p to active presentation
      save p in dst as save as PDF
      close p saving no
    end tell
  end timeout
end run
EOF
test -s "$dst" && echo "wrote $dst" || { echo "export failed: no PDF written" >&2; exit 1; }
