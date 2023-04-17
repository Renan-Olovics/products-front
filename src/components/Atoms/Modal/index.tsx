import React, { cloneElement } from 'react'
import { createPortal } from 'react-dom'
import type { MouseEvent } from 'react'

type Props = {
  active?: boolean
  children: JSX.Element
  toggleModal?: () => void
}

export const Modal = ({ children, active, toggleModal }: Props) => {
  if (!active) return null

  return createPortal(
    <div
      className="cursor-pointer fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      role="button"
      tabIndex={0}
      onClick={() => toggleModal?.()}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          toggleModal?.()
        }
      }}
    >
      {cloneElement(children, { onClick: (e: MouseEvent) => e.stopPropagation() })}
    </div>,
    document.body
  )
}
