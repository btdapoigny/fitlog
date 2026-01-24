import { useId, useState } from "react"

export function Input({ value, handleChange, label, placeholder, type, options }) {
  const id = useId()
  const [preview, setPreview] = useState()

  const updateFile = (event) => {
    Object.values(event.target.files).forEach((file) => {
      const reader = new FileReader()
      reader.addEventListener("load", (_) => setPreview(reader.result))
      reader.readAsDataURL(file)
    })
  }

  return (
    <div className={ `input input--${ type }` }>
      { type !== 'checkbox' && <label className="input__label" htmlFor={ id }>{ label }</label> }
      { type === 'text' && <input id={ id } type="text" placeholder={ placeholder } /> }
      { type === 'date' && <input id={ id } type="date" placeholder={ placeholder } /> }
      { (type === 'select' && options) && 
        <select id={ id }>
          <option value="">Séléctionner</option>
          { options.map(option => <option key={ option.value } value={ option.value }>{ option.name }</option>) }
        </select> 
      }
      { type === 'textarea' && <textarea id={ id } placeholder={ placeholder }></textarea> }
      { type === 'file' && 
        <div className="input__wrapper--file">
          <span>{ placeholder }</span>
          <input onChange={ updateFile } id={ id } type="file" accept="image/png, image/jpeg" /> 
          { preview && <img src={ preview } /> }
        </div>
      }
      { type === 'checkbox' &&
        <div className="input__wrapper--checkbox">
          <input id={ id } checked={ value } onChange={ (event) => handleChange(event.target.checked) } type="checkbox" />
          <label className="input__checkbox" htmlFor={ id }>
            <span className="input__checkbox__switcher"></span>
            <span className="input__checkbox__label">{ label }</span>
          </label>
        </div>
      }
    </div>
  )
}