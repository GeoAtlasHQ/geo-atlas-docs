# GeoAtlas SDK — API Reference

**Package:** `@geoatlas/sdk` · **Version:** `0.1.0-alpha.1`

Framework bindings:

- [React SDK API](./react) — `@geoatlas/react`
- [Angular SDK API](./angular) — `@geoatlas/angular`

## createGeoAtlas(options)

Creates a GeoAtlas client. Call `await geoatlas.init()` before any other method.

### GeoAtlasOptions

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `dataset` | `string` | **required** | Local path or CDN URL to dataset bundle |
| `iso2` | `string` | `'AZ'` | ISO 3166-1 alpha-2 country code |
| `version` | `string` | — | Pin dataset semver (recommended for production) |
| `verifyChecksums` | `boolean` | `true` | Verify SHA-256 checksums from manifest |
| `cache.maxSize` | `number` | `128` | LRU cache size per namespace |
| `cache.defaultTtlMs` | `number` | — | Default cache entry TTL in ms |
| `diagnostics` | `boolean \| { enabled: boolean }` | `false` | Enable runtime metrics collection |
| `fetch` | `FetchLike` | `globalThis.fetch` | Custom fetch for remote datasets |
| `logger` | `GeoAtlasLogger` | silent | Optional debug/info/warn/error logger |

---

## GeoAtlas

### init(): Promise\<void\>

Load and validate `manifest.json`. **Required** before search, query, or place methods.

### search(text, options?): Promise\<SearchResult[]\>

Prefix text search against the dataset search index.

**SearchOptions:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `limit` | `number` | `10` | Maximum results |
| `language` | `string` | — | Language hint (reserved) |

**SearchResult:**

```typescript
interface SearchResult {
  id: string;
  name: string;
  score: number;       // 0–1, higher is better
  type?: string;
  slug?: string;
  entityType?: string;
  lat?: number | null;
  lon?: number | null;
  depth?: number;
  path?: readonly string[];
}
```

### query(query): Promise\<QueryResult[]\>

Execute a place name filter or spatial GeoQuery.

**PlaceQuery:**

```typescript
{ type: 'place'; name: string; category?: string }
```

**GeoQuery:**

```typescript
interface GeoQuery {
  iso2: string;
  spatial: PolygonSpatial | RadiusSpatial | BboxSpatial;
  filters?: FilterNode[];
  sort?: { field: 'score' | 'name' | 'distance'; direction?: 'asc' | 'desc' };
  pagination?: { offset?: number; limit?: number };
}
```

**QueryResult:**

```typescript
{ id: string; name: string; type: string }
```

### place(id): Promise\<Place | null\>

Resolve a place by entity ID. Returns `null` when not found.

### context(input): Promise\<PlaceContext\>

Resolve administrative context for a coordinate.

```typescript
{ lat: number; lon: number }
```

### parents(id): Promise\<PlaceRef[]\>

Return ancestor places (country → region → city chain).

### children(id): Promise\<PlaceRef[]\>

Return direct child places from the hierarchy tree.

### diagnostics(): GeoAtlasDiagnosticsSnapshot

Returns runtime metrics and cache stats. Requires `diagnostics: true` in config.

### dataset: DatasetInfo

Read-only summary of the loaded dataset:

```typescript
interface DatasetInfo {
  root: string;
  iso2: string;
  version?: string;
  ready: boolean;
  schemaVersion?: string;
  entityCount?: number;
  generatedAt?: string;
}
```

### spatial: SpatialAPI

| Method | Description |
|--------|-------------|
| `contains(point, polygon)` | Synchronous point-in-polygon test |
| `pointInPolygon(lat, lon)` | Admin boundary lookup |
| `pointInPolygonAll(lat, lon)` | All matching admin boundaries |

### places: PlacesAPI

| Method | Status | Description |
|--------|--------|-------------|
| `popular(options)` | **Deferred (P1-03)** | Mode validation; returns `[]` — see [popular-places.md](./popular-places.md) |

---

## Error types

All errors extend `GeoAtlasError` with a `code` field matching `GeoAtlasErrorCode` constants.

| Class | Code | When |
|-------|------|------|
| `ConfigurationError` | `CONFIGURATION` | Invalid options |
| `NotReadyError` | `NOT_READY` | Called before `init()` |
| `DatasetNotFoundError` | `DATASET_NOT_FOUND` | Missing dataset root or manifest |
| `VersionMismatchError` | `VERSION_MISMATCH` | Incompatible schema version |
| `SchemaMismatchError` | `SCHEMA_MISMATCH` | Invalid schema version string |
| `ChecksumMismatchError` | `CHECKSUM_MISMATCH` | Artifact checksum failure |
| `ChecksumNotFoundError` | `CHECKSUM_NOT_FOUND` | Missing manifest checksum entry |
| `ArtifactNotFoundError` | `ARTIFACT_NOT_FOUND` | Missing artifact file |
| `InvalidQueryError` | `INVALID_QUERY` | Query validation failure |
| `PartitionNotFoundError` | `PARTITION_NOT_FOUND` | Partition not in manifest |
| `CountryMismatchError` | `COUNTRY_MISMATCH` | iso2 ≠ manifest country |

### Error handling example

```typescript
import {
  createGeoAtlas,
  GeoAtlasError,
  NotReadyError,
  ChecksumMismatchError,
} from '@geoatlas/sdk';

try {
  await geoatlas.init();
} catch (error) {
  if (error instanceof ChecksumMismatchError) {
    console.error('Corrupt artifact:', error.relativePath);
    // Re-download dataset or set verifyChecksums: false for dev
  }
}
```

---

## Type exports

```typescript
import type {
  GeoAtlasOptions,
  GeoAtlasCacheOptions,
  GeoAtlasDiagnosticsOptions,
  GeoAtlasDiagnosticsSnapshot,
  GeoAtlasLogger,
  SearchResult,
  SearchOptions,
  PlaceQuery,
  QueryResult,
  GeoQuery,
  Place,
  PlaceRef,
  PlaceContext,
  PlaceContextInput,
  PlaceHierarchy,
  PlaceMetadata,
  DatasetInfo,
  SpatialAPI,
  SpatialHit,
} from '@geoatlas/sdk';
```

Utility exports:

```typescript
import {
  GeoAtlasErrorCode,
  noopLogger,
  createConsoleLogger,
  SUPPORTED_SCHEMA_MAJOR,
} from '@geoatlas/sdk';
```

---

## Alpha limitations

The following are **not yet implemented** in `0.1.0-alpha.1`:

- Popular Places ranking (`places.popular`) — **deferred**; use Famous/Notable. See [popular-places.md](./popular-places.md).
- Reverse geocoding enhancements
- Routing
- AI features
- Persistent/offline cache (IndexedDB)

These are planned for post-alpha releases.
