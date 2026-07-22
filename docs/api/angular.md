# GeoAtlas Angular SDK — API Reference

**Package:** `@geoatlas/angular` · **Version:** `0.1.0-alpha.1`

Thin Angular bindings over `@geoatlas/sdk`. All runtime logic lives in the core SDK — this package provides DI, Observables, and Signals only.

See also: [Core API](./core) · [Examples](./examples.md#angular) · [FAQ](./faq.md)

---

## Installation

```bash
npm install @geoatlas/angular @geoatlas/sdk rxjs
```

**Peer dependencies:** `@angular/core` ≥ 18, `rxjs` ^7.8

---

## provideGeoAtlas(config)

Standalone provider factory for bootstrap or route-level registration.

```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideGeoAtlas({
      options: { dataset: './dataset', iso2: 'AZ', diagnostics: true },
      autoInit: true,
    }),
  ],
});
```

### GeoAtlasConfig

| Field | Type | Description |
|-------|------|-------------|
| `options` | `GeoAtlasOptions` | Passed to `createGeoAtlas()` |
| `autoInit` | `boolean` | When `true`, runs init via `APP_INITIALIZER` before bootstrap |
| `client` | `GeoAtlas` | Optional pre-built client (testing or advanced usage) |

### Related exports

| Export | Purpose |
|--------|---------|
| `geoAtlasProviders(config)` | Raw `Provider[]` for TestBed or custom setup |
| `geoAtlasInitializer` | `APP_INITIALIZER` factory |
| `GEO_ATLAS_CONFIG` | Injection token for config |

---

## GeoAtlasService

Injectable service wrapping the GeoAtlas client. Inject with `inject(GeoAtlasService)`.

### State signals

| Member | Type | Description |
|--------|------|-------------|
| `ready` | `Signal<boolean>` | `true` after successful init |
| `loading` | `Signal<boolean>` | Init in progress |
| `error` | `Signal<Error \| null>` | Init failure |
| `diagnostics` | `Signal<GeoAtlasDiagnosticsSnapshot \| null>` | When diagnostics enabled |

### Client access

| Member | Type | Description |
|--------|------|-------------|
| `instance` | `GeoAtlas` | Underlying SDK client |
| `dataset` | `DatasetInfo` | Loaded dataset summary |
| `initialize()` | `Promise<void>` | Idempotent init — safe to call multiple times |

---

## Observable APIs

All data methods return **RxJS Observables** and auto-initialize when needed. Concurrent identical requests are deduplicated.

```typescript
const geo = inject(GeoAtlasService);

geo.search('Baku', { limit: 10 }).subscribe((results) => { /* … */ });
geo.query({ type: 'place', name: 'Airport' }).subscribe(/* … */);
geo.place('geo:node/2117350415').subscribe(/* … */);
geo.context({ lat: 40.4093, lon: 49.8671 }).subscribe(/* … */);
geo.parents('geo:node/2117350415').subscribe(/* … */);
geo.children('geo:relation/364110').subscribe(/* … */);
```

| Method | Returns | Description |
|--------|---------|-------------|
| `search(text, options?)` | `Observable<readonly SearchResult[]>` | Prefix text search |
| `query(query)` | `Observable<readonly QueryResult[]>` | Place or spatial query |
| `place(id)` | `Observable<Place \| null>` | Resolve place by ID |
| `context(input)` | `Observable<PlaceContext>` | Administrative context at coordinates |
| `parents(id)` | `Observable<readonly PlaceRef[]>` | Ancestor places |
| `children(id)` | `Observable<readonly PlaceRef[]>` | Direct child places |

Use `AsyncPipe` in templates or `firstValueFrom()` / `lastValueFrom()` in services.

Empty search text returns an empty array without calling the SDK.

---

## Signal APIs

Reactive helpers accept `Signal` inputs and re-fetch when values change. **Must be called within an injection context** (constructor or field initializer).

```typescript
import { signal, computed } from '@angular/core';

const query = signal('Baku');
const searchState = geo.searchSignal(query);
// searchState.data(), searchState.loading(), searchState.error()

const placeId = signal('geo:node/2117350415');
const placeState = geo.placeSignal(placeId);

const coords = computed(() => ({ lat: 40.4093, lon: 49.8671 }));
const contextState = geo.contextSignal(coords);
```

### GeoAtlasSignalState\<T\>

| Member | Type | Description |
|--------|------|-------------|
| `data` | `Signal<T \| null>` | Result data |
| `loading` | `Signal<boolean>` | Request in progress |
| `error` | `Signal<Error \| null>` | Request failure |

| Method | Input | Description |
|--------|-------|-------------|
| `searchSignal(text, options?)` | `Signal<string>` | Reactive search |
| `placeSignal(id)` | `Signal<string \| null>` | Reactive place lookup |
| `contextSignal(input)` | `Signal<PlaceContextInput \| null>` | Reactive context lookup |

---

## Initialization patterns

### Automatic (recommended)

```typescript
provideGeoAtlas({
  options: { dataset: './dataset', iso2: 'AZ' },
  autoInit: true,
});
```

### Manual

```typescript
const geo = inject(GeoAtlasService);
await geo.initialize();
```

Observable APIs also trigger lazy init on first subscribe when `autoInit` is not set.

---

## assertGeoAtlasReady(service)

Template/guard helper — throws `NotReadyError` when the service is not initialized.

```typescript
assertGeoAtlasReady(geo);
// safe to use geo.instance or Observable APIs synchronously
```

---

## Type exports

```typescript
import type {
  GeoAtlasConfig,
  GeoAtlasSignalState,
  GeoAtlasOptions,
  GeoAtlasDiagnosticsSnapshot,
  GeoAtlas,
} from '@geoatlas/angular';
```

Core types (`SearchResult`, `Place`, `PlaceContext`, `PlaceRef`, `QueryResult`, `PlaceQuery`, `GeoQuery`, etc.) are available from `@geoatlas/sdk`.

---

## Alpha limitations

- Standalone APIs only — no NgModule wrapper helper
- In-flight deduplication only — no TTL result cache in Angular layer
- Framework examples are reference snippets, not runnable standalone apps
- ESM only

See [RELEASE_NOTES_ALPHA.md](https://github.com/GeoAtlasHQ/geoatlas-sdk/blob/master/RELEASE_NOTES_ALPHA.md) for the full alpha scope.
