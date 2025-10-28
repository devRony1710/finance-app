import type { FC } from 'react'
import type { DashboardTemplateProps } from './dashboard-template.types'
import { DashboardCurrentBalance } from './_components/dashboard-current-balance/dashboard-current-balance'

export const DashboardTemplate: FC<DashboardTemplateProps> = ({ balance }) => {
  return (
    <section className="w-full h-full flex flex-col gap-4 items-start">
      <h3 className="text-2xl font-bold">Resumen de tu cuenta</h3>

      <DashboardCurrentBalance balance={balance} />
    </section>
  )
}
