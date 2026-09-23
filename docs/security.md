# Solar dos Pireneus — Security and Privacy

## Security boundary

Row Level Security is treated as a database security boundary rather than relying only on what the interface hides.

## Public and private access

Public visitors may read approved public content and submit intended public forms. They must not be able to enumerate private booking requests or lead records.

## Secrets

The service-role credential and other privileged environment values must never be exposed in public client code or this showcase.

## Personal data

Real names, emails, phone numbers, messages, booking requests and lead records are excluded from this repository.

## Database evolution

Schema and access-policy changes belong in incremental migrations in the private production repository. This showcase documents the approach without publishing the complete implementation.
