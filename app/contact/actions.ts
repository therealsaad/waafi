"use server"

import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

const contactSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service_interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    full_name: formData.get("full_name") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    service_interest: formData.get("service_interest") as string,
    message: formData.get("message") as string,
  }

  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the form for errors.",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  const supabase = await createClient()

  const { error } = await supabase
    .from("contact_inquiries")
    .insert([parsed.data])

  if (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }

  return {
    success: true,
    message: "Thank you for your inquiry. We will be in touch shortly.",
  }
}
