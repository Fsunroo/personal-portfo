# Mohammad Farhadi — Clinical AI Portfolio

A static portfolio for a physician, clinical AI researcher, and health-technology founder. It includes production case studies, filterable publications, selected technical projects, clinical background, MDX writing, and a printable CV.

## Stack

- Astro 6 and TypeScript
- React islands for publication filtering and the floating navigation dock
- Tailwind CSS 4
- MDX writing
- Static output for Cloudflare Pages, Vercel, Netlify, or GitHub Pages

## Development

```bash
pnpm install
pnpm dev
```

Production verification:

```bash
pnpm exec astro check
pnpm build
```

Personal, case-study, publication, and project data lives in `src/data/resume.tsx`. Essays live in `src/content/blog`.

## Credits

Built from [Starfolio](https://github.com/webrating/starfolio) by Website Rating and adapted for this portfolio. The original MIT license is retained in [LICENSE](./LICENSE).
