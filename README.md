# AgroR premium company website

Responsive green-and-white startup website for AgroR, with Kisan AI presented as the flagship product concept.

## Files
- `index.html` — page structure, SEO metadata, and favicon references
- `style.css` — responsive layout, branding, cards, animations, and mobile menu styles
- `script.js` — mobile navigation, reveal animations, year, and contact form
- `assets/agroR-logo.png` — website-ready version of your supplied logo
- `assets/favicon.png`, `assets/favicon-32.png`, `assets/apple-touch-icon.png` — favicon/app icon assets

## Preview locally
Open `index.html` in a browser. Alternatively, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Before publishing
1. Replace `hello@agror.in` in `script.js` and the email link in `index.html` with your actual inbox.
2. The contact form opens the visitor's email app. It does not save submissions; use a backend/form provider if you want online submissions.
3. The hero photo and fonts load from external services and need internet access.
4. Kisan AI, live mandi prices, farm management, and procurement are presented as planned focus areas, not live services.
5. Preserve the `assets` folder and relative file paths when uploading to GitHub Pages.

## Git commands
```bash
git add index.html style.css script.js assets README.md
git commit -m "Build AgroR premium company website"
git pull --rebase origin main
git push origin main
```
