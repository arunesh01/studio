
"use server";

import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";

// TODO: Uncomment and configure Firebase when ready
// import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
// import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// TODO: Ensure your Firebase config is set up, e.g., in environment variables
// and you have a src/lib/firebase.ts or similar to initialize the app.
// For this example, we'll define a minimal setup here.
/*
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const db = getFirestore(app);
*/

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

  console.log("Contact form submitted (Server Action):", { name, email, subject, message });

  // --- Example: Saving to Firestore ---
  // TODO: Uncomment and adapt this block when Firebase is configured.
  /*
  try {
    if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
      throw new Error("Firebase project ID is not configured. Cannot save to Firestore.");
    }
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      name,
      email,
      subject: subject || "", // Ensure subject is not undefined
      message,
      submittedAt: serverTimestamp(), // Adds a server-side timestamp
    });
    console.log("Document written to Firestore with ID: ", docRef.id);

    return {
      message: "Thank you for your message! We've received it and will get back to you soon.",
      success: true,
    };

  } catch (error) {
    console.error("Error adding document to Firestore: ", error);
    let errorMessage = "An unexpected error occurred while submitting your message.";
    if (error instanceof Error) {
        errorMessage = error.message.includes("Firebase project ID is not configured") 
                       ? "Server configuration error. Please try again later."
                       : "Could not submit your message due to a server error. Please try again.";
    }
    return {
      message: errorMessage,
      success: false,
    };
  }
  */

  // Simulate network delay and success if Firestore is not used
  await new Promise(resolve => setTimeout(resolve, 1000)); 
  return {
    message: "Thank you for your message! (Simulated success - Firestore integration pending). We'll get back to you soon.",
    success: true,
  };
}

