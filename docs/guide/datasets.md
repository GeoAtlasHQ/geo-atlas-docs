# Datasets

**Repo:** [GeoAtlasHQ/geo-datasets](https://github.com/GeoAtlasHQ/geo-datasets)  
**CDN:** jsDelivr (`cdn.jsdelivr.net/gh/GeoAtlasHQ/geo-datasets@main/…`)

## Layout (AZ)

```
az/
  latest.json          → points at current semver
  v1.1.0/
    datasets/
      manifest.json
      … partitions (admin, search, buildings, classification, notable, …)
```

## Pins

| Field | Value |
| ----- | ----- |
| Current AZ | **1.1.0** (Phase G + H: buildings, zones, notable) |
| SDK default | `DEFAULT_AZ_DATASET_VERSION = '1.1.0'` |

## `latest.json`

Consumers and release tooling read `az/latest.json` for the promoted version and commit metadata. Prefer pinning a semver in production apps; use `latest.json` for “follow channel” demos.

## Large artifacts

Some plain search/index files exceed GitHub’s soft size limits; the published tree may expose **`.gz` sidecars** with checksums computed on decompressed payloads. The SDK artifact reader accepts both plain and gzip storage.

## Validation

Operator script in the datasets repo: `scripts/validate-phase-g-release.ts` (checksum path coverage for Phase G/H).

## Related

- Generator pipeline: [geo-data-generator](https://github.com/GeoAtlasHQ/geo-data-generator)
- SDK CDN helpers: [guide/sdk](./sdk)
