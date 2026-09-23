# Solar dos Pireneus — Public Project Showcase

> Public technical documentation for a private production repository.

## Overview

Solar dos Pireneus is a hospitality website and digital foundation for two independent vacation homes in Pirenópolis: Casa Solar and Casa Tapera.

The product presents each house, captures reservation requests, preserves campaign attribution and protects submitted personal data without pretending to be a full PMS or payment engine.

## What this showcase demonstrates

- TanStack Start, React 19 and TypeScript application architecture.
- Supabase-backed content and booking-request model.
- Row Level Security as a database security boundary.
- Public content vs. private operational data separation.
- `published` / `noindex` editorial controls.
- SEO and structured content strategy.
- Lead and booking attribution using UTMs, referrer and device context.
- Incremental database migrations.

## Main flow

```text
Content → House → Dates and guests → Reservation request → RLS-protected storage → Internal team
```

## Documentation

- [Architecture](docs/architecture.md)
- [Product scope](docs/product.md)
- [Security and privacy](docs/security.md)

## Public scope

Product structure, reservation-request behavior, high-level data model, SEO strategy, RLS concepts and engineering trade-offs.

## Private scope

Production source code, detailed migrations/RLS implementation, service-role credentials, environment secrets, personal data and private administration.

## Portfolio case

[Open the full public case](https://mateus-nascimento-dev.lovable.app/projetos/solar-dos-pireneus)

## Author

Mateus Nascimento dos Santos · [GitHub](https://github.com/matteusnascimento)

---

**This showcase is intentionally separated from the private production repository.**
