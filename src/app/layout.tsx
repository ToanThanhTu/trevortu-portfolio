import type { Metadata } from "next"
import { geistMono, geistSans } from "@/fonts"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { cn } from "@/lib/utils"

import "./globals.css"
import { Toaster } from "@/components/shadcn/sonner"

export const metadata: Metadata = {
  title: "Trevor Tu Portfolio",
  description: "Trevor Tu Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`)}
      >
        <div
          className={cn(
            "relative flex flex-col h-full my-4",
            "xl:max-w-screen-xl xl:mx-auto"
          )}
        >
          <Header />
          <div className="mx-4 mt-18">{children}</div>
          <Footer />
          <Toaster richColors />
        </div>
      </body>
    </html>
  )
}
