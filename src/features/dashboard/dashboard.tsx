import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { DashboardTemplate } from '@/templates/dashboard-template/dashboard-template'
import { useDashboard } from './_logic/use-dashboard'
import { Loader } from 'lucide-react'

export const Dashboard = () => {
  const {
    balance,
    totals,
    monthlySummary,
    topExpenses,
    openCreateTransactionModal,
    setOpenCreateTransactionModal,
    isLoadingBalance,
    isLoadingTotals,
    isLoadingMonthlySummary,
    isLoadingTopExpenses,
  } = useDashboard()

  return (
    <DashboardLayout>
      <>
        {isLoadingBalance || isLoadingTotals || isLoadingMonthlySummary || isLoadingTopExpenses ? (
          <Loader className="w-12 h-12 animate-spin" />
        ) : (
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
        )}
      </>
    </DashboardLayout>
  )
}
