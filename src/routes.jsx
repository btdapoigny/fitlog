import { Dashboard } from '@/pages/Dashboard.jsx'
import { WorkoutSessions } from '@/pages/WorkoutSessions.jsx'
import { WorkoutTemplates } from '@/pages/WorkoutTemplates.jsx'

export const routes = [
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