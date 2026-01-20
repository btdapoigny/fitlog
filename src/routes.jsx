import { Dashboard } from '@/pages/Dashboard.jsx'
import { WorkoutSessions } from '@/pages/WorkoutSessions.jsx'
import { WorkoutTemplates } from '@/pages/WorkoutTemplates.jsx'

import HomeIcon from '@/assets/icons/home.svg?react'
import CalendarIcon from '@/assets/icons/calendar.svg?react'
import FileIcon from '@/assets/icons/file.svg?react'

export const routes = [
  {
    path: '/', 
    element: <Dashboard />,
    handle: {
      title: 'Dashboard',
      icon: HomeIcon,
    },
  },
  {
    path: '/seances', 
    element: <WorkoutSessions />,
    handle: {
      title: 'Séances',
      icon: CalendarIcon,
    },
  },
  {
    path: '/modeles', 
    element: <WorkoutTemplates />,
    handle: {
      title: 'Modèles',
      icon: FileIcon,
    },
  },
]