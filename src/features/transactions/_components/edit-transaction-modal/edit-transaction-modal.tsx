import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import type { FC } from 'react'
import type { EditTransactionModalProps } from './edit-transaction-modal.types'
import { useEditTransactionModal } from './_logic/use-edit-transaction-modal'
import { Controller } from 'react-hook-form'

export const EditTransactionModal: FC<EditTransactionModalProps> = ({
  selectedTransaction,
  handleUpdateTransaction,
}) => {
  const { control, errors, watch } = useEditTransactionModal(
    selectedTransaction?.name || '',
    selectedTransaction?.amount || 0
  )

  return (
    <section className="w-full h-full flex flex-col gap-4 px-4 py-3">
      <span className="text-2xl font-bold text-primary">Editar transacción</span>

      <form
        data-testid="form-edit-transaction"
        className="flex flex-col gap-4 w-full px-4 py-6 h-auto justify-center items-center border border-zinc-600 rounded-md shadow-xl"
      >
        <span className="text-sm text-zinc-600">Llena el formulario para editar una transacción.</span>

        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <Input label="Nombre" htmlFor="name" value={value} onChange={onChange} errors={errors.name?.message} />
          )}
        />

        <Controller
          control={control}
          name="amount"
          render={({ field: { value, onChange } }) => (
            <Input
              type="number"
              label="Monto"
              htmlFor="amount"
              value={value ?? ''}
              onChange={(e) => {
                const val = e.target.value
                onChange(val === '' ? undefined : Number(val))
              }}
              errors={errors.amount?.message}
            />
          )}
        />
      </form>

      <div className="flex gap-2 w-full justify-between lg:justify-end items-center absolute bottom-2 right-0 left-0 px-4">
        <Button data-testid="cancelButton" label="Cancelar" variant="destructive" onClick={() => {}} />

        <Button
          data-testid="submitButton"
          label="Guardar"
          variant="primary"
          onClick={() => {
            handleUpdateTransaction({
              title: watch('name'),
              amount: watch('amount') || 0,
            })
          }}
          disabled={false}
        />
      </div>
    </section>
  )
}
