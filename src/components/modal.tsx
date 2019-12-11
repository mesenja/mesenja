import React, { FunctionComponent, useEffect } from 'react'

interface Props {
  onClose: () => void
}

export const Modal: FunctionComponent<Props> = ({ children, onClose }) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-modal z-50">
      <div className="shadow-lg max-h-almost max-w-almost overflow-auto rounded">
        {children}
      </div>
    </div>
  )
}
