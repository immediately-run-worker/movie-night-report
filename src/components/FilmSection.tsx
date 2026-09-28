import type { ReactNode } from 'react'
import type { Movie } from '../data/movies'
import CastCard from './CastCard'
import ExternalLink from './ExternalLink'
import Poster from './Poster'

function FilmSection({ movie, children }: { movie: Movie; children: ReactNode }) {
  return (
    <section className="film" id={movie.slug} aria-labelledby={`${movie.slug}-title`}>
      <figure className="poster">
        <Poster movie={movie} />
      </figure>
      <div>
        <h2 className="film-title" id={`${movie.slug}-title`}>
          {movie.title}
        </h2>
        <p className="meta">
          <span>{movie.year}</span>
          <span className="dot" aria-hidden="true">·</span>
          <span>Directed by {movie.director}</span>
          <span className="dot" aria-hidden="true">·</span>
          <span>{movie.runtime}</span>
          <span className="dot" aria-hidden="true">·</span>
          <span>Rated {movie.rating}</span>
        </p>
        <p className="tagline">{movie.tagline}</p>
        <div className="teaser">{children}</div>
        <h3 className="cast-label">Top cast</h3>
        <div className="cast-row">
          {movie.cast.map((member) => (
            <CastCard member={member} key={member.name} />
          ))}
        </div>
        <ExternalLink className="trailer-link" href={`https://www.youtube.com/watch?v=${movie.trailerId}`}>
          <span className="tri" aria-hidden="true" />
          Watch the {movie.trailerLabel}
        </ExternalLink>
        <span className="trailer-note">{movie.trailerChannel} · opens on YouTube in a new tab</span>
      </div>
    </section>
  )
}

export default FilmSection
