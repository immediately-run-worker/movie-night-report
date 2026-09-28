import type { ReactNode } from 'react'

function Masthead({ children }: { children: ReactNode }) {
  return <header className="masthead">{children}</header>
}

export default Masthead
