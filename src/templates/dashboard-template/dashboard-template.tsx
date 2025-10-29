import { useCallback, type FC } from 'react'
import type { DashboardTemplateProps } from './dashboard-template.types'
import { DashboardCurrentBalance } from './_components/dashboard-current-balance/dashboard-current-balance'
import { DashboardTotalsCards } from './_components/dashboard-totals-cards/dashboard-totals-cards'
import { PlusCircle } from 'lucide-react'
import { MonthlySummaryChart } from './_components/dashboard-monthly-summary-graph/dashboard-monthly-summary-graph'
import { TopExpensesChart } from './_components/dashboard-top-expenses-donut/dashboard-top-expenses-donut'
import { Modal } from '@/components/modal/modal'
import DashboardCreateTransactionForm from './_components/dashboard-create-transaction-form/dashboard-create-transaction-form'

export const DashboardTemplate: FC<DashboardTemplateProps> = ({
  balance,
  income,
  expenses,
  graphData,
  topExpenses,
  configUseDashboard,
}) => {
  const handleCloseModal = useCallback(() => {
    configUseDashboard.setOpenCreateTransactionModal(false)
  }, [configUseDashboard])

  return (
    <section className="w-full h-full flex flex-col gap-4 items-start pb-10">
      <h3 className="text-2xl font-bold">Resumen de tu cuenta</h3>

      <DashboardCurrentBalance balance={balance} />

      <DashboardTotalsCards income={income} expenses={expenses} />

      <MonthlySummaryChart data={graphData || []} />

      <TopExpensesChart data={topExpenses} />

      <button
        data-testid="addButton"
        className="absolute bottom-4 right-4"
        onClick={() => configUseDashboard.setOpenCreateTransactionModal(true)}
      >
        <PlusCircle className="w-10 h-10 text-primary" />
      </button>

      {configUseDashboard.openCreateTransactionModal && (
        <Modal onClose={handleCloseModal}>
          <DashboardCreateTransactionForm onClose={handleCloseModal} />
        </Modal>
      )}
    </section>
  )
}
