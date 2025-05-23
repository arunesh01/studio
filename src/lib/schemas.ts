
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().max(100).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  consent: z.boolean().refine(value => value === true, {
    message: "You must agree to receive marketing emails.",
  }),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
