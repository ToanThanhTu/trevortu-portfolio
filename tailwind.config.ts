import type { Config } from "tailwindcss"
import TailwindAnimatePlugin from "tailwindcss-animate"

export default {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--background-primary)",
          secondary: "var(--background-secondary)",
        },
        foreground: {
          primary: "var(--foreground-primary)",
          secondary: "var(--foreground-secondary)",
        },
        black: "var(--black)",
        white: "var(--white)",
        red: {
          background: "var(--red-background)",
          foreground: "var(--red-foreground)",
        },
        green: {
          background: "var(--green-background)",
          foreground: "var(--green-foreground)",
        },
        stroke: "var(--stroke)",
        linkedin: "var(--linkedin)",
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [TailwindAnimatePlugin],
} satisfies Config
