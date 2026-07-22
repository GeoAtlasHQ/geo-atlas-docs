# Getting Started

## Install

```bash
npm install @geoatlas/sdk
# or
pnpm add @geoatlas/sdk
```

**Requirements:** Node.js ≥ 22

## Basic usage

```typescript
import { createGeoAtlas } from '@geoatlas/sdk';

const geoatlas = createGeoAtlas({
  dataset: './dataset',
  iso2: 'AZ',
  version: '1.0.0',
});

await geoatlas.init();

const results = await geoatlas.search('Baku');
const airports = await geoatlas.query({ type: 'place', name: 'Airport' });
```

## CDN dataset

```typescript
const geoatlas = createGeoAtlas({
  dataset: 'https://cdn.example.com/az/v1.0.0',
  iso2: 'AZ',
  version: '1.0.0',
  fetch: globalThis.fetch,
});
```

Pin `version` in production to reject accidental dataset upgrades.

## React

```bash
npm install @geoatlas/react @geoatlas/sdk
```

```tsx
import { GeoAtlasProvider, useSearch } from '@geoatlas/react';

function App() {
  return (
    <GeoAtlasProvider options={{ dataset: './dataset', iso2: 'AZ' }}>
      <SearchDemo />
    </GeoAtlasProvider>
  );
}

function SearchDemo() {
  const { data, loading } = useSearch('Baku');
  // ...
}
```

See [packages/react/README.md](https://github.com/GeoAtlasHQ/geoatlas-sdk/tree/master/packages/react) and [React API reference](./react).

## Angular

```bash
npm install @geoatlas/angular @geoatlas/sdk rxjs
```

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { GeoAtlasService, provideGeoAtlas } from '@geoatlas/angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideGeoAtlas({
      options: { dataset: './dataset', iso2: 'AZ' },
      autoInit: true,
    }),
  ],
});
```

See [packages/angular/README.md](https://github.com/GeoAtlasHQ/geoatlas-sdk/tree/master/packages/angular) and [Angular API reference](./angular).

## Next steps

- [Core API reference](./core)
- [React API reference](./react)
- [Angular API reference](./angular)
- [Examples](./examples.md)
- [FAQ](./faq.md)
- [Architecture](https://github.com/GeoAtlasHQ/geoatlas-sdk/blob/master/docs/architecture.md)
