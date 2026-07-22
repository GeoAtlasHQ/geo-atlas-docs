# FAQ

## General

### What is GeoAtlas SDK?

A read-only location intelligence SDK that consumes published GeoAtlas dataset artifacts. It provides search, spatial queries, and place intelligence for offline-first applications.

### Is this production-ready?

Version `0.1.0-alpha.1` is an **alpha** release. APIs may change before `1.0.0`. Pin versions and maintain your own dataset mirrors for production use.

### Does the SDK include datasets?

No. You must provide a dataset bundle (local path or CDN URL). Datasets are published separately in the [geo-datasets](https://github.com/GeoAtlasHQ/geo-datasets) repository.

## Installation

### Which Node.js version is required?

Node.js **≥ 22** for `@geoatlas/sdk` in Node environments.

### Can I use CommonJS?

Alpha builds are **ESM-only**. Use `import` syntax or dynamic `import()`.

### Do I need all three packages?

No. Install only what you need:

- Core only: `@geoatlas/sdk`
- React app: `@geoatlas/react` + `@geoatlas/sdk`
- Angular app: `@geoatlas/angular` + `@geoatlas/sdk` + `rxjs`

## Usage

### Why do I get `NotReadyError`?

Call `await geoatlas.init()` before using search, query, or place methods. Framework packages handle this automatically (React provider, Angular `autoInit` or lazy init on first Observable).

### How do I load a remote dataset?

Set `dataset` to a CDN URL and pass `fetch: globalThis.fetch` in Node.js:

```typescript
createGeoAtlas({
  dataset: 'https://cdn.example.com/az/v1.0.0',
  fetch: globalThis.fetch,
});
```

### Should I disable checksum verification?

Only for local development with intentionally modified fixtures. Keep `verifyChecksums: true` (default) in production.

### Why is search returning empty results?

- Ensure the dataset includes `search-prefix.json` in the manifest
- Call `init()` first
- Check query normalization (e.g. `'Baku'` vs `'Bakı'`)

## Framework bindings

### React: why `usePlaceContext` instead of `useContext`?

`useContext` is reserved by React. The SDK exports `usePlaceContext` with alias `useGeoAtlasPlaceContext`.

### Angular: Observable vs Signal APIs?

- **Observables** — use with `AsyncPipe` or RxJS operators; auto-init on subscribe
- **Signals** — use `searchSignal()`, `placeSignal()`, `contextSignal()` with `Signal` inputs; call from injection context

## Alpha limitations

### What is not implemented?

- Popular Places (`places.popular()` returns empty) — **deferred**; use Famous/Notable. See [popular-places.md](./popular-places.md).
- Routing
- AI / LLM integrations
- CommonJS build
- Runnable framework example apps (snippets only)

See [RELEASE_NOTES_ALPHA.md](https://github.com/GeoAtlasHQ/geoatlas-sdk/blob/master/RELEASE_NOTES_ALPHA.md) for the full list.

## Contributing

See [CONTRIBUTING.md](https://github.com/GeoAtlasHQ/geoatlas-sdk/blob/master/CONTRIBUTING.md). Report bugs via [GitHub Issues](https://github.com/GeoAtlasHQ/geoatlas-sdk/issues).
