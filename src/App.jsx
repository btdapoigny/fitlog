import { Outlet, useMatches } from 'react-router'
import { Navbar } from '@/components/organisms/Navbar'

function App() {
  const matches = useMatches()

  const page = matches[matches.length - 1]
  const pageTitle = page.handle?.title
  const pageClass = page.handle?.class

  return (
    <>
      <header>
        <h1>{ pageTitle }</h1>
      </header>
      <main className={ pageClass }>
        <Outlet />
        <Navbar />
      </main>
    </>
  )
}

export default App
