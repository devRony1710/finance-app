import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import clsx from 'clsx'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  position?: 'right' | 'left' // Puedes abrir desde derecha o izquierda
  width?: string // Personalizable (ej: "w-96")
  colorVariant?: 'primary' | 'secondary'
}

export const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = 'right',
  width = 'w-96',
  colorVariant = 'secondary',
}: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro con blur */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Contenedor principal */}
          <motion.div
            className={`fixed top-0 h-full ${
              colorVariant === 'primary' ? 'bg-primary' : 'bg-white'
            } shadow-xl z-50 ${width} ${position === 'right' ? 'right-0' : 'left-0'} flex flex-col`}
            initial={{
              x: position === 'right' ? '100%' : '-100%',
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: position === 'right' ? '100%' : '-100%',
            }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2
                className={clsx(
                  'text-lg font-semibold font-poppins',
                  colorVariant === 'primary' ? 'text-white' : 'text-primary'
                )}
              >
                {title}
              </h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition cursor-pointer">
                <X className={clsx(colorVariant === 'primary' ? 'text-white' : 'text-primary', 'w-5 h-5')} />
              </button>
            </div>

            {/* Contenido */}
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
