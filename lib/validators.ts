import { z } from "zod";

const optionalUrl = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().url().optional()
);

const optionalText = z.preprocess(
  (value) => (value === "" ? undefined : value),
  z.string().max(2000).optional()
);

export const contactSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  website: optionalUrl,
  monthlyOrders: z.string().trim().min(1).max(80),
  platform: z.string().trim().min(1).max(80),
  interest: z.string().trim().min(1).max(80),
  message: optionalText,
});

export const newsletterSchema = z.object({
  email: z.string().trim().email().max(255),
});

export const demoRequestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  company: z.string().trim().min(1).max(120),
  preferredDate: z.string().trim().min(1).max(80),
  timezone: z.string().trim().min(1).max(80),
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type NewsletterPayload = z.infer<typeof newsletterSchema>;
export type DemoRequestPayload = z.infer<typeof demoRequestSchema>;
