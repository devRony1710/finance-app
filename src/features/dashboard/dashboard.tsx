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

  return (
    <DashboardLayout>
      <DashboardTemplate balance={balance || 0} />
    </DashboardLayout>
  )
}
