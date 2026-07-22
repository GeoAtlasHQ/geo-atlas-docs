# Notable vs Popular

Two different product concepts — do not conflate.

| | **Famous / Notable** | **Popular Places** |
| --- | --- | --- |
| Signal | Notability / significance | Popularity / usage |
| SDK today | `places.famous()`, `nearbyFamous()`, PI `notablePlace` | `places.popular()` — **stub** (returns `[]`) |
| Dataset | `notable/` (Phase H) | Product ranking — TARGET / P1-03 |
| Typical use | Landmarks, curated significance | “What’s popular in Baku?” |

## Famous (CURRENT alpha)

Ships with AZ `v1.1.0` notable artifacts. Map demo: customer **Nearby famous** button.

## Popular Places (P1-03)

Architecture TARGET: admin-polygon mode (default) vs explicit radius mode. Product API historically sketched under `geo-atlas-api`; SDK stub remains until product decision (**implement or defer**).

**Worker:** P1-03 — open. This docs site treats Popular as **deferred / stub** until SDK-07 completes.

## Related

- [SDK guide](./sdk)
- [Point intelligence](../architecture/point-intelligence)
