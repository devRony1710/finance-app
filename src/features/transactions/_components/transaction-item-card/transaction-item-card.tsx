import { formatTypeLabel } from '../../_lib/format-type-label'
import dayjs from 'dayjs'
import { EllipsisVertical, Pencil, Trash } from 'lucide-react'
import { type FC } from 'react'
import type { TransactionItemCardProps } from './transaction-item-card.types'

const LabelCardItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <span className="text-sm inline-flex items-center gap-2">
      {label}: <span className="font-semibold text-primary text-md">{value}</span>
    </span>
  )
}

export const TransactionItemCard: FC<TransactionItemCardProps> = ({
  transaction,
  onClickEdit,
  onClickDelete,
  selectedId,
  setSelectedId,
}) => {
  return (
    <div className="w-full flex items-start justify-between flex-col min-h-[100px] p-4 border border-zinc-600 rounded-md relative">
      <LabelCardItem label="Nombre" value={transaction.title} />
      <LabelCardItem
        label="Valor"
        value={transaction.amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      />

      <div className="grid grid-cols-2">
        <LabelCardItem label="Tipo" value={formatTypeLabel(transaction?.type as string)} />
        <LabelCardItem label="Fecha" value={dayjs(transaction.date).format('DD/MM/YYYY')} />
      </div>

      <div className="absolute right-0 top-0 w-10 h-10 flex items-center justify-center">
        <button
          type="button"
          className="bg-primary flex items-center justify-center w-6 h-6 text-white rounded-md"
          onClick={() => setSelectedId(transaction.id)}
        >
          <EllipsisVertical size={16} />
        </button>
      </div>

      {selectedId === transaction.id && (
        <div className="absolute right-10 bottom-0 w-40 bg-white z-10 border border-zinc-600 shadow-xl rounded-md text-black font-bold">
          <button
            type="button"
            className="w-full p-2 text-left hover:bg-zinc-100 disabled:opacity-30 border-b border-black flex items-center gap-2"
            onClick={() => onClickEdit(transaction)}
          >
            Editar
            <Pencil size={16} />
          </button>
          <button
            type="button"
            className="w-full p-2 text-left hover:bg-zinc-100 flex items-center gap-2 text-red-500"
            onClick={() => onClickDelete(transaction)}
          >
            Eliminar
            <Trash size={16} />
          </button>
        </div>
      )}
    </div>
  )
}
