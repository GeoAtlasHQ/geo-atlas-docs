# GeoAtlas Docs

Public documentation site for GeoAtlas (**VitePress**).

**Planned Pages URL:** https://geoatlashq.github.io/geo-atlas-docs/

## Local

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

GitHub Pages:

```bash
VITEPRESS_BASE=pages pnpm build
```

## Scope (Phase 13 / P1-02)

| Step | Status |
| ---- | ------ |
| DOCS-01 Site scaffold | ✅ |
| DOCS-02 Architecture ingest | ✅ public summaries (handbook SSOT still operator `docs/`) |
| DOCS-03 SDK API sync | 🟡 links to geoatlas-sdk/docs |
| DOCS-04 Worker as execution entry | ✅ `/ops/priorities` + `/ops/execution` |

## License

MIT — see [LICENSE](./LICENSE).
