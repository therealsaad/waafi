import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Waafi Associates LLC AFZ | Consulting & Technology Services",
    template: "%s | Waafi Associates LLC AFZ",
  },
  description:
    "UAE-based professional services firm providing Interior Design Engineering Consultancy, Software Development, E-commerce Solutions, and Cyber Security Services.",
  keywords: [
    "consulting",
    "technology services",
    "interior design",
    "software development",
    "cyber security",
    "e-commerce",
    "UAE",
    "Ajman Free Zone",
  ],
  openGraph: {
    title: "Waafi Associates LLC AFZ",
    description:
      "Delivering Design, Technology & Digital Assurance Solutions from UAE.",
    type: "website",
    locale: "en_AE",
  },
}

export const viewport = {
  themeColor: "#1a2744",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" richColors />
        <Analytics />
      </body>
    </html>
  )
}
