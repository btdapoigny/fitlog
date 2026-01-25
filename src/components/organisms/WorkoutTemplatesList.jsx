import { AddItem } from "@/components/molecules/AddItem"
import { WorkoutTemplateItem } from "@/components/molecules/WorkoutTemplateItem"

export function WorkoutTemplatesList({ title, description, list }) {
  return (
    <section className="workout-templates-list">
      <h2 className="workout-templates-list__title">{ title }</h2>
      <p className="workout-templates-list__description">{ description }</p>
      <div className="workout-templates-list__wrapper">
        { list.map(item => <WorkoutTemplateItem key={ item.id } { ...item } />) }
        <AddItem label="Ajouter un modèle" />
      </div>
    </section>
  )
}