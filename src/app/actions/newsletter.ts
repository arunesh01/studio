
"use server";

import { newsletterFormSchema, type NewsletterFormValues } from "@/lib/schemas";

export interface NewsletterFormState {
  message: string;
  success: boolean;
  errors?: Partial<Record<keyof NewsletterFormValues, string[]>>;
}

export async function subscribeToNewsletter(
  prevState: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
  const rawFormData = Object.fromEntries(formData.entries());
  // FormData values for checkboxes are 'on' or null, convert 'on' to true.
  const processedFormData = {
    ...rawFormData,
    consent: rawFormData.consent === 'on',
  };

  const validatedFields = newsletterFormSchema.safeParse(processedFormData);

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email } = validatedFields.data;

  // Simulate saving to a database or email service
  console.log("Newsletter subscription:", { email });
  // In a real application, you would save the email to Firestore or an email marketing service.
  // Example:
  // try {
  //   await db.collection('newsletterSubscribers').add({ email, subscribedAt: new Date() });
  // } catch (error) {
  //   console.error("Error saving newsletter subscription:", error);
  //   return {
  //     message: "An error occurred while subscribing. Please try again later.",
  //     success: false,
  //   };
  // }

  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

  return {
    message: "Thank you for subscribing to our newsletter!",
    success: true,
  };
}
