import { Outlet, useMatches } from 'react-router'

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
      </main>
    </>
  )
}

export default App
