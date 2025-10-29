import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { DashboardTemplate } from '@/templates/dashboard-template/dashboard-template'
import { useDashboard } from './_logic/use-dashboard'

export const Dashboard = () => {
  const { balance, totals, monthlySummary, topExpenses, openCreateTransactionModal, setOpenCreateTransactionModal } =
    useDashboard()

  return (
    <DashboardLayout>
      <DashboardTemplate
        balance={balance ?? 0}
        income={totals?.incomes ?? 0}
        expenses={totals?.expenses ?? 0}
        graphData={monthlySummary ?? []}
        topExpenses={topExpenses ?? []}
        configUseDashboard={{
          openCreateTransactionModal,
          setOpenCreateTransactionModal,
        }}
      />
    </DashboardLayout>
  )
}
