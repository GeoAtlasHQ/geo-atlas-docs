# Development order

Public summary of Phase 12+ ecosystem order.

| Phase | Deliverable | Status |
| ----- | ----------- | ------ |
| 12A | `geo-atlas-sdk` extract + alpha | ✅ git (`v0.1.0-alpha.2`) |
| 12B | `geo-atlas-customer` | ✅ demo + Pages workflow |
| 13 | `geo-atlas-docs` | 🟡 this site (DOCS-01/02) |
| 14 | `geo-atlas-api` | ⬜ |
| 15 | `geo-atlas-search` | ⬜ |
| 16 | `geo-atlas-routing` | ⬜ |
| 17 | `geo-atlas-cloud` | ⬜ |

## Dependency sketch

```
P0-02 dataset publish ──► P0-03 SDK pin ──► P1-01 customer
         │                      │
         └──────────────────────┴──► P1-02 docs (parallel)
npm publish ──► CUST-02 (drop file: links)
```

## Related

- [Ops / execution](../ops/execution)
- [Priorities](../ops/priorities)
- [Repository map](../architecture/repos)
