import { Button } from "../atoms/Button";

export function CTA({ uptitle, title, description, button, image }) {
  return (
    <div className="cta">
      { image && <img className="cta__image" src={ image.src } alt={ image.alt } /> }
      <div className="cta__content">
        <span className="cta__content__uptitle">{ uptitle }</span>
        <h2 className="cta__content__title">{ title }</h2>
        <p className="cta__content__description">{ description }</p>
        { button && <Button { ...button } />}
      </div>
    </div>
  )
}