# Classification (Phase G)

Build-time and runtime classification for entities and zones.

| Layer | Where | Notes |
| ----- | ----- | ----- |
| Registry + mapping | Generator | G1–G4 — validated registry |
| Entity classifications | Dataset `classification/` | G5 |
| Buildings partition | Dataset `buildings/` | G6–G7 |
| Classification zones | Dataset `classification/zones/` | G8–G9 |
| SDK resolvers | `@geoatlas/sdk` | G10–G12 — registry + zone PIP |
| Point Intelligence | SDK `resolvePoint` | G13 — composes classification + admin + entity |

## AZ publish

`az/v1.1.0` includes Phase G (+ Notable/Famous Phase H) artifacts. Validate with `geo-datasets` `validate-phase-g-release.ts`.

## Related

- [Point intelligence](./point-intelligence)
- [Datasets](../guide/datasets)
- [Notable vs Popular](../guide/notable-vs-popular)
