import type { ReactNode } from 'react'

// The film sections, in the reading order report.mdx gives them.
function FilmList({ children }: { children: ReactNode }) {
  return <main>{children}</main>
}

export default FilmList
