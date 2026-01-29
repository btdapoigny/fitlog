import { resolveWorkoutSession } from '@/utils/workout'

import { InfoItem } from '@/components/molecules/InfoItem'
import { CTA } from '@/components/organisms/CTA'
import { WorkoutSessionsList } from '@/components/organisms/WorkoutSessionsList'

import { workoutTemplates, workoutSessions } from '@/data/initialState'

import WorkoutImage from '@/assets/img/workout.jpg'
import PlanningImage from '@/assets/img/planning.jpg'
import CheckIcon from '@/assets/icons/stats/check.svg?react'
import ChartTrendIcon from '@/assets/icons/stats/chart-trend.svg?react'
import NextIcon from '@/assets/icons/stats/next.svg?react'
import ChartIcon from '@/assets/icons/stats/chart.svg?react'

export function Dashboard() {
  const workoutSessionCTA = {
    uptitle: "Séances",
    title: "Ajouter des séances",
    description: "Accéder aux séances et tracker sa progression de semaine en semaine.",
    image: { src: WorkoutImage, alt: "Séance d'entrainement" },
    button: {
      label: "Voir mes séances",
      path: "/seances"
    }
  }

  const workoutTemplatesCTA = {
    uptitle: "Modèles",
    title: "Ajouter des modèles" ,
    description:"Accéder aux modèles à utiliser lors de l’ajout de nouvelles séances.",
    image: { src: PlanningImage, alt: "Planification de l'entrainement" },
    button: {
      label: "Voir mes modèles",
      path: "/modeles"
    }
  }

  const workoutSessionsListColumns = ['Nom', 'Date', 'Exercices', 'Total séries', 'Total répétitions', 'Total volume']

  const workoutSessionsListData = workoutSessions.slice(-5).map(session => resolveWorkoutSession(session, workoutTemplates))

  return (
    <>
      <InfoItem title="Séances de la semaine" value="3" reference="5" progress={ 60 } icon={ CheckIcon } />
      <InfoItem title="Volume total de la semaine" value="3565" suffix="kg" trendPercentage={ 2 } icon={ ChartTrendIcon } />
      <InfoItem title="Prochaine séance" value="Push" icon={ NextIcon } />
      <InfoItem title="Total des séances" value="34" icon={ ChartIcon } />
      <CTA { ...workoutSessionCTA } />
      <CTA { ...workoutTemplatesCTA } />
      <WorkoutSessionsList title="Dernières séances" columns={ workoutSessionsListColumns } data={ workoutSessionsListData } button={{ label: 'Voir tout', path: '/seances' }} emptyMessage="Aucune séance enregistrée." />
    </>
  )
}