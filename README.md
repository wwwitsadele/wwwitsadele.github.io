# Adéle

Personal landing page for Adéle — pastel gradient, glass card, falling blossoms.

## Structure

```
itsadele/
├── index.html          # Main landing page
├── test.html           # Test page
├── style.css           # Shared styles across all pages
├── blossom.js          # Shared blossom/wind/cursor logic
├── blom.png            # Blossom image
├── favicon/            # Favicon set
├── CNAME              # Custom domain (itsadele.com)
└── AGENTS.md          # AI project context
```

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
- Time-aware greeting, random taglines, visitor counter (index.html only)
