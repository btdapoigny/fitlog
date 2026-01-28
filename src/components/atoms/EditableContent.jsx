import { useRef, useEffect } from 'react'

export function EditableContent({ value, onChange, type, placeholder }) {
  const ref = useRef(null)
  const isNumber = type === 'number'

  // Sync the DOM with the controlled value
  useEffect(() => {
    if (!ref.current) return

    const text = ref.current.textContent ?? ''

    if (value !== text) ref.current.textContent = value || ''
  }, [value])

  const handleInput = (event) => {
    // onChange(event.currentTarget.textContent)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      ref.current.blur()
    }
  }

  return (
    <span className="editable-content"
      ref={ ref }
      contentEditable
      suppressContentEditableWarning
      inputMode={ isNumber ? 'numeric' : 'text' }

      role="textbox"
      aria-label={ placeholder }
      data-placeholder={ placeholder }
      data-has-placeholder={ Boolean(placeholder) }

      spellCheck={ false }
      onInput={ handleInput }
      onKeyDown={ handleKeyDown }
    />
  )
}