# Adéle

Personal landing page for Adéle — pastel gradient, glass card, falling blossoms.

## Structure

```
itsadele/
├── index.html          # Main landing page
├── style.css           # Shared styles across all pages
├── blossom.js          # Shared blossom/wind/cursor logic
├── blom.png            # Blossom image
├── favicon/            # Favicon set
├── CNAME              # Custom domain (itsadele.com)
└── AGENTS.md          # AI project context
```

## Pages (tabs in index.html)

- **Home** — greeting, random tagline, visitor counter
- **About Me** — bio
- **Photos** — blossom gallery (8 Pexels images)
- **Contact** — form via staticforms.dev

## Adding a new page

Include shared assets and use the standard layout:

```html
<link rel="stylesheet" href="style.css">
<script src="blossom.js"></script>

<div class="card">
  <div class="scroll-area">
    <!-- your content here -->
  </div>
</div>
```

## Deployment

Static site — push to `main` on GitHub. No build step.

## Features

- Animated pastel gradient background
- Glass card with internal scroll
- Falling blossoms (wind follows cursor, 75% behind glass)
- Cursor blossom trail
- Time-aware greeting, random taglines, visitor counter (Home tab)
- Photo gallery (Photos tab)
- Contact form (Contact tab) — submits to staticforms.dev