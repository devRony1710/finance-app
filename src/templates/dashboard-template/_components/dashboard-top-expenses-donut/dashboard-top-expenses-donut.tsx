import { type FC } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import type { TopExpensesChartProps } from './dashboard-top-expenses-donut.types'

export const TopExpensesChart: FC<TopExpensesChartProps> = ({ data }) => {
  return (
    <div className="text-center w-full">
      <h3 className="text-lg font-bold mb-2">Top Gastos</h3>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="total" nameKey="category" innerRadius={60} outerRadius={80} paddingAngle={3}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-col gap-2 border border-zinc-300 p-2 rounded-lg">
        {data.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <span className="text-sm text-gray-600 font-semibold">{item.category}</span>
            <span className="text-sm text-primary font-semibold">
              {item.total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 font-semibold mt-2">
        Total:
        {data
          .reduce((acc, item) => acc + Number(item.total), 0)
          .toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      </p>
    </div>
  )
}
