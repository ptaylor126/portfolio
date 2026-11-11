# Loupe case study video — source

The video is built from index.html: a recreation of Loupe's screens (colours, sizes
and spacing from Theme.swift and DESIGN_SYSTEM.md) driven by a timeline in render(t).
Descriptions, tags and confidence scores are Loupe's real output for the photos in img/.

Render (needs Python Playwright, Chrome and ffmpeg):
  python3 rend.py 0 3.4 s1 & python3 rend.py 3.4 9.7 s2 & python3 rend.py 9.7 13.2 s3 &
  python3 rend.py 13.2 23.9 s4 & python3 rend.py 23.9 31.6 s5 & python3 rend.py 31.6 35.6 s6 & wait
  ffmpeg -f concat -safe 0 -i list.txt -c copy -movflags +faststart loupe-demo.mp4

Open items (2026-11-10):
- Done (2026-11-11): Type a tag into the floating bar before approving the three photos.
- Swap two photos (Paul to choose), re-run them in Loupe, update the data object D in index.html.
