# Five-plane model

GeoAtlas separates concerns so each repo has one job.

| Plane | Owner repo | Responsibility |
| ----- | ---------- | -------------- |
| **Build** | `geo-data-generator` | OSM ingest, enrich, index, assemble, publish |
| **Data** | `geo-datasets` | Immutable versioned artifacts + CDN |
| **Intelligence** | `geo-atlas-sdk` | Client runtime: search, spatial, classification, `resolvePoint` |
| **Application** | `geo-atlas-customer` | UI only — calls SDK, no geo logic |
| **Service** | `geo-atlas-api` (+ search/routing/cloud) | FUTURE — HTTP APIs, SaaS |

## Hard rules

1. **Generator builds; SDK thinks** — no customer app reimplements PIP, search, or ranking.
2. **CDN contract is frozen** during migration — `latest.json` / checksum paths stay stable.
3. **Customer apps pin SDK + dataset semver** — no floating “latest” in production without a channel policy.

## Data flow (today)

1. Generator rebuilds AZ → writes bundle  
2. Promote to `geo-datasets` (`az/v1.1.0`, `latest.json`)  
3. SDK loads `…/datasets` over HTTPS (or local path in Node)  
4. Customer demo / apps call `search` / `resolvePoint`

## Related

- [Vision](./vision)
- [Datasets guide](../guide/datasets)
- [SDK guide](../guide/sdk)
