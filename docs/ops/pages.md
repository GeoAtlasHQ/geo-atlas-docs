# Enable GitHub Pages (one-time)

Workflows are already in the repo (`.github/workflows/pages.yml`). Pages must be turned on in the GitHub UI (API enable returned 403 for the current token).

## Steps

1. Open **Settings → Pages**
2. **Build and deployment → Source:** GitHub Actions
3. Save, then re-run the **Deploy GitHub Pages** workflow (or push to `master`)

## URLs

| Repo | Expected URL |
| ---- | ------------ |
| `geo-atlas-customer` | https://geoatlashq.github.io/geo-atlas-customer/ |
| `geo-atlas-docs` | https://geoatlashq.github.io/geo-atlas-docs/ |
