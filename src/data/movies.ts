// The five films' facts, one record each. The chip bar lists them; each
// <Film slug> in src/content/report.mdx renders one, with its teaser prose.
// Posters and cast portraits are imported files, which the bundler inlines —
// no base64 in source.

import super8Poster from '../assets/posters/super-8.jpg'
import arrivalPoster from '../assets/posters/arrival.jpg'
import edgeOfTomorrowPoster from '../assets/posters/edge-of-tomorrow.jpg'
import kingKongPoster from '../assets/posters/king-kong.jpg'
import signsPoster from '../assets/posters/signs.jpg'
import abigailBreslin from '../assets/cast/abigail-breslin.jpg'
import adrienBrody from '../assets/cast/adrien-brody.jpg'
import amyAdams from '../assets/cast/amy-adams.jpg'
import billPaxton from '../assets/cast/bill-paxton.jpg'
import elleFanning from '../assets/cast/elle-fanning.jpg'
import emilyBlunt from '../assets/cast/emily-blunt.jpg'
import forestWhitaker from '../assets/cast/forest-whitaker.jpg'
import jackBlack from '../assets/cast/jack-black.jpg'
import jeremyRenner from '../assets/cast/jeremy-renner.jpg'
import joaquinPhoenix from '../assets/cast/joaquin-phoenix.jpg'
import joelCourtney from '../assets/cast/joel-courtney.jpg'
import kyleChandler from '../assets/cast/kyle-chandler.jpg'
import melGibson from '../assets/cast/mel-gibson.jpg'
import naomiWatts from '../assets/cast/naomi-watts.jpg'
import roryCulkin from '../assets/cast/rory-culkin.jpg'
import tomCruise from '../assets/cast/tom-cruise.jpg'

export interface CastMember {
  name: string
  role: string
  /** Imported portrait URL. */
  photo: string
}

export interface Movie {
  /** Section anchor; the chip bar links to it. */
  slug: string
  title: string
  year: number
  director: string
  runtime: string
  rating: string
  tagline: string
  /** Imported poster URL. */
  poster: string
  cast: CastMember[]
  /** YouTube video id of the official trailer. */
  trailerId: string
  trailerLabel: string
  trailerChannel: string
}

export const MOVIES: Movie[] = [
  {
    slug: 'super-8',
    title: 'Super 8',
    year: 2011,
    director: 'J. J. Abrams',
    runtime: '112 min',
    rating: 'PG-13',
    tagline: 'It arrived in their town. It found them first.',
    poster: super8Poster,
    cast: [
      { name: 'Joel Courtney', role: 'Joe Lamb', photo: joelCourtney },
      { name: 'Elle Fanning', role: 'Alice Dainard', photo: elleFanning },
      { name: 'Kyle Chandler', role: 'Deputy Jackson Lamb', photo: kyleChandler },
    ],
    trailerId: 't-0XuYxh67w',
    trailerLabel: 'Official trailer (US)',
    trailerChannel: '2.4M views on YouTube',
  },
  {
    slug: 'arrival',
    title: 'Arrival',
    year: 2016,
    director: 'Denis Villeneuve',
    runtime: '116 min',
    rating: 'PG-13',
    tagline: 'Why are they here?',
    poster: arrivalPoster,
    cast: [
      { name: 'Amy Adams', role: 'Louise Banks', photo: amyAdams },
      { name: 'Jeremy Renner', role: 'Ian Donnelly', photo: jeremyRenner },
      { name: 'Forest Whitaker', role: 'Colonel Weber', photo: forestWhitaker },
    ],
    trailerId: 'tFMo3UJ4B4g',
    trailerLabel: 'Official trailer',
    trailerChannel: 'Paramount Pictures',
  },
  {
    slug: 'edge-of-tomorrow',
    title: 'Edge of Tomorrow',
    year: 2014,
    director: 'Doug Liman',
    runtime: '113 min',
    rating: 'PG-13',
    tagline: 'Live. Die. Repeat.',
    poster: edgeOfTomorrowPoster,
    cast: [
      { name: 'Tom Cruise', role: 'Major William Cage', photo: tomCruise },
      { name: 'Emily Blunt', role: 'Rita Vrataski', photo: emilyBlunt },
      { name: 'Bill Paxton', role: 'Master Sergeant Farell', photo: billPaxton },
    ],
    trailerId: 'vw61gCe2oqI',
    trailerLabel: 'Official trailer 1',
    trailerChannel: 'Warner Bros.',
  },
  {
    slug: 'king-kong',
    title: 'King Kong',
    year: 2005,
    director: 'Peter Jackson',
    runtime: '187 min',
    rating: 'PG-13',
    tagline: 'The eighth wonder of the world.',
    poster: kingKongPoster,
    cast: [
      { name: 'Naomi Watts', role: 'Ann Darrow', photo: naomiWatts },
      { name: 'Jack Black', role: 'Carl Denham', photo: jackBlack },
      { name: 'Adrien Brody', role: 'Jack Driscoll', photo: adrienBrody },
    ],
    trailerId: 'AYaTCPbYGdk',
    trailerLabel: 'Official trailer #1',
    trailerChannel: '4.3M views on YouTube',
  },
  {
    slug: 'signs',
    title: 'Signs',
    year: 2002,
    director: 'M. Night Shyamalan',
    runtime: '106 min',
    rating: 'PG-13',
    tagline: 'When you see them, it will be too late.',
    poster: signsPoster,
    cast: [
      { name: 'Mel Gibson', role: 'Graham Hess', photo: melGibson },
      { name: 'Joaquin Phoenix', role: 'Merrill Hess', photo: joaquinPhoenix },
      { name: 'Rory Culkin', role: 'Morgan Hess', photo: roryCulkin },
      { name: 'Abigail Breslin', role: 'Bo Hess', photo: abigailBreslin },
    ],
    trailerId: 'dUw26F0WfLg',
    trailerLabel: 'Original theatrical trailer',
    trailerChannel: '2.8M views on YouTube',
  },
]
