import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import App from './App.jsx'
import { Dashboard } from './pages/Dashboard.jsx'
import { WorkoutSessions } from './pages/WorkoutSessions.jsx'
import { WorkoutTemplates } from './pages/WorkoutTemplates.jsx'

import './assets/scss/bundle.scss';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { 
        path: '/', 
        element: <Dashboard />,
        handle: {
          title: 'Dashboard',
        },
      },
      { 
        path: '/seances', 
        element: <WorkoutSessions />,
        handle: {
          title: 'Séances',
        },
      },
      { 
        path: '/modeles', 
        element: <WorkoutTemplates />,
        handle: {
          title: 'Modèles',
        },
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
  </StrictMode>
)
