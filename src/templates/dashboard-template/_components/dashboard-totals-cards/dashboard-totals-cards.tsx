const CardItem = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="w-full border border-zinc-300 p-2 rounded-lg flex flex-col gap-2">
      <span className="text-sm text-gray-600 font-bold">{title}</span>
      <span className="text-lg font-bold text-primary">
        {value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      </span>
    </div>
  )
}

export const DashboardTotalsCards = ({ income, expenses }: { income: number; expenses: number }) => {
  return (
    <section className="w-full h-full flex gap-4 items-start">
      <CardItem title="Total Ingresos" value={income} />
      <CardItem title="Total Egresos" value={expenses} />
    </section>
  )
}
