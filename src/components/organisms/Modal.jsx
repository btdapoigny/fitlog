export function Modal({ title, children, closeModal }) {
  const handleClose = (event) => {
    if (event.target !== event.currentTarget) return
    closeModal()
  }

  return (
    <div className="modal" onClick={ handleClose }>
      <div className="modal__inner">
        <h2 className="modal__title">{ title }</h2>
        <div className="modal__content">
          { children }
        </div>
      </div>
    </div>
  )
}