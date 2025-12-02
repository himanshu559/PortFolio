import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Himanshu Raj | Full-Stack Developer",
  description:
    "B.Tech CSE student passionate about full-stack development. Skilled in React, Next.js, Node.js, MongoDB.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light.webp",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-light.webp",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon-light.webp",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}
