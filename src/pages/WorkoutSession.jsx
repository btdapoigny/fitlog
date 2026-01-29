import { useParams } from 'react-router'

import { useToggle } from '@/hooks/useToggle'

import { getProgressPercentage } from '@/utils/helpers'
import { resolveWorkoutSession } from '@/utils/workout'

import { Input } from '@/components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { InfoItem } from '@/components/molecules/InfoItem'
import { CTA } from '@/components/organisms/CTA'
import { ExercicesList } from '@/components/organisms/ExercicesList'
import { Modal } from '@/components/organisms/Modal'

import { workoutTemplates, workoutSessions } from '@/data/initialState'

import WorkoutThumbnail from '@/assets/img/workout-thumbnail.svg'
import NumbersIcon from '@/assets/icons/stats/numbers.svg?react'
import ChartIcon from '@/assets/icons/stats/chart.svg?react'
import ChartTrendIcon from '@/assets/icons/stats/chart-trend.svg?react'
import TargetIcon from '@/assets/icons/stats/target.svg?react'

export function WorkoutSession() {
  const { id } = useParams()
  const [showModal, toggleShowModal] = useToggle(false)

  const initialSession = workoutSessions.find(session => session.id === parseInt(id))
  const session = resolveWorkoutSession(initialSession, workoutTemplates)

  const sessionCTA = {
    uptitle: session.uptitle,
    title: session.title,
    description: session.description,
    image: { src: session.thumbnail ?? WorkoutThumbnail, alt: "Séance d'entrainement" },
    button: {
      label: session.templateId ? "Voir le modèle" : "Modifier les informations",
      path: session.templateId ? `/modeles/${ session.templateId }` : null,
      handleClick: session.templateId ? null : toggleShowModal
    }
  }

  const list = session.exercices.map(exercice => {
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

  const submitForm = (event) => {
    event.preventDefault()
    toggleShowModal()
  }

  return (
    <>
      <CTA { ...sessionCTA } />
      <InfoItem title="Nombre d'exercices" value={ session.exercices.length } icon={ NumbersIcon } />
      <InfoItem title="Total de séries" value={ session.totalSets } icon={ ChartIcon } />
      <InfoItem title="Total de répétitions" value={ session.totalReps } reference={ session.totalRepsTarget } icon={ TargetIcon } />
      <InfoItem title="Volume total" value={ session.totalVolume } suffix="kg" icon={ ChartTrendIcon } />
      <ExercicesList title="Exercices" list={ list } handleAddItem={ () => {} } />
      { showModal &&
        <Modal title="Modifier la séance" closeModal={ toggleShowModal }>
          <form onSubmit={ submitForm }>
            <Input label="Nom de la séance" type="text" placeholder="Ex. Legs" />
            <Input label="Surtitre" type="text" placeholder="Ex. Focus quadriceps" />
            <Input label="Description" type="textarea" placeholder="Entrer la description..." />
            <Input label="Image" type="file" placeholder="Choisir une image" />
            <Button label="Enregistrer" type="submit" />
          </form>
        </Modal>
      }
    </>
  )
}