import { getProgressPercentage } from '@/utils/getProgressPercentage'

import { InfoItem } from '@/components/molecules/InfoItem'
import { CTA } from '@/components/organisms/CTA'
import { ExercicesList } from '@/components/organisms/ExercicesList'

import ChestImage from '@/assets/img/chest.jpg'
import NumbersIcon from '@/assets/icons/stats/numbers.svg?react'
import ChartIcon from '@/assets/icons/stats/chart.svg?react'
import ChartTrendIcon from '@/assets/icons/stats/chart-trend.svg?react'
import TargetIcon from '@/assets/icons/stats/target.svg?react'

export function WorkoutSession() {
  const sessionCTA = {
    uptitle: "Focus force",
    title: "Push",
    description: "Séance push avec un focus sur la force. Muscles ciblés : Pectoraux, triceps, épaules.",
    image: { src: ChestImage, alt: "Séance d'entrainement" },
    button: {
      label: "Modifier",
      handleClick: () => toggleShowModal()
    }
  }

  const exercicesData = [
    {
      id: 1,
      name: 'Écarté à la poulie',
      weight: 7.5,
      repsTarget: 15,
      restTime: 90,
      sets: [
        { reps: 15 },
        { reps: 13 },
        { reps: 12 },
      ],
    },
    {
      id: 2,
      name: 'Développé décliné',
      weight: 80,
      repsTarget: 8,
      restTime: 180,
      sets: [
        { reps: 8 },
        { reps: 7 },
      ],
    },
  ]

  const totals = exercicesData.reduce(
    (acc, exercice) => {
      const setsCount = exercice.sets.length
      const reps = exercice.sets.reduce((sum, set) => sum + set.reps, 0)

      acc.reps += reps
      acc.repsTarget += (exercice.repsTarget * setsCount)
      acc.sets += setsCount
      acc.volume += reps * exercice.weight
      return acc
    },
    { reps: 0, repsTarget: 0, sets: 0, volume: 0 }
  )

  const list = exercicesData.map(exercice => {
    return {
      id: exercice.id,
      fields: [
        {
          title: "Nom",
          placeholder: "Nom de l'exercice",
          type: "text",
          value: exercice.name,
        },
        {
          title: "Charge",
          placeholder: "0",
          type: "number",
          suffix: "kg",
          value: exercice.weight,
        },
        {
          title: "Objectif de répétitions",
          placeholder: "0",
          type: 'number',
          value: exercice.repsTarget,
        },
        {
          title: "Temps de repos",
          placeholder: "30",
          type: "number",
          suffix: "secondes",
          value: exercice.restTime,
        },
      ],
      sets: exercice.sets.map((set, index) => {
        return {
          title: `Série ${ index + 1 }`,
          placeholder: "0",
          type: "number",
          suffix: "répétitions",
          value: set.reps,
          progress: getProgressPercentage(set.reps, exercice.repsTarget)
        }
      })
    }
  })

  return (
    <>
      <CTA { ...sessionCTA } />
      <InfoItem title="Nombre d'exercices" value={ exercicesData.length } icon={ NumbersIcon } />
      <InfoItem title="Total de séries" value={ totals.sets } icon={ ChartIcon } />
      <InfoItem title="Total de répétitions" value={ totals.reps } reference={ totals.repsTarget } icon={ TargetIcon } />
      <InfoItem title="Volume total" value={ totals.volume } suffix="kg" icon={ ChartTrendIcon } />
      <ExercicesList title="Exercices" list={ list } handleAddItem={ () => {} } />
    </>
  )
}