import { Button } from "@/components/atoms/Button"

import WorkoutThumbnail from '@/assets/img/workout-thumbnail.svg'

export function WorkoutTemplateItem({ title, uptitle, description, slug, thumbnail }) {
  return (
    <article className="workout-template-item">
      <div className={`workout-template-item__image ${ thumbnail ? 'has-gradiant' : '' }`}>
        <img src={ thumbnail ?? WorkoutThumbnail } />
      </div>
      <div className="workout-template-item__content">
        { true && <span className="workout-template-item__content__uptitle">{ uptitle ?? <span>&nbsp;</span> }</span> }
        <h3 className="workout-template-item__content__title">{ title }</h3>
        <p className="workout-template-item__content__description">{ description }</p>
        <Button label="Voir plus" path={ `/modeles/${ slug }` } />
      </div>
    </article>
  )
}