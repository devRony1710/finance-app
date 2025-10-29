import { Button } from '@/components/button/button'
import { Trash } from 'lucide-react'
import type { FC } from 'react'
import type { DeleteTransactionModalProps } from './delete-transaction-modal.types'

export const DeleteTransactionModal: FC<DeleteTransactionModalProps> = ({ onClose, onDelete }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Trash size={40} className="text-red-500" />
      <p className="text-center font-bold text-lg">¿Estás seguro de eliminar esta transacción?</p>
      <div className="flex items-center justify-center gap-4 w-full">
        <Button onClick={onClose} label="Cancelar" size="small" />
        <Button onClick={onDelete} label="Eliminar" variant="destructive" size="small" />
      </div>
    </div>
  )
}
