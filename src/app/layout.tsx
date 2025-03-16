import type { Metadata } from "next"
import { montserrat } from "@/fonts"
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
    <html lang="en" className={cn("scroll-smooth antialiased", montserrat.className)}>
      <body className={cn(`bg-black min-w-[380px]`)}>
        <div className={cn("relative flex flex-col w-full h-full my-4 overflow-hidden")}>
          <Header />
          <div className={cn("mx-4 mt-20", "2xl:max-w-screen-xl 2xl:mx-auto 2xl:px-4")}>
            {children}
          </div>
          <Footer />
          <Toaster richColors />
        </div>
      </body>
    </html>
  )
}
