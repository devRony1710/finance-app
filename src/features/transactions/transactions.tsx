import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { TransactionsTemplate } from '@/templates/transactions-template/transactions-template'

export const Transactions = () => {
  return (
    <DashboardLayout>
      <TransactionsTemplate />
    </DashboardLayout>
  )
}
