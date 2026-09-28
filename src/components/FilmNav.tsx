import { MOVIES } from '../data/movies'

// Sticky chip bar of in-page links; each `#slug` scrolls within the app frame.
function FilmNav() {
  return (
    <nav className="chipbar" aria-label="Films in this report">
      {MOVIES.map((movie) => (
        <a className="chip" href={`#${movie.slug}`} key={movie.slug}>
          {movie.title}
          <span className="chip-year">{movie.year}</span>
        </a>
      ))}
    </nav>
  )
}

export default FilmNav
