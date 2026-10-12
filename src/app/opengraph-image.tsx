import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { SITE_NAME } from "@/lib/site"

// Rendered once at build time, so no request input ever reaches ImageResponse.
export const alt = `${SITE_NAME}, Full Stack Developer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), "public/portrait.jpg"))
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: 56,
          // Design tokens from globals.css: --black, --background-primary, --stroke
          background: "hsl(240, 10%, 4%)",
          color: "hsl(60, 4.8%, 95.9%)",
        }}
      >
        <img
          src={portraitSrc}
          alt=""
          width={345}
          height={518}
          style={{ borderRadius: 16, objectFit: "cover" }}
        />
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 48,
            borderRadius: 16,
            background: "hsl(24, 10%, 10%)",
            border: "2px solid hsl(12, 6.5%, 15.1%)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", textTransform: "uppercase" }}>
            <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: 2 }}>Tu</div>
            <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: 4, lineHeight: 1 }}>
              Trevor
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 40 }}>Full Stack Developer</div>
            <div style={{ fontSize: 28, color: "hsl(24, 5%, 64%)" }}>trevortu.com</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
