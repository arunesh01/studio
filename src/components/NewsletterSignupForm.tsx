
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterFormSchema, type NewsletterFormValues } from "@/lib/schemas";
import { subscribeToNewsletter, type NewsletterFormState } from "@/app/actions/newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const initialState: NewsletterFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="sm">
      <Mail className="mr-2 h-4 w-4" />
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  );
}

export function NewsletterSignupForm() {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);
  const {
    register,
    handleSubmit, // We'll use handleSubmit to trigger formAction
    formState: { errors: rhfErrors }, // react-hook-form errors
    reset,
    setValue, // To set checkbox value
    trigger, // To manually trigger validation
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
      consent: false,
    }
  });

  useEffect(() => {
    if (state.success) {
      reset();
    }
  }, [state.success, reset]);
  
  // Combine server and client errors for display
  const combinedErrors = {
    email: rhfErrors.email?.message || state.errors?.email?.join(", "),
    consent: rhfErrors.consent?.message || state.errors?.consent?.join(", "),
  };

  return (
    <form
      action={formAction}
      onSubmit={(e) => {
        // Prevent default if client-side validation fails
        handleSubmit(() => {})(e); 
      }}
      className="space-y-4"
    >
      {state.message && (
        <Alert variant={state.success ? "default" : "destructive"} className="mt-4">
          {state.success ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertTitle>{state.success ? "Success!" : "Error"}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}

      <div>
        <Label htmlFor="newsletter-email" className="sr-only">Email for newsletter</Label>
        <div className="flex items-center gap-2">
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="flex-grow"
          />
          <SubmitButton />
        </div>
        {combinedErrors.email && <p className="text-sm text-destructive mt-1">{combinedErrors.email}</p>}
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="newsletter-consent"
          {...register("consent")}
          onCheckedChange={(checked) => setValue('consent', !!checked, { shouldValidate: true })}
        />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="newsletter-consent" className="text-sm font-normal text-muted-foreground">
            I agree to receive marketing emails from TechFlow Hub. 
            Read our <Link href="/privacy-policy" className="underline hover:text-primary">Privacy Policy</Link>.
          </Label>
          {combinedErrors.consent && <p className="text-sm text-destructive">{combinedErrors.consent}</p>}
        </div>
      </div>
    </form>
  );
}
