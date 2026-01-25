import { classList } from '@/utils/classList'
import { Button } from "@/components/atoms/Button"

import WorkoutThumbnail from '@/assets/img/workout-thumbnail.svg'

export function WorkoutTemplateItem({ title, uptitle, description, slug, thumbnail }) {
  return (
    <article className="workout-template-item">
      <div className={ classList('workout-template-item__image', { 'has-gradiant' : thumbnail }) }>
        <img src={ thumbnail ?? WorkoutThumbnail } />
      </div>
      <div className="workout-template-item__content">
        { uptitle && <span className="workout-template-item__content__uptitle">{ uptitle }</span> }
        <h3 className="workout-template-item__content__title">{ title }</h3>
        <p className="workout-template-item__content__description">{ description }</p>
        <Button label="Voir plus" path={ `/modeles/${ slug }` } />
      </div>
    </article>
  )
}