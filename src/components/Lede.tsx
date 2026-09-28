import type { ReactNode } from 'react'

// The standfirst under the title. MDX wraps the prose in a <p>, so this is a div.
function Lede({ children }: { children: ReactNode }) {
  return <div className="lede">{children}</div>
}

export default Lede
