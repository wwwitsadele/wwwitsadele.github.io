# Project Roadmap & Ideas — itsadele.com

## Current Status (Implemented)

### Core Features
- **4-tab glass card UI**: Home, About Me, Photos, Contact
- **Home tab**: Left-aligned portrait photo with right-edge fade mask, right-side time-aware greeting + random tagline
- **About Me tab**: Full professional bio with sections (Experience, Education, Skills, Interests)
- **Photos tab**: 8 local cherry blossom images (`pictures/picture1–8.jpeg`) in responsive grid
- **Contact tab**: Form submitting to `api.staticforms.dev` (access key `sf_5fca25ccddeffa162ae7e780`)
- **Tabs**: Left-aligned with collapse/expand animation (max-height + opacity)

### Visual Effects
- **Falling blossoms**: 8 max on screen, spawn every 1.5s, 20–35s fall duration, drift toward cursor (wind effect), vanish on mouseover
- **Cursor blossom trail**: Pastel coloured dots following mouse, fade out
- **Background**: Animated pastel gradient (`#d8b4e2` → `#a7d7f6` → `#f6d1e7`)
- **Glass panel**: `rgba(0,0,0,0.28)` backdrop-filter blur 12px, width 960px (max 95vw), centered vertically, height locked to Home tab content
- **Scroll area**: Hidden scrollbar, rounded corners (12px), top/bottom gradient fade indicators
- **Inline blossom icon**: `blossom-icon.svg` replaces ✨ in headings

### LinkedIn Bio Link
- **Location**: Navigation bar as a tab-style link (`index.html:231`)
- **URL**: `https://www.linkedin.com/in/adelehattingh`
- **Behaviour**: Opens in new tab (`target="_blank" rel="noopener"`)
- **Note**: Consider adding a second mention in Home tab content or About Me for visibility

### Technical
- **No build step** — static files served via GitHub Pages from `main`
- **Custom domain**: `itsadele.com` (CNAME + HTTPS enforced)
- **Cache busting**: CSS query `?v=4`
- **Assets**:
  - `blom.png` — falling blossom sprite (65×70)
  - `blossom-icon.svg` — inline vector blossom (656 B)
  - `pictures/me.jpeg` — portrait (500×1151, 49 KB)
  - `pictures/picture1–8.jpeg` — photo grid
  - `favicon/` — full favicon set generated from `blossom-icon.svg`
- **Scripts**: `blossom.js` (shared blossom/wind/cursor logic)

---

## Ideas / Future Enhancements

### High Priority
| Idea | Description |
|------|-------------|
| LinkedIn mention in Home/About | Add "Connect on LinkedIn" link/button in Home tagline area or About Me footer for discoverability |
| Lightbox on photo click | Click any grid image → full-screen modal with caption/nav |
| SEO / social meta tags | Open Graph, Twitter Card, JSON-LD Person schema for better sharing previews |
| Analytics (privacy-friendly) | Plausible, GoatCounter, or Umami — no cookies, GDPR-compliant |
| Resume / CV download | Add "Download CV" button in About Me (PDF hosted in repo) |

### Medium Priority
| Idea | Description |
|------|-------------|
| Spotify / playlist embed | "Currently listening" or curated playlist section |
| Guestbook / testimonials | Simple form + display (could reuse staticforms) |
| Keyboard shortcuts | `1–4` to switch tabs, `Esc` to close lightbox |
| Reduced motion toggle | Respect `prefers-reduced-motion` for blossoms/trail/gradient |
| PWA / offline support | Service worker + manifest for installable experience |
| Dark/light theme toggle | Currently dark-only; add light variant with pastel palette |
| Performance audit | Lighthouse CI in GitHub Actions |

### Low Priority / Nice-to-Have
| Idea | Description |
|------|-------------|
| Blog / micro-posts section | Static Markdown files rendered to HTML (Eleventy/Astro if build step added) |
| Email newsletter signup | Buttondown/ConvertKit embed in Contact or footer |
| Interactive skill tags | Filter About Me skills by category |
| Parallax scroll on Home photo | Subtle depth effect on scroll |
| Animated tagline typewriter | Instead of instant swap |
| Easter egg | Konami code → special blossom burst |

---

## Completed / Done

- [x] Glass card with 4 tabs
- [x] Falling blossoms + wind + cursor trail
- [x] Time-aware greeting + random taglines
- [x] Photo grid (local images, sequential naming)
- [x] Contact form (staticforms)
- [x] LinkedIn link in nav
- [x] Scroll fade indicators
- [x] Tab collapse/expand animation
- [x] Blossom hover-to-vanish
- [x] Favicon set from vector blossom
- [x] Custom domain + HTTPS
- [x] Cache-busting versioning
- [x] AGENTS.md context file
- [x] README.md documentation

---

## Reference Links

- **Live site**: https://itsadele.com
- **GitHub repo**: https://github.com/wwwitsadele/wwwitsadele.github.io
- **LinkedIn**: https://www.linkedin.com/in/adelehattingh
- **Contact form endpoint**: https://api.staticforms.dev/submit
- **Blossom icon source**: `blossom-icon.svg` (inline vector)
- **Deployment**: `git push origin main` → GitHub Pages auto-deploy

---

## Notes for Next Session

- Keep zero-build philosophy unless a feature demands it
- All assets in repo (no external CDN dependencies for critical path)
- Mobile-first: test at 375px, 768px, 1440px
- Accessibility: maintain contrast, focus states, semantic HTML
- Performance: target <100 KB total JS/CSS, lazy-load images