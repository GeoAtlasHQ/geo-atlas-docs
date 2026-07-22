# Quickstart

Get search running against the published Azerbaijan dataset.

## Prerequisites

- Node 22+
- pnpm 9 (recommended)

## Install (when npm is available)

```bash
pnpm add @geoatlas/sdk
```

Until npm publish, use the [geoatlas-sdk](https://github.com/GeoAtlasHQ/geoatlas-sdk) monorepo (`packages/core`) or the [customer demo](https://github.com/GeoAtlasHQ/geo-atlas-customer) which links via `file:`.

## Minimal Node / script usage

```ts
import { createGeoAtlas, DEFAULT_AZ_CDN_DATASET_URL } from '@geoatlas/sdk';

const geoatlas = createGeoAtlas({
  dataset: DEFAULT_AZ_CDN_DATASET_URL,
  iso2: 'AZ',
});

await geoatlas.init();
const results = await geoatlas.search('Baku', { limit: 5 });
console.log(results);
```

## React

```tsx
import { GeoAtlasProvider, useSearch } from '@geoatlas/react';
import { DEFAULT_AZ_CDN_DATASET_URL } from '@geoatlas/sdk';

function SearchDemo() {
  const { data, loading } = useSearch('Baku', { limit: 5 });
  if (loading) return <p>Searching…</p>;
  return (
    <ul>
      {data?.map((r) => (
        <li key={r.id}>{r.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <GeoAtlasProvider options={{ dataset: DEFAULT_AZ_CDN_DATASET_URL, iso2: 'AZ' }}>
      <SearchDemo />
    </GeoAtlasProvider>
  );
}
```

## Pins (2026-07)

| Artifact | Version |
| -------- | ------- |
| Dataset | `az/v1.1.0` |
| SDK git tag | `v0.1.0-alpha.2` (+ browser I/O on `master`) |
| Customer demo | [geo-atlas-customer](https://github.com/GeoAtlasHQ/geo-atlas-customer) |

## Next

- [SDK guide](./sdk) — search, point intelligence, famous places  
- [Datasets](./datasets) — CDN layout and `latest.json`  
- [Customer demo](https://geoatlashq.github.io/geo-atlas-customer/) — map click → `resolvePoint`
