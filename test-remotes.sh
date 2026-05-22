#!/bin/sh
# Opens a local preview of all remote control templates for visual testing.
# Click any button to see its ID. Press Ctrl+C to stop.

PORT=8111
DIR="$(cd "$(dirname "$0")/dist" && pwd)"

echo "Serving remotes at http://localhost:$PORT/test-remotes.html"
echo "Press Ctrl+C to stop."

open "http://localhost:$PORT/test-remotes.html" 2>/dev/null || xdg-open "http://localhost:$PORT/test-remotes.html" 2>/dev/null
cd "$DIR" && python3 -m http.server "$PORT"
