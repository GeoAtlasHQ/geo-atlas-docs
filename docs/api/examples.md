# Examples

Reference examples live under `packages/examples/`. They are documentation snippets — not standalone runnable apps for framework examples.

## Core (Node.js / tsx)

| Example | Path | Description |
|---------|------|-------------|
| Basic | `packages/examples/basic/` | Init + search |
| Search | `packages/examples/search/` | Text search |
| Spatial | `packages/examples/spatial/` | Point-in-polygon |
| Offline | `packages/examples/offline/` | Pinned local bundle |

Run from monorepo root after `pnpm build`:

```bash
export GEOATLAS_DATASET=./path/to/dataset
pnpm exec tsx packages/examples/basic/index.ts
pnpm exec tsx packages/examples/search/index.ts
pnpm exec tsx packages/examples/spatial/index.ts
pnpm exec tsx packages/examples/offline/index.ts
```

## React

| Example | Path | Description |
|---------|------|-------------|
| Basic | `packages/examples/react-basic/` | Provider + useSearch |
| Search | `packages/examples/react-search/` | Reactive search input |
| Query | `packages/examples/react-query/` | Spatial bbox query |
| Place | `packages/examples/react-place/` | Place, context, hierarchy |

Import pattern:

```tsx
import { GeoAtlasProvider, useSearch } from '@geoatlas/react';
```

## Angular

| Example | Path | Description |
|---------|------|-------------|
| Basic | `packages/examples/angular-basic/` | provideGeoAtlas + search |
| Search | `packages/examples/angular-search/` | Signal-driven search |
| Query | `packages/examples/angular-query/` | Spatial bbox query |
| Place | `packages/examples/angular-place/` | Place, context, hierarchy |

Import pattern:

```typescript
import { GeoAtlasService, provideGeoAtlas } from '@geoatlas/angular';
```

## Dataset requirement

All examples assume a GeoAtlas dataset bundle with `manifest.json`. Point `dataset` at a local path or CDN URL. The SDK does not ship datasets — see the [geo-datasets](https://github.com/GeoAtlasHQ/geo-datasets) repository.
