#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: $0 <master.mp4> <output-dir>" >&2
  exit 64
fi

MASTER="$1"
OUTDIR="$2"
OUTFILE="$OUTDIR/preview.mp4"

command -v ffmpeg >/dev/null 2>&1 || {
  echo "ffmpeg is required" >&2
  exit 69
}

[[ -f "$MASTER" ]] || {
  echo "master not found: $MASTER" >&2
  exit 66
}

mkdir -p "$OUTDIR"

ffmpeg -y \
  -i "$MASTER" \
  -vf "scale='min(540,iw)':'min(960,ih)':force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2" \
  -r 24 \
  -c:v libx264 \
  -preset veryfast \
  -crf 28 \
  -pix_fmt yuv420p \
  -c:a aac \
  -b:a 96k \
  -movflags +faststart \
  "$OUTFILE"

printf 'preview=%s\n' "$OUTFILE"
