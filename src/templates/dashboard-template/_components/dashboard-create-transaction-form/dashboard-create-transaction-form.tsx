import { Input } from '@/components/input/input'
import { Select } from '@/components/select/select'
import { useCreateTransaction } from '@/hooks/use-create-transaction/use-create-transaction'
import { Controller } from 'react-hook-form'
import { CalendarComponent } from '@/components/calendar/calendar'
import dayjs from 'dayjs'
import { Button } from '@/components/button/button'
import type { FC } from 'react'
import type { DashboardCreateTransactionFormProps } from './dashboard-create-transaction-form.types'
import React from 'react'

const DashboardCreateTransactionForm: FC<DashboardCreateTransactionFormProps> = ({ onClose }) => {
  const { control, categoriesOptions, typeOptions, errors, handleSubmit } = useCreateTransaction(onClose)

  return (
    <section className="flex flex-col gap-4 w-full px-4 py-3 h-full justify-start mt-2">
      <span className="text-2xl font-bold text-primary">Crear transacción</span>

      <span className="text-sm text-zinc-600">Llena el formulario para crear una nueva transacción.</span>

      <form
        data-testid="form-create-transaction"
        className="flex flex-col gap-4 w-full px-4 py-6 h-auto justify-center items-center border border-zinc-600 rounded-md shadow-xl"
      >
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
            <Input label="Monto" htmlFor="amount" value={value} onChange={onChange} errors={errors.amount?.message} />
          )}
        />
        <Controller
          control={control}
          name="type"
          render={({ field: { value, onChange } }) => (
            <Select
              label={value || 'Tipo'}
              value={value}
              onChange={onChange}
              options={typeOptions}
              errors={errors.type?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="category"
          render={({ field: { value, onChange } }) => (
            <Select
              label={value || 'Categoría'}
              value={value}
              onChange={onChange}
              options={categoriesOptions}
              errors={errors.category?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <CalendarComponent
              onChange={onChange}
              buttonLabel={value ? dayjs(value).format('DD/MM/YYYY') : 'Fecha'}
              errors={errors.date?.message}
            />
          )}
        />
      </form>

      <div className="flex gap-2 w-full justify-between items-center absolute bottom-4 right-0 left-0 px-4">
        <Button data-testid="cancelButton" label="Cancelar" variant="destructive" onClick={onClose} />

        <Button data-testid="submitButton" label="Guardar" variant="primary" onClick={handleSubmit} />
      </div>
    </section>
  )
}

export default React.memo(DashboardCreateTransactionForm)
