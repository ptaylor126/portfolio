# Portfolio

## Live site

The live site is the static HTML files in the repo root (`index.html`, `about.html`, `mealmatch.html`, etc.).

The Next.js app in `src/` is old and not used. Don't edit it, and don't treat it as the source of the site.

## Local preview

Preview the site with a static file server from the repo root:

```sh
python3 -m http.server 8777
```

Then open http://localhost:8777/ (or a specific page, such as http://localhost:8777/mealmatch.html).

Don't use `npm run dev`. That starts the unused Next.js app, not the live site.
