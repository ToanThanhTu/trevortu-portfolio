# lib/

## Files

### `types.ts`
All shared types. Each type has a TSDoc comment. Key types:
- `Job` — Work experience entry (5 roles currently)
- `Project` — Portfolio project. Optional fields `sections`, `techStack`, `stats`, `architecture` enable rich page layout.
- `Testimonial`, `Quote`, `Email` — Self-explanatory

### `data.ts`
All portfolio content as typed arrays:
- `experience` — 5 `Job` entries (HEQS Group, WebAlive, Freelance, Infosys, Wipro)
- `featuredProjects` — 5 `Project` entries (Priceworth is first and only rich project)
- `otherProjects` — 2 `Project` entries
- `allProjects` — Combined array (`[...featured, ...other]`)
- `testimonials` — 6 `Testimonial` entries
- `quotes` — 10 programming `Quote` entries

### `utils.ts`
Single `cn()` export — Tailwind class merge utility (`clsx` + `tailwind-merge`).

## Adding a New Project

1. Add a `Project` entry to `featuredProjects` or `otherProjects` in `data.ts`
2. Place images in `public/<slug>/` (main: 1280x2240, secondary: 1200x750)
3. For a rich page: populate `sections`, `techStack`, `stats`, `architecture` fields
4. The `[slug]` page auto-dispatches to `RichProjectDetails` or `ProjectDetails`
5. Homepage shows first 4 `featuredProjects` via index — order matters
