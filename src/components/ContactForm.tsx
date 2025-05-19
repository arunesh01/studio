
"use client";

import { useActionState, useEffect } from "react"; // Changed from useFormState in react-dom to useActionState in react
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed useFormState to useActionState
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.success) {
      reset(); // Reset form fields on successful submission
    }
  }, [state.success, reset]);

  // The handleSubmit from react-hook-form is not directly used with formAction.
  // We can simplify this by passing formAction directly to the <form>'s action prop.
  // However, to keep client-side validation from react-hook-form before the server action,
  // we can create a wrapper function for the onSubmit handler.
  // For now, this structure relies on progressive enhancement if JS is disabled,
  // or if handleSubmit is intended to be used for client-side pre-checks.
  // Given the current setup, where formAction is directly used, handleSubmit(onSubmit) isn't strictly necessary
  // unless there's a specific client-side logic to run via onSubmit before formAction.
  // For simplicity and directness with server actions, using formAction directly is typical.
  // If client-side validation needs to block the server action, then an intermediate step with handleSubmit is needed.

  return (
    <form
      action={formAction} // Directly use the server action
      // onSubmit={handleSubmit(() => { /* No explicit client-side function needed here if formAction is primary */})}
      className="space-y-6"
    >
      {state.message && (
        <Alert variant={state.success ? "default" : "destructive"}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{state.success ? "Success!" : "Error"}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" {...register("name")} placeholder="John Doe" />
          {errors.name?.message && <p className="text-sm text-destructive">{errors.name.message}</p>}
          {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register("email")} placeholder="you@example.com" />
          {errors.email?.message && <p className="text-sm text-destructive">{errors.email.message}</p>}
          {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject (Optional)</Label>
        <Input id="subject" {...register("subject")} placeholder="Inquiry about..." />
        {errors.subject?.message && <p className="text-sm text-destructive">{errors.subject.message}</p>}
        {state.errors?.subject && <p className="text-sm text-destructive">{state.errors.subject.join(", ")}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} placeholder="Your message here..." rows={6} />
        {errors.message?.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
        {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
      </div>

      <SubmitButton />
    </form>
  );
}
