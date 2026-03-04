import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
   icons: {
    icon: "/favicon.ico",
  },
  title: "Espaço + | Cortinas, Persianas e Soluções Arquitetônicas Hunter Douglas",
  description:
    "Referência em cortinas, persianas, toldos e produtos especiais Hunter Douglas em Ribeirão Preto. Qualidade, tecnologia e sofisticação desde 2001.",
  generator: "v0.app",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
