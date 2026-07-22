# GeoAtlas React SDK — API Reference

**Package:** `@geoatlas/react` · **Version:** `0.1.0-alpha.1`

Thin React bindings over `@geoatlas/sdk`. All runtime logic lives in the core SDK — this package provides context, lifecycle, and async hooks only.

See also: [Core API](./core) · [Examples](./examples.md#react) · [FAQ](./faq.md)

---

## Installation

```bash
npm install @geoatlas/react @geoatlas/sdk
```

**Peer dependencies:** React ≥ 18

---

## GeoAtlasProvider

Creates a GeoAtlas client, runs `init()`, and exposes state through React context.

```tsx
<GeoAtlasProvider
  options={{ dataset: './dataset', iso2: 'AZ', diagnostics: true }}
  onReady={(client) => console.log('ready', client.dataset)}
  onError={(error) => console.error(error)}
>
  {children}
</GeoAtlasProvider>
```

### GeoAtlasProviderProps

| Prop | Type | Description |
|------|------|-------------|
| `options` | `GeoAtlasOptions` | Passed to `createGeoAtlas()` |
| `children` | `ReactNode` | App tree |
| `client` | `GeoAtlas` | Optional pre-created client (testing) |
| `skipInit` | `boolean` | Skip auto `init()` for pre-initialized clients |
| `onReady` | `(client: GeoAtlas) => void` | Called after successful init |
| `onError` | `(error: Error) => void` | Called when init fails |

---

## useGeoAtlas()

Access the client and provider initialization state.

**Throws** when used outside `GeoAtlasProvider`.

```tsx
const { client, ready, loading, error, dataset, diagnostics } = useGeoAtlas();
```

| Field | Type | Description |
|-------|------|-------------|
| `client` | `GeoAtlas` | Underlying SDK instance |
| `ready` | `boolean` | `true` after successful init |
| `loading` | `boolean` | Init in progress |
| `error` | `Error \| null` | Init failure |
| `dataset` | `DatasetInfo` | Loaded dataset summary |
| `diagnostics` | `GeoAtlasDiagnosticsSnapshot \| null` | When `diagnostics: true` in options |

---

## Data hooks

All data hooks share a common return shape and options.

### Hook return shape (`UseAsyncHookResult<T>`)

| Field | Type | Description |
|-------|------|-------------|
| `data` | `T \| null` | Result data |
| `loading` | `boolean` | Request in progress |
| `error` | `Error \| null` | Request failure |
| `refetch` | `() => void` | Re-run the underlying SDK call |

### Common hook options (`UseAsyncHookOptions`)

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Skip the request when `false` |
| `suspense` | `boolean` | `false` | Throw a promise during loading for Suspense boundaries |

Hooks deduplicate in-flight requests with identical parameters and cancel on unmount.

---

## useSearch(text, options?)

Prefix text search against the dataset search index.

```tsx
const { data, loading, error } = useSearch('Baku', { limit: 10 });
```

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | `string` | Search query — empty string skips the request |
| `options.limit` | `number` | Max results (forwarded to SDK) |
| `options.language` | `string` | Language hint (reserved) |
| `options.enabled` | `boolean` | Override auto-enable behavior |
| `options.suspense` | `boolean` | Enable Suspense mode |

**Returns:** `UseAsyncHookResult<readonly SearchResult[]>`

---

## useQuery(query, options?)

Execute a place name filter or spatial GeoQuery. Pass `null` to skip.

```tsx
const placeQuery = useQuery({ type: 'place', name: 'Airport' });
const bboxQuery = useQuery({
  iso2: 'AZ',
  spatial: { type: 'bbox', bbox: { west: 49.8, south: 40.3, east: 50.0, north: 40.5 } },
});
```

**Returns:** `UseAsyncHookResult<readonly QueryResult[]>`

---

## usePlace(id, options?)

Resolve a place by entity ID. Pass `null` or empty string to skip.

```tsx
const { data: place } = usePlace('geo:node/2117350415');
```

**Returns:** `UseAsyncHookResult<Place | null>`

---

## usePlaceContext(input, options?)

Resolve administrative context for a coordinate. Pass `null` to skip.

```tsx
const { data: context } = usePlaceContext({ lat: 40.4093, lon: 49.8671 });
```

**Returns:** `UseAsyncHookResult<PlaceContext>`

> **Note:** Exported as `usePlaceContext` because `useContext` is reserved by React. Alias: `useGeoAtlasPlaceContext`.

---

## useParents(id, options?) / useChildren(id, options?)

Hierarchy navigation for an entity ID. Pass `null` to skip.

```tsx
const { data: ancestors } = useParents(placeId);
const { data: children } = useChildren(placeId);
```

**Returns:** `UseAsyncHookResult<readonly PlaceRef[]>`

---

## Type exports

```tsx
import type {
  GeoAtlasProviderProps,
  GeoAtlasProviderState,
  UseGeoAtlasResult,
  UseSearchOptions,
  UseSearchResult,
  UseQueryOptions,
  UseQueryResult,
  UsePlaceOptions,
  UsePlaceResult,
  UsePlaceContextOptions,
  UsePlaceContextResult,
  UseParentsOptions,
  UseParentsResult,
  UseChildrenOptions,
  UseChildrenResult,
  UseAsyncHookOptions,
  UseAsyncHookResult,
  GeoAtlasOptions,
  GeoAtlasDiagnosticsSnapshot,
} from '@geoatlas/react';
```

Core types (`SearchResult`, `Place`, `PlaceContext`, `PlaceRef`, `QueryResult`, etc.) are re-exported from `@geoatlas/sdk` — import those from either package.

---

## Alpha limitations

- In-flight request deduplication only — no TTL result cache in React layer
- Framework examples are reference snippets, not runnable standalone apps
- ESM only — use with modern bundlers (Vite, webpack 5, etc.)

See [RELEASE_NOTES_ALPHA.md](https://github.com/GeoAtlasHQ/geoatlas-sdk/blob/master/RELEASE_NOTES_ALPHA.md) for the full alpha scope.
