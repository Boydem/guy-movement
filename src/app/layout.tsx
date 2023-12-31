import "@/styles/globals.css"
import { siteConfig } from "@/config/site.config"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import { fontDisplay, fontSans } from "@/lib/fonts"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Analytics } from "@vercel/analytics/react"
import Providers from "./providers/providers"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="scroll-smooth" dir="rtl" lang="en" suppressHydrationWarning>
      <head />
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased scroll-smooth",
          fontSans.variable,
          fontDisplay.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <div className="flex flex-1 flex-col overflow-hidden">
            <Providers>
            {children}
            </Providers>
            </div>
        </div>
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  )
}
