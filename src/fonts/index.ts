import { Montserrat } from "next/font/google"

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "auto",
  fallback: ["sans-serif", "system-ui", "arial"],
})
