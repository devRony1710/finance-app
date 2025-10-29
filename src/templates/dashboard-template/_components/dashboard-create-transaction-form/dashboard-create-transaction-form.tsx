import { Input } from '@/components/input/input'

export const DashboardCreateTransactionForm = () => {
  return (
    <section className="flex flex-col gap-4 w-full px-4 py-3 h-full justify-center">
      <span className="text-2xl font-bold text-primary">Crear transacción</span>
      <span className="text-sm text-zinc-600">Llena el formulario para crear una nueva transacción.</span>
      <form className="flex flex-col gap-4 w-full px-4 py-6 h-auto justify-center items-center border border-zinc-600 rounded-md shadow-xl">
        <Input label="Nombre" htmlFor="name" />
        <Input label="Monto" htmlFor="amount" />
        <Input label="Categoría" htmlFor="category" />
        <Input label="Fecha" htmlFor="date" />
        <Input label="Descripción" htmlFor="description" />
      </form>
    </section>
  )
}
