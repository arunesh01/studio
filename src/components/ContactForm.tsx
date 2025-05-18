
"use client";

import { useFormState, useFormStatus } from "react-dom";
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
import { useEffect } from "react";

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
  const [state, formAction] = useFormState(submitContactForm, initialState);
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

  return (
    <form action={formAction} className="space-y-6">
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
