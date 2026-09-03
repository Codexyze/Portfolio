import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = {
  title: "Akshay Sarapure - Android Developer Portfolio",
  description: "Passionate Android Developer specializing in Jetpack Compose, Clean Architecture, and Modern Android Development",
  generator: "v0.app",
  icons: {
    icon: "/nutrino-logo.png",
    shortcut: "/nutrino-logo.png",
    apple: "/nutrino-logo.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="bg-background"><body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>{children}</body></html>
}
