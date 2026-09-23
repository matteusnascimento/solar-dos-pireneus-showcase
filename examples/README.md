# Solar dos Pireneus — Sanitized Code Samples

These examples demonstrate engineering patterns from the public-facing hospitality product without publishing the production repository.

## What to review

- `booking/booking-request.ts`: Zod validation, normalized output and data minimization.
- `booking/booking-request.test.ts`: validation and output-shape tests.
- `content/publication.ts`: explicit rules for publishing and indexation.
- `content/publication.test.ts`: tests for hidden/noindex content.
- `security/rls-example.sql`: illustrative database boundary separating anonymous inserts from authenticated reads.

## Run TypeScript tests

```bash
cd examples
npm install
npm test
npm run typecheck
```

The SQL file is explanatory only. It intentionally uses demo tables and must not be applied to a production database.
