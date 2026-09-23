# Solar dos Pireneus — Architecture Overview

## High-level architecture

```text
Public Web App
TanStack Start + React + TypeScript
        |
        v
Supabase
        |
        +--> Published content
        +--> Accommodation data
        +--> Media / offers
        +--> Booking requests
        +--> Leads
        |
        v
Row Level Security
public read / anonymous insert / authenticated internal access
```

## Reservation-request model

The public flow records a request, not a guaranteed booking.

```text
Dates + guests + selected house → Validation → Booking request
→ RLS-protected persistence → Internal follow-up
```

Availability, payment and confirmation are not represented as automatic capabilities when they are outside the current phase.

## Publishing model

```text
Content → published / noindex state → Public page → Metadata / sitemap / robots
```

This allows content to exist in the data layer before it is ready to be exposed or indexed.
