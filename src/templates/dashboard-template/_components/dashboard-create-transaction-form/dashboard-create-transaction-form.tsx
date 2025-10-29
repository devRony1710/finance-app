import { Input } from '@/components/input/input'
import { Select } from '@/components/select/select'
import { useCreateTransaction } from '@/hooks/use-create-transaction/use-create-transaction'
import { Controller } from 'react-hook-form'

export const DashboardCreateTransactionForm = () => {
  const { control } = useCreateTransaction()
  return (
    <section className="flex flex-col gap-4 w-full px-4 py-3 h-full justify-center">
      <span className="text-2xl font-bold text-primary">Crear transacción</span>

      <span className="text-sm text-zinc-600">Llena el formulario para crear una nueva transacción.</span>

      <form className="flex flex-col gap-4 w-full px-4 py-6 h-auto justify-center items-center border border-zinc-600 rounded-md shadow-xl">
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <Input label="Nombre" htmlFor="name" value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="amount"
          render={({ field: { value, onChange } }) => (
            <Input label="Monto" htmlFor="amount" value={value} onChange={onChange} />
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
              options={[
                {
                  value: '1',
                  label: 'Categoría 1',
                },
                {
                  value: '2',
                  label: 'Categoría 2',
                },
                {
                  value: '3',
                  label: 'Categoría 3',
                },
              ]}
            />
          )}
        />
        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <Input label="Fecha" htmlFor="date" value={value} onChange={onChange} />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <Input label="Descripción" htmlFor="description" value={value} onChange={onChange} />
          )}
        />
      </form>
    </section>
  )
}
