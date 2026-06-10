# Exceptional Dental Academy — Website

Static site, ready to deploy on **GitHub + Cloudflare Pages**.

## Files
- `index.html` — Homepage
- `educators.html` — Educators (served at `/educators`)
- `porcelain-veneers.html` — EPV course (served at `/porcelain-veneers`)
- `assets/` — optimised images (long-cached)
- `og-image.jpg`, `favicon.ico`, `favicon.png`, `apple-touch-icon.png`
- `robots.txt`, `sitemap.xml`, `_headers` (caching/security), `404.html`

## Deploy (Cloudflare Pages via GitHub)
1. Create a new GitHub repo and upload **the contents of this folder** (not the folder itself) to the repo root.
2. In Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Build settings: **Framework preset: None**, **Build command: (leave blank)**, **Build output directory: `/`**.
4. Deploy. Then add your custom domain **exceptionaldentalacademy.com** under the project's **Custom domains** tab and follow the DNS prompts.

## Notes
- **Meta Pixel** `996591033040692` is installed site-wide (PageView), with **Lead** on newsletter signup and **InitiateCheckout** on Eventbrite booking clicks.
- **Book a Seat** buttons scroll to the on-page course list; individual cohort cards still link out to Eventbrite to complete booking.
- SEO: titles, meta descriptions, canonical, Open Graph, Twitter cards, JSON-LD (Organization + Course) on every page.
- After go-live: submit `sitemap.xml` in Google Search Console, and verify the domain in Meta Events Manager.
