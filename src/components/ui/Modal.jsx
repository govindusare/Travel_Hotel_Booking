function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__content">
        <button type="button" className="modal__close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
