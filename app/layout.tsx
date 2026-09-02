import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "MB Coastal Creations",
  description:
    "Handmade jewelry, candles, soaps, ornaments, and coastal-inspired creations made in small batches by Melli. Custom requests welcome.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ background: "var(--cream)" }}>{children}</body>
    </html>
  )
}
