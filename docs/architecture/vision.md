# Vision

> Public summary of the platform vision (SSOT: architecture handbook).

## Mission

Build the definitive **offline-capable location intelligence layer** for Azerbaijan — expandable to more countries without rewriting the pipeline.

GeoAtlas is not a map tile server or a generic OSM mirror. It is a **structured place intelligence platform**: search, hierarchy, spatial queries, notable/famous places, and ranking — delivered as immutable versioned artifacts.

## Evolution

| Phase | Focus | Status |
| ----- | ----- | ------ |
| Data production | OSM → dataset → CDN | **CURRENT** |
| Runtime intelligence | `@geoatlas/sdk` search, spatial, PI | **CURRENT (alpha)** |
| Reference app + docs | Customer demo, this site | **CURRENT** |
| Managed services | API, search, routing, cloud | **FUTURE** |

```
geo-data-generator → geo-datasets → geo-atlas-sdk → geo-atlas-customer
                                              ↘ geo-atlas-api → search / routing / cloud
```

## Azerbaijan-first

Production serves **AZ** today. The generator is country-agnostic via country profiles (normalization, admin levels, aliases). Multi-country is a configuration + rebuild concern, not a rewrite.

## Related

- [Five planes](./planes)
- [Repository map](./repos)
- [Point intelligence](./point-intelligence)
