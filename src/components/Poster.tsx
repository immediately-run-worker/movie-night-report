import { useState } from 'react'
import type { Movie } from '../data/movies'

// The theatrical poster, with a typographic stand-in if the image fails.
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
      src={movie.poster}
      alt={`${movie.title} (${movie.year}) theatrical poster`}
      onError={() => setFailed(true)}
    />
  )
}

export default Poster
