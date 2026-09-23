# Solar dos Pireneus — Product Scope

## Product goal

The public experience helps visitors understand the two houses, compare what each one offers and submit a reservation request with enough context for follow-up.

## Current phase

The current phase behaves as a commercial website and reservation-request layer, not as a full PMS or automated payment engine.

## Main data concepts

- accommodations;
- media;
- editorial content;
- offers;
- booking requests;
- leads;
- campaign attribution;
- publishing and indexation state.

## Request flow

```text
Visitor → House / content → Dates + guest context → Request
→ Protected persistence → Internal handling
```

Content can exist in the data layer before it is ready to be public. Publication and search-engine indexation are explicit states.
