import { useToggle } from '@/hooks/useToggle'

import { formatSecondsToHoursMinutes } from '@/utils/time.js'

import { Input } from '@/components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { InfoItem } from '@/components/molecules/InfoItem'
import { CTA } from '@/components/organisms/CTA'
import { ExercicesList } from '@/components/organisms/ExercicesList'
import { Modal } from '@/components/organisms/Modal'

import ChestImage from '@/assets/img/chest.jpg'
import NumbersIcon from '@/assets/icons/stats/numbers.svg?react'
import ClockIcon from '@/assets/icons/stats/clock.svg?react'
import ChartIcon from '@/assets/icons/stats/chart.svg?react'
import TargetIcon from '@/assets/icons/stats/target.svg?react'

export function WorkoutTemplate() {
  const [showModal, toggleShowModal] = useToggle(false)

  const templateCTA = {
    uptitle: "Focus force",
    title: "Push",
    description: "Séance push avec un focus sur la force. Muscles ciblés : Pectoraux, triceps, épaules.",
    image: { src: ChestImage, alt: "Séance d'entrainement" },
    button: {
      label: "Modifier",
      handleClick: () => toggleShowModal()
    }
  }

  const submitForm = (event) => {
    event.preventDefault()
    toggleShowModal()
  }

  const exercicesData = [
    {
      id: 1,
      name: 'Écarté à la poulie',
      weight: 7.5,
      sets: 3,
      repsTarget: 15,
      restTime: 90
    },
    {
      id: 2,
      name: 'Développé décliné',
      weight: 80,
      sets: 3,
      repsTarget: 8,
      restTime: 180
    },
  ]

  const totals = exercicesData.reduce(
    (acc, exercice) => {
      acc.restTime += exercice.restTime
      acc.repsTarget += exercice.repsTarget
      acc.sets += exercice.sets
      return acc
    },
    { restTime: 0, repsTarget: 0, sets: 0 }
  )

  const list = exercicesData.map(exercice => {
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

  return (
    <>
      <CTA { ...templateCTA } />
      <InfoItem title="Nombre d'exercices" value={ exercicesData.length } icon={ NumbersIcon } />
      <InfoItem title="Durée de la séance" value={ formatSecondsToHoursMinutes(totals.restTime) } icon={ ClockIcon } />
      <InfoItem title="Total de séries" value={ totals.sets } icon={ ChartIcon } />
      <InfoItem title="Objectif total de répétitions" value={ totals.repsTarget } icon={ TargetIcon } />
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