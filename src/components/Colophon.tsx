import type { ReactNode } from 'react'

function Colophon({ children }: { children: ReactNode }) {
  return <footer className="colophon">{children}</footer>
}

export default Colophon
