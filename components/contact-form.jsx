"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
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
import { toast } from "sonner"
import { Send, Loader2 } from "lucide-react"

const serviceOptions = [
  "Interior Design Engineering",
  "Software Development",
  "E-commerce Solutions",
  "Cyber Security Advisory",
  "IT & Digital Consulting",
  "Multiple Services",
]

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    service_interest: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const supabase = createClient()
      const { error } = await supabase
        .from("contact_inquiries")
        .insert([formData])

      if (error) throw error

      toast.success("Thank you! Your inquiry has been submitted successfully.")
      setFormData({
        full_name: "",
        email: "",
        company: "",
        service_interest: "",
        message: "",
      })
    } catch (err) {
      toast.error("Something went wrong. Please try again or email us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="full_name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="full_name"
            name="full_name"
            placeholder="Your full name"
            value={formData.full_name}
            onChange={handleChange}
            required
            className="h-11"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-11"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className="text-sm font-medium text-foreground">
            Company / Organization
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
            className="h-11"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="service_interest" className="text-sm font-medium text-foreground">
            Service Interest
          </Label>
          <Select
            value={formData.service_interest}
            onValueChange={(val) =>
              setFormData((prev) => ({ ...prev, service_interest: val }))
            }
          >
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
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
          placeholder="Tell us about your project or requirements..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="bg-waafi-teal text-accent-foreground hover:bg-waafi-teal-light cursor-pointer h-12 gap-2 self-start px-8"
      >
        {loading ? (
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
