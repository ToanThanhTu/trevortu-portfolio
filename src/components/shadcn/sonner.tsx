"use client"

import { Toaster as Sonner, ToasterProps } from "sonner"

// The site is dark-only, so there is no theme provider to read from.
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--background-primary)",
          "--normal-text": "var(--foreground-primary)",
          "--normal-border": "var(--stroke)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
