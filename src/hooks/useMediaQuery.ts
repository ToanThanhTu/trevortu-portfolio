"use client"

export default function useMediaQuery(query: string) {
  const width = window.innerWidth

  console.log("width:", width)

  let querySize: number = 0

  switch (query) {
    case "sm":
      querySize = 640
      break
    case "md":
      querySize = 768
      break
    case "lg":
      querySize = 1024
      break
    case "xl":
      querySize = 1280
      break
    case "2xl":
      querySize = 1536
      break
    default:
      break
  }

  return width >= querySize
}
