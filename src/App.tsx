import { useState } from 'react'
import { INTRO, MOVIES, type Movie } from './data'
import { IMAGES } from './images'
import './App.css'

function Poster({ movie }: { movie: Movie }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="poster-fallback" role="img" aria-label={`${movie.title} poster`}>
        {movie.title}
      </div>
    )
  }
  return (
    <img
      src={IMAGES[movie.poster]}
      alt={`${movie.title} (${movie.year}) theatrical poster`}
      onError={() => setFailed(true)}
    />
  )
}

function FilmSection({ movie }: { movie: Movie }) {
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
        <p className="teaser">{movie.teaser}</p>
        <h3 className="cast-label">Top cast</h3>
        <div className="cast-row">
          {movie.cast.map((member) => (
            <figure className="cast-member" key={member.name}>
              <img src={IMAGES[member.photo]} alt={`Portrait of ${member.name}`} />
              <figcaption>
                <span className="cast-name">{member.name}</span>
                <span className="cast-role">{member.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <a
          className="trailer-link"
          href={`https://www.youtube.com/watch?v=${movie.trailerId}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="tri" aria-hidden="true" />
          Watch the {movie.trailerLabel}
        </a>
        <span className="trailer-note">
          {movie.trailerChannel} · opens on YouTube in a new tab
        </span>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="masthead">
        <p className="eyebrow">{INTRO.eyebrow}</p>
        <h1>{INTRO.title}</h1>
        <p className="lede">{INTRO.lede}</p>
      </header>
      <nav className="chipbar" aria-label="Films in this report">
        {MOVIES.map((movie) => (
          <a className="chip" href={`#${movie.slug}`} key={movie.slug}>
            {movie.title}
            <span className="chip-year">{movie.year}</span>
          </a>
        ))}
      </nav>
      <main>
        {MOVIES.map((movie) => (
          <FilmSection key={movie.slug} movie={movie} />
        ))}
      </main>
      <footer className="colophon">
        <p>
          Cast portraits from Wikimedia Commons; posters via Wikipedia; trailers linked to
          their official YouTube uploads. Teasers written for this report.
        </p>
        <p>Assembled for a father–daughter movie night. Pop corn accordingly.</p>
      </footer>
    </div>
  )
}
