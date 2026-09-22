# Radix | Taxi, Tours and Auto Rentals (Grenada)

Demo website for Wayne Radix, designed and built by [Savvy Tech](https://ghosten22.github.io/savvy-tech/).

## Files

- `index.html`: the page
- `css/styles.css`: all styling (colours are set as variables at the top)
- `js/main.js`: booking tabs, fleet filter, mobile menu and the WhatsApp booking link
- `.nojekyll`: tells GitHub Pages to serve the files as they are
- `robots.txt` and `sitemap.xml`: help Google find and index the site

## Publish on GitHub Pages

1. In the `projects473` GitHub account, create a repository named `wjr`.
2. Upload everything in this folder to the root of the repository, including `.nojekyll`.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. After a minute or two the site is live at `https://projects473.github.io/wjr/`.

## Before going live

- Replace `1473XXXXXXX` with Wayne's WhatsApp number (in `index.html` and `js/main.js`).
- Fill in the bracketed placeholders: rates, tour durations, reviews and guest names.
- Swap the Unsplash stock photos for photos of Wayne's own vehicles and tours.

## SEO checklist

The site includes search and sharing tags, local business data for Google (schema.org), a sitemap and robots.txt. Before launch:

- The site address is set to `https://projects473.github.io/wjr/`. If it moves to a custom domain later, replace that address in `index.html`, `robots.txt` and `sitemap.xml`.
- Replace the phone placeholders `+1-473-XXX-XXXX`, `+1473XXXXXXX` and `[number]` in `index.html`.
- Add Wayne's street address, opening hours and social media links to the structured data block in `index.html` once confirmed.
- Test the page with Google's Rich Results Test: https://search.google.com/test/rich-results
- Add the site to Google Search Console and submit `sitemap.xml`.
- Set up Wayne's Google Business Profile and link it to the site. This matters most for local search.

## Photo credits

Stock photos are loaded from [Unsplash](https://unsplash.com) and are free to use under the Unsplash License.
