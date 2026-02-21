-- Create contact_inquiries table for the contact form
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service_interest TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public contact form)
CREATE POLICY "Allow public inserts" ON public.contact_inquiries
  FOR INSERT
  WITH CHECK (true);

-- Prevent public reads (admin only via service role)
CREATE POLICY "Deny public reads" ON public.contact_inquiries
  FOR SELECT
  USING (false);
