# Popular Places — deferred (P1-03 / SDK-07)

**Decision (2026-07-22):** Defer the Popular Places **product** implementation. Keep the typed stub API for forward compatibility.

| Item | Value |
| ---- | ----- |
| Status constant | `POPULAR_PLACES_STATUS === 'deferred'` |
| Stub behavior | Mode validation; returns `[]` |
| Use instead | `places.famous()` / `nearbyFamous()` / Point Intelligence `notablePlace` |

## Why defer

1. **Famous / Notable** already ships with AZ `v1.1.0` and answers landmark / significance use cases.
2. **Popular** requires usage/popularity signals and ranking profiles that are not in the published dataset contract yet.
3. Architecture TARGET (admin-polygon vs radius modes) remains valid; conflating the two modes is still rejected by the stub.

## Not in scope of this defer

- Removing `places.popular()` (breaking for alpha consumers who call it)
- Implementing ranking in the customer demo
- Changing Famous / Notable APIs

## Re-open criteria

Revisit when:

- Dataset or API exposes popularity signals (or an accepted proxy), **and**
- Product chooses Mode 1 (admin polygon) and/or Mode 2 (radius) for GA, **and**
- Worker P1-03 is explicitly un-deferred

## See also

- [Architecture overview (popular)](https://github.com/GeoAtlasHQ/geo-atlas-docs/blob/master/docs/guide/notable-vs-popular.md) (public docs)
- Platform handbook: `docs/architecture/09-popular-places/overview.md`
