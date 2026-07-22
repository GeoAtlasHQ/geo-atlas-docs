# Architecture overview

GeoAtlas is a **multi-repo** Location Intelligence platform.

```
geo-data-generator → geo-datasets → geo-atlas-sdk → geo-atlas-customer
                                              ↘ (future) geo-atlas-api → search / routing / cloud
```

| Plane | Repo | Role |
| ----- | ---- | ---- |
| Build | `geo-data-generator` | OSM ETL → versioned bundles |
| Data | `geo-datasets` | Immutable published artifacts + CDN |
| Intelligence | `geo-atlas-sdk` | Client runtime (search, PI, classification) |
| Application | `geo-atlas-customer` | UI only — no geo logic in the app |
| Docs | `geo-atlas-docs` | This site |

**Principle:** Generator builds; SDK thinks. Customer apps call the SDK and render results.

## Status labels

- **CURRENT** — implemented in shipping repos  
- **TARGET** — approved design  
- **FUTURE** — roadmap (API, cloud, …)

## Deep handbook

The full architecture handbook (ADRs, Phase G/H, place intelligence) is maintained as SSOT under the platform `docs/architecture/` tree (operator workspace). This public site carries **consumer-facing summaries** and links to GitHub for code-level detail.

See also: [Repository map](./repos).
