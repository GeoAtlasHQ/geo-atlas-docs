# Point intelligence

Map-click / reverse-context orchestration in the SDK.

**API:** `geoatlas.intelligence.resolvePoint(lat, lon, options?)`  
**Status:** CURRENT in `@geoatlas/sdk` alpha (Contract Freeze v1.0.0 tests in repo).

## What it returns

| Field | Meaning |
| ----- | ------- |
| `administrativeContext` | Country → … → deepest admin match |
| `entity` | Building footprint PIP or nearest POI |
| `classifications` | Entity + spatial classification labels |
| `classificationZones` | Zone memberships (tourism, …) |
| `notablePlace` | Notable/famous at point (if any) |
| `nearbyNotablePlaces` | Optional nearby notables |
| `provenance` | Dataset version, resolvers, timings |

## Typical options

```ts
await geoatlas.intelligence.resolvePoint(40.4093, 49.8672, {
  includeNotable: true,
  includeNearbyNotable: true,
  nearbyNotableRadiusMeters: 5000,
  nearbyNotableLimit: 5,
});
```

## Demo

[geo-atlas-customer](https://github.com/GeoAtlasHQ/geo-atlas-customer) — MapLibre click → sidebar Point Intelligence panel.

## Boundary

Point Intelligence ≠ text search ≠ Popular Places product. See [Notable vs Popular](../guide/notable-vs-popular).
