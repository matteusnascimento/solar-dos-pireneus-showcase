import { describe, expect, it } from "vitest";

import { bookingRequestSchema, toBookingInsert } from "./booking-request";

const validRequest = {
  accommodationSlug: "casa-demo",
  checkIn: "2026-11-10",
  checkOut: "2026-11-14",
  adults: 4,
  children: 1,
  contactName: "Pessoa Exemplo",
  contactEmail: "Guest@Example.com",
  message: "Preferência por chegada no período da tarde.",
  marketing: {
    source: "search",
    medium: "organic",
    campaign: "brand",
    landingPath: "/casas/casa-demo",
  },
};

describe("bookingRequestSchema", () => {
  it("accepts a valid request", () => {
    expect(bookingRequestSchema.parse(validRequest).adults).toBe(4);
  });

  it("rejects check-out before check-in", () => {
    expect(() =>
      bookingRequestSchema.parse({
        ...validRequest,
        checkOut: "2026-11-09",
      }),
    ).toThrow("Check-out must be after check-in.");
  });

  it("returns only the persistence fields the server needs", () => {
    const insert = toBookingInsert({
      ...validRequest,
      ignoredClientField: "must-not-be-persisted",
    });

    expect(insert.contact_email).toBe("guest@example.com");
    expect(insert.utm_source).toBe("search");
    expect("ignoredClientField" in insert).toBe(false);
  });
});
