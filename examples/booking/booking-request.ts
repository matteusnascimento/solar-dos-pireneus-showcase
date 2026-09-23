import { z } from "zod";

const marketingContextSchema = z.object({
  source: z.string().trim().max(80).optional(),
  medium: z.string().trim().max(80).optional(),
  campaign: z.string().trim().max(120).optional(),
  landingPath: z.string().trim().max(200).optional(),
});

export const bookingRequestSchema = z
  .object({
    accommodationSlug: z.string().trim().min(1).max(80),
    checkIn: z.string().date(),
    checkOut: z.string().date(),
    adults: z.number().int().min(1).max(20),
    children: z.number().int().min(0).max(20).default(0),
    contactName: z.string().trim().min(2).max(120),
    contactEmail: z.string().email().max(180),
    message: z.string().trim().max(1000).optional(),
    marketing: marketingContextSchema.optional(),
  })
  .superRefine((value, context) => {
    const checkIn = new Date(`${value.checkIn}T00:00:00Z`);
    const checkOut = new Date(`${value.checkOut}T00:00:00Z`);

    if (checkOut <= checkIn) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["checkOut"],
        message: "Check-out must be after check-in.",
      });
    }
  });

export type BookingRequest = z.infer<typeof bookingRequestSchema>;

export type BookingInsert = {
  accommodation_slug: string;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
  contact_name: string;
  contact_email: string;
  message: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  landing_page: string | null;
};

export function toBookingInsert(input: unknown): BookingInsert {
  const value = bookingRequestSchema.parse(input);

  return {
    accommodation_slug: value.accommodationSlug,
    check_in: value.checkIn,
    check_out: value.checkOut,
    adults: value.adults,
    children: value.children,
    contact_name: value.contactName,
    contact_email: value.contactEmail.toLowerCase(),
    message: value.message || null,
    utm_source: value.marketing?.source || null,
    utm_medium: value.marketing?.medium || null,
    utm_campaign: value.marketing?.campaign || null,
    landing_page: value.marketing?.landingPath || null,
  };
}
