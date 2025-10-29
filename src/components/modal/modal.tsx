import { useClickOutside } from '@/hooks/use-click-outside/use-click-outside'
import clsx from 'clsx'
import { XIcon } from 'lucide-react'
import { useRef, type ReactNode, type RefObject } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: ReactNode
  onClose: () => void
  className?: string
}

export const Modal = ({ children, onClose, className }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)
  useClickOutside(ref as RefObject<HTMLElement>, onClose)
  const portalRoot = document.getElementById('modal-root')
  if (!portalRoot) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div className={clsx('fixed inset-0 z-40', 'bg-black/50 backdrop-blur-[0px]')} aria-hidden="true" />

      {/* Modal container */}
      <div
        ref={ref}
        className={clsx(
          'rounded-md h-full w-full max-lg:max-w-[90%] max-lg:max-h-[90%] lg:max-w-[900px] lg:max-h-[500px] flex items-center justify-center',
          'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
          'border border-zinc-600 bg-white shadow-xl',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-primary cursor-pointer bg-primary-400 rounded-full z-[101] cursor-pointer"
        >
          <XIcon />
        </button>
        {children}
      </div>
    </>,
    portalRoot
  )
}
