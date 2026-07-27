# Repo
- GitHub: `github.com/wwwitsadele/wwwitsadele.github.io`
- Pages: `https://wwwitsadele.github.io` (custom domain: `itsadele.com`)
- Auth: `gh` CLI authenticated as `wwwitsadele` (token stored in system keyring)
- Default branch: `main`

# Project
- Static personal landing page for Adéle
- Glass card with tabs: Home, About Me, Contact
- Features: falling blossoms, cursor trail, typewriter tagline, time-aware greeting, visitor counter, roll-up tab animation
- No build step — deploy by pushing to `main`

# Key files
- `index.html` — single-page site, all CSS/JS inline
- `blom.png` — blossom image for falling animation
- `favicon/` — favicon set (PNG, SVG, ICO, web manifest)
- `CNAME` — custom domain (`itsadele.com`)

# Notes
- Blossoms capped at 8 on screen, spawn every 1.5s
- Wind effect: blossoms drift based on mouse X position
- Font: Segoe UI, white text with soft text-shadow
- Background: animated pastel gradient (#d8b4e2, #a7d7f6, #f6d1e7)
