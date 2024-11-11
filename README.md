# YouTube Time Machine

Generate a static website that mirrors the YouTube viewing experience using your favorite YouTube videos and channels.

## Overview

This project allows you to create a YouTube-like static website from a list of YouTube videos and channels. The generated site maintains the familiar YouTube interface while being completely static and self-hosted.

## Features

- Generate static HTML pages that look and feel like YouTube
- Create channel pages with video listings
- Generate video watch pages with related videos
- Support for playlists and channel sections
- Responsive design matching YouTube's layout
- No server-side components needed - deploy anywhere

## Getting Started

1. Edit `public/videos.txt` and add your YouTube video URLs (one per line)

2. Install prerequisites:
   - [Node.js](https://nodejs.org/)
   - [pnpm](https://pnpm.io/) package manager

3. Build the static site:
   ```bash
   npm run export
   ```

4. Start a local dev server to preview:
   ```bash
   npx serve out
   ```
