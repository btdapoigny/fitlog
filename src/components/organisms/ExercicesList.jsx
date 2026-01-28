import { AddItem } from "@/components/molecules/AddItem"
import { ExerciceItem } from "@/components/organisms/ExerciceItem"

export function ExercicesList({ title, list, handleAddItem }) {
  return (
    <section className="exercices-list">
      <h2 className="exercices-list__title">{ title }</h2>
      <div className="exercices-list__wrapper">
        { list.map(item => <ExerciceItem key={ item.id } fields={ item.fields } sets={ item.sets } />) }
        <AddItem label="Ajouter un exercice" handleClick={ handleAddItem } />
      </div>
    </section>
  )
}