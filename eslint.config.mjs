import nextCoreWebVitals from "eslint-config-next/core-web-vitals"
import nextTypeScript from "eslint-config-next/typescript"

/**
 * Flat config (ESLint 9). Next.js 16 removed `next lint`, so this is consumed
 * directly by the `eslint .` script. Mirrors the previous
 * `["next/core-web-vitals", "next/typescript"]` setup.
 */
const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [".next/**", "out/**", "build/**", ".vercel/**", "next-env.d.ts"],
  },
]

export default eslintConfig
