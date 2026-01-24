import { useState } from 'react'

import { Input } from '@/components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { CTA } from '@/components/organisms/CTA'
import { WorkoutsList } from '@/components/organisms/WorkoutsList'
import { Modal } from '@/components/organisms/Modal'

import WorkoutImage from '@/assets/img/workout.jpg'
import PlanningImage from '@/assets/img/planning.jpg'

export function WorkoutSessions() {
  const [toggleTemplate, setToggleTemplate] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const submitForm = (event) => {
    event.preventDefault()
    setShowModal(false)
  }

  const workoutSessionCTA = {
    uptitle: "Nouvelle séance",
    title: "Démarrer une séance",
    description: "Commencer à rentrer les données d’une nouvelle séance.",
    image: { src: WorkoutImage, alt: "Séance d'entrainement" },
    button: {
      label: "Démarrer ma séance",
      handleClick: () => setShowModal(true)
    }
  }

  const workoutTemplatesCTA = {
    uptitle: "Nouveau modèle",
    title: "Créer un nouveau modèle" ,
    description:"Ajouter un modèle de séance à utiliser lors de l’ajout de nouvelles séances.",
    image: { src: PlanningImage, alt: "Planification de l'entrainement" },
    button: {
      label: "Créer mon modèle",
      path: "/modeles"
    }
  }

  const workoutListColumns = ['Nom', 'Date', 'Exercices', 'Total séries', 'Total répétitions', 'Total volume']

  const workoutsListData = [
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
      <WorkoutsList title="Mes séances" columns={ workoutListColumns } data={ workoutsListData } emptyMessage="Aucune séance enregistrée." />
      { showModal && 
        <Modal title="Ajouter une séance" closeModal={ () => setShowModal(!showModal) }>
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