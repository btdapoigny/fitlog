import { useParams } from 'react-router'

import { useToggle } from '@/hooks/useToggle'

import { formatSecondsToHoursMinutes } from '@/utils/time.js'
import { calculateWorkoutStats } from '@/utils/workout.js'

import { Input } from '@/components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { InfoItem } from '@/components/molecules/InfoItem'
import { CTA } from '@/components/organisms/CTA'
import { ExercicesList } from '@/components/organisms/ExercicesList'
import { Modal } from '@/components/organisms/Modal'

import { workoutTemplates } from '@/data/initialState'

import NumbersIcon from '@/assets/icons/stats/numbers.svg?react'
import ClockIcon from '@/assets/icons/stats/clock.svg?react'
import ChartIcon from '@/assets/icons/stats/chart.svg?react'
import TargetIcon from '@/assets/icons/stats/target.svg?react'

export function WorkoutTemplate() {
  const { id } = useParams()
  const [showModal, toggleShowModal] = useToggle(false)

  const template = workoutTemplates.find(template => template.id === parseInt(id))

  const ctaProps = {
    uptitle: template.uptitle,
    title: template.title,
    description: template.description,
    image: { src: template.thumbnail, alt: `Séance ${ template.title }` },
    button: {
      label: "Modifier les informations",
      handleClick: () => toggleShowModal()
    }
  }

  const { totalDuration, totalSets, totalRepsTarget } = calculateWorkoutStats(template.exercices)

  const list = template.exercices.map(exercice => {
    return {
      id: exercice.id,
      fields: [
        {
          title: "Nom",
          placeholder: "Nom de l'exercice",
          type: 'text',
          value: exercice.name,
        },
        {
          title: "Charge",
          placeholder: "0",
          type: 'number',
          suffix: "kg",
          value: exercice.weight,
        },
        {
          title: "Séries",
          placeholder: "0",
          type: 'number',
          value: exercice.sets,
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
          type: 'number',
          suffix: "secondes",
          value: exercice.restTime,
        },
      ]
    }
  })

  const submitForm = (event) => {
    event.preventDefault()
    toggleShowModal()
  }

  return (
    <>
      <CTA { ...ctaProps } />
      <InfoItem title="Nombre d'exercices" value={ template.exercices.length } icon={ NumbersIcon } />
      <InfoItem title="Durée de la séance" value={ formatSecondsToHoursMinutes(totalDuration) } icon={ ClockIcon } />
      <InfoItem title="Total de séries" value={ totalSets } icon={ ChartIcon } />
      <InfoItem title="Objectif total de répétitions" value={ totalRepsTarget } icon={ TargetIcon } />
      <ExercicesList title="Exercices" list={ list } handleAddItem={ () => {} } />
      { showModal &&
        <Modal title="Modifier le modèle" closeModal={ toggleShowModal }>
          <form onSubmit={ submitForm }>
            <Input label="Nom du modèle" type="text" placeholder="Ex. Legs" />
            <Input label="Titre secondaire" type="text" placeholder="Ex. Focus quadriceps" />
            <Input label="Description" type="textarea" placeholder="Entrer la description..." />
            <Input label="Image" type="file" placeholder="Choisir une image" />
            <Button label="Ajouter" type="submit" />
          </form>
        </Modal>
      }
    </>
  )
}