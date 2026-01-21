import { Dashboard } from '@/pages/Dashboard.jsx'
import { WorkoutSessions } from '@/pages/WorkoutSessions.jsx'
import { WorkoutTemplates } from '@/pages/WorkoutTemplates.jsx'

import HomeIcon from '@/assets/icons/navbar/home.svg?react'
import CalendarIcon from '@/assets/icons/navbar/calendar.svg?react'
import FileIcon from '@/assets/icons/navbar/file.svg?react'

export const routes = [
  {
    path: '/', 
    element: <Dashboard />,
    handle: {
      title: 'Dashboard',
      class: 'dashboard',
      icon: HomeIcon,
    },
  },
  {
    path: '/seances', 
    element: <WorkoutSessions />,
    handle: {
      title: 'Séances',
      class: 'workout-sessions',
      icon: CalendarIcon,
    },
  },
  {
    path: '/modeles', 
    element: <WorkoutTemplates />,
    handle: {
      title: 'Modèles',
      class: 'workout-templates',
      icon: FileIcon,
    },
  },
]