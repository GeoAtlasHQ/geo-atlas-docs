# SDK

**Packages:** `@geoatlas/sdk` (core) · `@geoatlas/react` · `@geoatlas/angular`  
**Repo:** [GeoAtlasHQ/geoatlas-sdk](https://github.com/GeoAtlasHQ/geoatlas-sdk)  
**Alpha:** `0.1.0-alpha.2` (git tag `v0.1.0-alpha.2`)

## Capabilities (alpha)

| Area | API surface |
| ---- | ----------- |
| Init / dataset | `createGeoAtlas`, `init()`, CDN helpers |
| Search | `search(text, options)` · React `useSearch` |
| Query | place / spatial queries · `useQuery` |
| Places | `getPlace`, parents/children, context |
| Classification | registry + zone PIP (Phase G) |
| Point intelligence | `intelligence.resolvePoint(lat, lon)` |
| Notable / famous | `places.famous`, `nearbyFamous` |

## CDN dataset default

```ts
import {
  DEFAULT_AZ_CDN_DATASET_URL,
  DEFAULT_AZ_DATASET_VERSION,
  buildGeoAtlasCdnDatasetUrl,
} from '@geoatlas/sdk';

DEFAULT_AZ_DATASET_VERSION; // '1.1.0'
DEFAULT_AZ_CDN_DATASET_URL; // GitHub raw …/az/v1.1.0/datasets (jsDelivr 403 on large indexes)
```

## Point intelligence (map click)

```ts
const result = await geoatlas.intelligence.resolvePoint(40.4093, 49.8672, {
  includeNotable: true,
  includeNearbyNotable: true,
});

result.administrativeContext.deepest;
result.entity;
result.classifications.all;
result.classificationZones;
result.notablePlace;
```

## Browser note

Core uses Web-friendly SHA-256 (`@noble/hashes`) and `DecompressionStream` for gzip when available. Prefer `https://` dataset roots in the browser.

## API reference (this site)

- [Getting started](/api/getting-started)
- [Core API](/api/core)
- [React API](/api/react)
- [Angular API](/api/angular)
- [Examples](/api/examples)
- [FAQ](/api/faq)

Mirrored from `geoatlas-sdk/docs` (DOCS-03). Source of truth for package docs remains the SDK repo until npm publish.