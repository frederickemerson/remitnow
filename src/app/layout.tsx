import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "~/components/theme-provider"
import { LenisScroll } from "~/components/lenis-scroll"
import "~/styles/globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RemitNow - Turn Remittances into Wealth with Solana",
  description:
    "Mobile-first superapp for buying stablecoins, earning 7-20% yields, and sending money across Asia & Africa. Built on Solana for instant, low-cost transfers.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="remitnow-theme">
          <LenisScroll />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
