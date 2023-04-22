import { cloneElement, forwardRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import type { MouseEvent } from 'react'

type Props = {
  children: React.ReactElement
}

export type ModalRef =
  | {
      open: () => void
      close: () => void
      toggle: () => void
    }
  | undefined

/**
 * A simple way to use a modal component
 *
 * @example
 * const MyComponent = () => {
 *   const { ref, open } = useModal()
 *   return (
 *     <div>
 *       <button type="button" onClick={open}>
 *         open modal
 *       </button>
 *       <Modal ref={ref}>
 *         <h1>ModalComponent here</h1>
 *       </Modal>
 *     </div>
 *   )
 * }
 */
export const Modal = forwardRef<ModalRef, Props>(({ children }, ref) => {
  const [isActive, setIsActive] = useState(false)

  const open = () => setIsActive(true)
  const close = () => setIsActive(false)
  const toggle = () => setIsActive((old) => !old)

  useImperativeHandle(ref, () => ({ open, close, toggle }))

  if (!isActive) return null

  return createPortal(
    <div
      className="cursor-pointer fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      role="button"
      tabIndex={0}
      onClick={() => toggle()}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          toggle()
        }
      }}
    >
      {cloneElement(children, { onClick: (e: MouseEvent) => e.stopPropagation() })}
    </div>,
    document.body
  )
})
