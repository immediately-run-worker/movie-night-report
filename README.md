# Movie Night Report

A visually rich, single-page report on five films — **Super 8**, **Arrival**,
**Edge of Tomorrow**, **King Kong** (2005) and **Signs** — each with a short
teaser, portraits of the top cast and a link to the official trailer. Built as
an [immediately.run](https://immediately.run) app; all imagery is embedded in
the repo so the report renders identically everywhere.

Try this app on [immediately.run](https://immediately.run/present/github/immediately-run-worker/movie-night-report/main)

## Where things are

| Path | Holds |
| --- | --- |
| `src/content/report.mdx` | The masthead and colophon prose, and where the film list sits |
| `src/data/movies.ts` | The five films: meta, tagline, teaser, cast and trailer |
| `src/components/` | One component per file (chip bar, film section, poster, cast card) |
| `src/assets/` | Posters and cast portraits, imported by `movies.ts` |

The look (dark cinema, marquee gold) is a set of token overrides at the end of
`src/index.css`; light or dark follows the immediately.run theme.

## Run locally

```bash
npm install
npm run dev                  # vite, no host
npx @immediately-run/cli dev # the working tree on immediately.run itself
```

`npm run build` and `npm run lint` must both pass before you push.

## Sources

- Cast portraits: Wikimedia Commons (thumbnails via the Wikipedia REST API).
- Posters: Wikipedia film pages.
- Trailer links: official YouTube uploads (studio or licensed trailer channels).
