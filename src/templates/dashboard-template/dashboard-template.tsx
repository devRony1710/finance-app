import type { FC } from 'react'
import type { DashboardTemplateProps } from './dashboard-template.types'
import { DashboardCurrentBalance } from './_components/dashboard-current-balance/dashboard-current-balance'
import { DashboardTotalsCards } from './_components/dashboard-totals-cards/dashboard-totals-cards'
import { PlusCircle } from 'lucide-react'

export const DashboardTemplate: FC<DashboardTemplateProps> = ({ balance }) => {
  return (
    <section className="w-full h-full flex flex-col gap-4 items-start">
      <h3 className="text-2xl font-bold">Resumen de tu cuenta</h3>

      <DashboardCurrentBalance balance={balance} />

      <DashboardTotalsCards income={0} expenses={0} />

      <button data-testid="addButton" className="absolute bottom-4 right-4">
        <PlusCircle className="w-10 h-10 text-primary" />
      </button>
    </section>
  )
}
