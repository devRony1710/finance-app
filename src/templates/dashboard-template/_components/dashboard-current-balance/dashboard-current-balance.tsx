export const DashboardCurrentBalance = ({ balance }: { balance: number }) => {
  return (
    <div className="flex flex-col items-start gap-2 w-full border border-zinc-300 p-2 rounded-lg shadow-xl">
      <p className="text-lg font-bold text-zinc-600">Balance actual:</p>
      <span className="text-primary text-2xl font-bold tracking-wider">
        {balance.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      </span>
    </div>
  )
}
