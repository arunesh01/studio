
"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";

export interface ContactFormState {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof ContactFormValues, string[]>>;
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  const validatedFields = contactFormSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted:", { name, email, subject, message });
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // Example of a potential server-side error
  // if (email.endsWith('@example.com')) {
  //   return {
  //     message: "Emails from example.com are not currently accepted.",
  //     success: false,
  //   };
  // }

  return {
    message: "Thank you for your message! We'll get back to you soon.",
    success: true,
  };
}
