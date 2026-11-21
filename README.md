# Kalid Hassen Yasin — portfolio (3D Orbit + Classic view)

Static site. Deploy the whole folder to Netlify or GitHub Pages as-is (no build step).

- `index.html` — 3D Orbit view (opens first). Content lives in `assets/js/data.js`.
- `classic.html` — Classic view (the original site design). Plain HTML: edit it directly.
  When you add a paper/map/job, add it to BOTH `data.js` and `classic.html`.
- Map Gallery: images in `assets/maps/` (full-size + `thumb_` versions).
- `assets/js/orbit.js` is the minified 3D engine (three.js bundled). Don't edit by hand.
- Deep links: `index.html#maps`, `index.html#publications`, `index.html#sheet-12`.
- Credits: Earth imagery NASA Blue Marble / Black Marble (public domain) via the three-globe package;
  icons Font Awesome Free (CC BY 4.0); country outlines Natural Earth (public domain).
  The Milky Way sky and Moon textures are generated.
