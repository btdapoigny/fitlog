import { useState } from 'react'

import { useToggle } from '@/hooks/useToggle'

import { Input } from '@/components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { CTA } from '@/components/organisms/CTA'
import { WorkoutSessionsList } from '@/components/organisms/WorkoutSessionsList'
import { Modal } from '@/components/organisms/Modal'

import WorkoutImage from '@/assets/img/workout.jpg'
import PlanningImage from '@/assets/img/planning.jpg'

export function WorkoutSessions() {
  const [toggleTemplate, setToggleTemplate] = useState(false)
  const [showModal, toggleShowModal] = useToggle(false)

  const submitForm = (event) => {
    event.preventDefault()
    toggleShowModal()
  }

  const workoutSessionCTA = {
    uptitle: "Nouvelle séance",
    title: "Démarrer une séance",
    description: "Commencer à rentrer les données d’une nouvelle séance.",
    image: { src: WorkoutImage, alt: "Séance d'entrainement" },
    button: {
      label: "Démarrer ma séance",
      handleClick: toggleShowModal
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

  const workoutSessionsListData = [
    {
      id: 1,
      name: 'Push',
      uptitle: 'Focus force',
      date: '12 janvier 2026',
      exercices: 6,
      totalSets: 20,
      totalReps: 214,
      totalVolume: 234
    },
    {
      id: 2,
      name: 'Push',
      uptitle: null,
      date: '12 janvier 2026',
      exercices: 6,
      totalSets: 20,
      totalReps: 214,
      totalVolume: 234
    },
    {
      id: 3,
      name: 'Push',
      uptitle: 'Focus force',
      date: '12 janvier 2026',
      exercices: 6,
      totalSets: 20,
      totalReps: 214,
      totalVolume: 234
    },
  ]

  return (
    <>
      <CTA { ...workoutSessionCTA } />
      <CTA { ...workoutTemplatesCTA } />
      <WorkoutSessionsList title="Mes séances" columns={ workoutSessionsListColumns } data={ workoutSessionsListData } emptyMessage="Aucune séance enregistrée." />
      { showModal && 
        <Modal title="Ajouter une séance" closeModal={ toggleShowModal }>
          <form onSubmit={ submitForm }>
            <Input label="Date" type="date" />
            <Input label="Utiliser un modèle" type="checkbox" value={ toggleTemplate } handleChange={ setToggleTemplate } />
            { toggleTemplate && <Input label="Sélectionner un modèle" type="select" options={[{ name: 'Push - Focus force', value: 1 }, { name: 'Push - Focus volume', value: 2 }]} /> }
            { !toggleTemplate &&             
              <>
                <Input label="Nom de la séance" type="text" placeholder="Ex. Legs" />
                <Input label="Sous-titre" type="text" placeholder="Ex. Focus quadriceps" />
                <Input label="Description" type="textarea" placeholder="Entrer la description..." />
              </>
            }
            <Button label="Ajouter" type="submit" />
          </form>
        </Modal>
      }
    </>
  )
}