import { getMonthlySummaryRpc } from '@/api/get/get-monthly-summary/get-monthly-summary'
import { getTotals } from '@/api/get/get-totals/get-totals'
import { getBalanceRpc } from '@/api/get/get-user-balance/get-user-balance'
import { useAuth } from '@/context/auth-context/auth-context'
import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { DashboardTemplate } from '@/templates/dashboard-template/dashboard-template'
import { useQuery } from '@tanstack/react-query'

export const Dashboard = () => {
  const { user } = useAuth()

  const { data: balance } = useQuery({
    queryKey: ['balance', user?.id],
    queryFn: () => getBalanceRpc(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: totals } = useQuery({
    queryKey: ['totals', user?.id],
    queryFn: () => getTotals(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: monthlySummary } = useQuery({
    queryKey: ['monthlySummary', user?.id],
    queryFn: () => getMonthlySummaryRpc(user?.id || ''),
    enabled: !!user?.id,
  })
  console.log('🚀 ~ Dashboard ~ monthlySummary:', monthlySummary)

  return (
    <DashboardLayout>
      <DashboardTemplate
        balance={balance || 0}
        income={totals?.incomes || 0}
        expenses={totals?.expenses || 0}
        graphData={monthlySummary || []}
      />
    </DashboardLayout>
  )
}
