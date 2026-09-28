// Root component — immediately.run renders the default export of THIS file.
// Global CSS is imported here (not in main.tsx) because immediately.run's
// runtime never loads main.tsx.
import './index.css'
import './App.css'
import Report from './content/report.mdx'
import { useHostThemeAttribute } from './hooks/useHostThemeAttribute'

function App() {
  useHostThemeAttribute()
  return (
    <div className="page">
      <Report />
    </div>
  )
}

export default App
