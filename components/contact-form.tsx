"use client"

import { useActionState, useEffect, useRef } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2, Send, CheckCircle2 } from "lucide-react"
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions"

const serviceOptions = [
  "Interior Design Engineering",
  "Software Development",
  "E-commerce Solutions",
  "Cyber Security Advisory",
  "IT & Digital Consulting",
  "Multiple Services",
  "General Inquiry",
]

const initialState: ContactFormState = {
  success: false,
  message: "",
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  )
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.message && !state.errors) {
      if (state.success) {
        toast.success(state.message)
        formRef.current?.reset()
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-waafi-teal/10">
          <CheckCircle2 className="h-8 w-8 text-waafi-teal" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          Inquiry Submitted
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="full_name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="full_name"
            name="full_name"
            placeholder="Your full name"
            required
            className="h-11"
          />
          {state.errors?.full_name && (
            <p className="text-xs text-destructive">
              {state.errors.full_name[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            className="h-11"
          />
          {state.errors?.email && (
            <p className="text-xs text-destructive">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company name"
            className="h-11"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="service_interest" className="text-sm font-medium text-foreground">
            Service Interest
          </Label>
          <Select name="service_interest">
            <SelectTrigger className="h-11 w-full">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project or inquiry..."
          required
          rows={5}
          className="resize-none"
        />
        {state.errors?.message && (
          <p className="text-xs text-destructive">{state.errors.message[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        size="lg"
        className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer gap-2 self-start h-12 px-8"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit Inquiry
          </>
        )}
      </Button>
    </form>
  )
}
