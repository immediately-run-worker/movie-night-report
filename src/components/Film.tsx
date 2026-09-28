import type { ReactNode } from 'react'
import { MOVIES } from '../data/movies'
import FilmSection from './FilmSection'

// One film in report.mdx: the facts come from src/data/movies.ts by `slug`,
// the teaser prose is the children.
function Film({ slug, children }: { slug: string; children: ReactNode }) {
  const movie = MOVIES.find((m) => m.slug === slug)
  if (!movie) throw new Error(`report.mdx: no film with slug "${slug}" in src/data/movies.ts`)
  return <FilmSection movie={movie}>{children}</FilmSection>
}

export default Film
