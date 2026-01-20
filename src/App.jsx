import { Outlet, useMatches } from 'react-router'
import { Navbar } from '@/components/organisms/Navbar'

function App() {
  const matches = useMatches()

  const pageTitle = matches[matches.length - 1].handle?.title

  return (
    <>
      <header>
        <h1>{ pageTitle }</h1>
      </header>
      <main>
        <Outlet />
        <Navbar />
      </main>
    </>
  )
}

export default App
