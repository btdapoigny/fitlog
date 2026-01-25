import { useToggle } from '@/hooks/useToggle'

import { Input } from '@/components/atoms/Input'
import { Button } from '../components/atoms/Button'
import { WorkoutTemplatesList } from '@/components/organisms/WorkoutTemplatesList'
import { Modal } from '@/components/organisms/Modal'

import ChestImage from '@/assets/img/chest.jpg'
import BackImage from '@/assets/img/back.jpg'
import LegsImage from '@/assets/img/legs.jpg'

export function WorkoutTemplates() {
  const [showModal, toggleShowModal] = useToggle(false)

  const submitForm = (event) => {
    event.preventDefault()
    toggleShowModal()
  }

  const workoutTemplatesListData = {
    title: "Mes modèles",
    description: "Ajouter ou modifier des modèles de séances. Chaque modèle contient l’ensemble des exercices à effectuer lors d’une séance récurrente, et peut être utilisé lors de l’ajout une nouvelle séance. Utiliser des modèles permet d’avoir un meilleur suivi de la progression de semaines en semaines. Si la séance est unique et non récurrente, il est préférable de créer une séance sans utiliser de modèle.",
    list: [
      {
        id: 1,
        title: "Push",
        uptitle: "Focus force",
        description: "Séance push avec un focus sur la force. Muscles ciblés : Pectoraux, triceps, épaules.",
        thumbnail: ChestImage
      },
      {
        id: 2,
        title: "Pull",
        uptitle: "Focus grand dorsal",
        description: "Séance pull avec un focus sur le grand dorsal. Muscles ciblés : Dos, biceps, avant-bras.",
        thumbnail: BackImage
      },
      {
        id: 3,
        title: "Legs",
        description: "Séance jambes globale. Muscles ciblées : Quadriceps, ischio-jambiers, fessiers.",
        thumbnail: LegsImage
      },
    ]
  }

  return (
    <>
      <WorkoutTemplatesList { ...workoutTemplatesListData } handleAddItem={ toggleShowModal } />
      { showModal &&
        <Modal title="Ajouter un modèle" closeModal={ toggleShowModal }>
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