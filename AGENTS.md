# Repo
- GitHub: `github.com/wwwitsadele/wwwitsadele.github.io`
- Pages: `https://wwwitsadele.github.io` (custom domain: `itsadele.com`)
- Auth: `gh` CLI authenticated as `wwwitsadele` (token stored in system keyring)
- Default branch: `main`

# Project
- Static personal landing page for Adéle
- Glass card with tabs: Home, About Me, Photos, Contact
- Features: falling blossoms, cursor trail, wind effect, time-aware greeting, random taglines, visitor counter, photo grid, contact form (staticforms.dev)
- No build step — deploy by pushing to `main`

# Key files
- `index.html` — main landing page
- `style.css` — shared styles across all pages
- `blossom.js` — shared blossom/wind logic for all pages
- `blom.png` — blossom image for falling animation
- `favicon/` — favicon set (PNG, SVG, ICO, web manifest)
- `CNAME` — custom domain (`itsadele.com`)

# Notes
- Blossoms capped at 8 on screen, spawn every 1.5s
- Wind effect: blossoms blow toward mouse cursor
- 75% of blossoms fall behind the glass panel, 25% in front
- Font: Segoe UI, white text with soft text-shadow
- Background: animated pastel gradient (#d8b4e2, #a7d7f6, #f6d1e7)
