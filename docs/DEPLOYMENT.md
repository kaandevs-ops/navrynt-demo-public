# Static demo hosting

Live demo: https://kaandevs-ops.github.io/navrynt-demo-public/

Full-product recordings: https://kaandevs-ops.github.io/navrynt-demo-public/#proof

GitHub Pages serves the `main` branch from the repository root. `.nojekyll` disables Jekyll processing; no build, package installation, model service or application backend is needed. All application asset URLs are relative so the demo works below its repository path.

The separate validation workflow checks files, static boundaries, original recordings and demo-media checksums on pushes and pull requests. Hosting is GitHub's branch-based Pages deployment. It does not start NAVRYNT's private full-application services.

The Full Product section plays historical files only. No API keys, models, research datasets, signing tools or personal galleries belong in this public site.

For local preview:

```bash
python3 scripts/validate.py
python3 -m http.server 4173 --bind 127.0.0.1
```
