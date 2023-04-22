import { useRef } from 'react'

import type { ModalRef } from '@/components/Atoms'

export const useModal = () => {
  const ref = useRef<ModalRef>()

  return {
    ref,
    open: ref.current?.open,
    close: ref.current?.close,
    toggle: ref.current?.toggle,
  }
}
