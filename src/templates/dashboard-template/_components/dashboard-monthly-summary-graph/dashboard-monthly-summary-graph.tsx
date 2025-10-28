import { type FC } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import type { MonthlySummaryChartProps } from './dashboard-monthly-summary-graph.types'

export const MonthlySummaryChart: FC<MonthlySummaryChartProps> = ({ data }) => {
  return (
    <section className="w-full h-auto flex flex-col gap-4">
      <h3 className="text-lg font-bold">Resumen mensual</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#00C49F" radius={[6, 6, 0, 0]} />
          <Bar dataKey="expense" fill="#FF6B6B" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
