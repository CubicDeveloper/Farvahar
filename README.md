# Farvahar Studio Website

A fully responsive, single-page-application (SPA) website for Farvahar Studio — an Iranian creative studio.

## Folder Structure

```
farvahar-studio/
├── index.html       ← The entire website (all pages, styles, and JS)
└── README.md        ← This file
```

Everything is in one self-contained `index.html` file for simplicity and portability.

---

## Running Locally

### Option 1 — Open directly (simplest)
Just double-click `index.html` in your file explorer.  
⚠️ YouTube embeds need an internet connection to load.

### Option 2 — Local dev server (recommended)
If you have Node.js installed:
```bash
npx serve .
```
Then open `http://localhost:3000`

Or with Python:
```bash
python -m http.server 8080
```
Then open `http://localhost:8080`

---

## Editing Content

All editable sections are marked with `<!-- EDIT: ... -->` comments in the HTML.

### Key things to update:

| What | Where in the file |
|------|-------------------|
| YouTube video IDs | Search for `dQw4w9WgXcQ` and replace each with your real video ID |
| Project cards (title, description) | Search for `<!-- EDIT: Update card titles` |
| Roadmap items | Inside `#page-future` section |
| Testimonials | Inside the testimonials section |
| Stats (12+, 5K+, etc.) | Inside `.about-stats` |
| Donate / Login links | `href="#"` on `.btn-donate` and `.btn-login` in the header |
| Social media links | Inside `footer-social` div |
| Contact email | `mailto:hello@farvaharsudio.com` |
| Website links | `href="#"` on `.site-link` elements |
| Copyright year | Bottom of the `<footer>` |

---

## Adding Your YouTube Videos

Find each iframe and replace the video ID in the `src` attribute:

```html
<!-- Before -->
src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"

<!-- After (example) -->
src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1"
```

The video ID is the part after `v=` in a regular YouTube URL:
`https://www.youtube.com/watch?v=` **`xxxxxxxxxxx`**

---

## Hosting Options

### Free & Easy
| Platform | Steps |
|----------|-------|
| **Netlify** | Drag & drop the `farvahar-studio/` folder to [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npm i -g vercel` then `vercel` in the folder |
| **GitHub Pages** | Push to a GitHub repo, enable Pages in Settings |
| **Cloudflare Pages** | Connect GitHub repo → auto-deploys |

### Custom Domain
All platforms above support custom domains for free.  
Recommended domain registrar: **Namecheap** or **Cloudflare Registrar**.

---

## Fonts Used
- **Cinzel Decorative** — studio name / display headings
- **Cinzel** — navigation and section headings  
- **Cormorant Garamond** — body text (elegant serif)
- **Inter** — UI elements (meta, tags)

All loaded from Google Fonts — internet connection required.

## Libraries Used
- **GSAP 3.12** + **ScrollTrigger** — scroll animations and parallax
- Both loaded from cdnjs.cloudflare.com CDN

---

## Browser Support
- Chrome / Edge 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Mobile (iOS Safari, Android Chrome) ✅

---

*Made with pride for Farvahar Studio. Ancient Soul, Modern Worlds.*
