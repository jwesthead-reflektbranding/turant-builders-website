# Turant Builders — 3D Premium Site

The premium editorial build with one attention-grabbing addition: a real-time
3D hero. A gold hairline wireframe of a sprawling custom estate — two-story
main volume, front-facing cross gable with a tall mullioned feature window
carrying the mark's apex notch and collar tie, covered entry with sidelights,
twin dormers, masonry chimney, single-story great room with a full window
wall, and a set-back garage wing — draws itself line by line over the first
~3 seconds, then floats over a faint surveyed-lot grid with drifting gold
dust. On desktop the drawing fades under the headline column and runs at
full strength to the right. On desktop it responds to the
cursor (gentle parallax) and turns slightly as you scroll. The founder's
mark panel also tilts in 3D under the cursor.

Everything else follows the premium build: brand palette and type system,
proof-first copy, schema, SEO, and the mailto form. A full-scale brand band
sits after the founder section — the complete stacked lockup (tagline
included) at up to 540px wide between fading gold rules. At small scale the
tagline is illegible, so the nav and footer use tagline-free crops of the
horizontal and stacked lockups; the tagline still appears in the brand band,
the founder mark panel, and the footer text line.

The 3D is pure code (three.js r128, vendored inline) — no generated imagery,
no external assets, still one self-contained file (~650KB raw, ~180KB
gzipped over the wire).

## Fallbacks

- `prefers-reduced-motion` or no WebGL: the static gold gable hairline SVG
  shows instead; the page works identically.
- Mobile: the house renders centered behind the copy with lighter particle
  count and no cursor parallax.

## Files

- `index.html` — the entire site, self-contained.
- `favicon.png`, `og-image.jpg`, `robots.txt`, `sitemap.xml`, `404.html` —
  deploy alongside index.html.
- `preview/` — screenshots for review; do not deploy.

## Deploying

GitHub Desktop → push → Render Static Site (blank build command, publish
directory = repo root) → Namecheap DNS. No build step. Enable gzip/Brotli
(Render does this by default) — the vendored three.js compresses well.

## Client action list (unchanged)

1. Real photo of Keith Grant (top priority).
2. Project photography as homes finish.
3. Domain mailbox to replace Gmail.
4. License/insurance footer line.
5. Google Business Profile matching the footer NAP.
6. Formspree swap when ready to capture leads.
