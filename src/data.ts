export interface CastMember {
  name: string
  role: string
  photo: string
}

export interface Movie {
  slug: string
  title: string
  year: number
  director: string
  runtime: string
  rating: string
  tagline: string
  teaser: string
  poster: string
  cast: CastMember[]
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
    teaser:
      'Summer 1979, small-town Ohio: six kids shooting a zombie movie on Super 8 film witness a midnight train disaster that was no accident. As dogs vanish and neighbours disappear, the friends keep filming — and their home movie catches something the Air Force will do anything to bury. Spielberg-produced, Amblin-flavoured adventure with a beating heart.',
    poster: 'poster_super8',
    cast: [
      { name: 'Joel Courtney', role: 'Joe Lamb', photo: 'joel_courtney' },
      { name: 'Elle Fanning', role: 'Alice Dainard', photo: 'elle_fanning' },
      { name: 'Kyle Chandler', role: 'Deputy Jackson Lamb', photo: 'kyle_chandler' },
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
    teaser:
      'Twelve alien vessels hover over the globe and linguist Louise Banks is recruited to ask the one question that matters: why are they here? As fear pushes the world toward war, her translation becomes a race against time — and the visitors’ language begins rewriting how she experiences her own life. Cerebral, tender and quietly devastating science fiction.',
    poster: 'poster_arrival',
    cast: [
      { name: 'Amy Adams', role: 'Louise Banks', photo: 'amy_adams' },
      { name: 'Jeremy Renner', role: 'Ian Donnelly', photo: 'jeremy_renner' },
      { name: 'Forest Whitaker', role: 'Colonel Weber', photo: 'forest_whitaker' },
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
    teaser:
      'Major William Cage has never seen a day of combat — and dies on the beach in minutes, only to wake up yesterday. Trapped in a time loop in the middle of an alien invasion, he trains under Rita Vrataski, the war hero who once held the same power. Every death is a lesson: the perfect soldier is being built one funeral at a time.',
    poster: 'poster_edge',
    cast: [
      { name: 'Tom Cruise', role: 'Major William Cage', photo: 'tom_cruise' },
      { name: 'Emily Blunt', role: 'Rita Vrataski', photo: 'emily_blunt' },
      { name: 'Bill Paxton', role: 'Master Sergeant Farell', photo: 'bill_paxton' },
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
    teaser:
      'Depression-era New York: a desperate filmmaker ships his crew to uncharted Skull Island, where a down-on-her-luck actress becomes the offering of a colossal ape. Kong is captured and chained for a Broadway opening night — but the beast who loved her will not die quietly. Peter Jackson’s operatic remake, at once spectacular and heartbreaking.',
    poster: 'poster_kong',
    cast: [
      { name: 'Naomi Watts', role: 'Ann Darrow', photo: 'naomi_watts' },
      { name: 'Jack Black', role: 'Carl Denham', photo: 'jack_black' },
      { name: 'Adrien Brody', role: 'Jack Driscoll', photo: 'adrien_brody' },
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
    teaser:
      'A crop circle is carved into the corn of a Pennsylvania farm overnight, and ex-reverend Graham Hess — a man who has lost his faith — watches the marks multiply across the world’s news. Barricaded in the farmhouse with his children and brother, he learns that the invasion outside is nothing compared to the reckoning inside. Shyamalan at his most intimate and suspenseful.',
    poster: 'poster_signs',
    cast: [
      { name: 'Mel Gibson', role: 'Graham Hess', photo: 'mel_gibson' },
      { name: 'Joaquin Phoenix', role: 'Merrill Hess', photo: 'joaquin_phoenix' },
      { name: 'Rory Culkin', role: 'Morgan Hess', photo: 'rory_culkin' },
      { name: 'Abigail Breslin', role: 'Bo Hess', photo: 'abigail_breslin' },
    ],
    trailerId: 'dUw26F0WfLg',
    trailerLabel: 'Original theatrical trailer',
    trailerChannel: '2.8M views on YouTube',
  },
]

export const INTRO = {
  eyebrow: 'A curated family double-bill menu',
  title: 'Movie Night Report',
  lede:
    'Five films picked for a fourteen-year-old with excellent taste: alien mysteries, time-loop warfare, a train-wreck secret and the eighth wonder of the world. Every card below carries a teaser, the faces of the top cast and a link to the official trailer.',
}
