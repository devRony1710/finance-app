import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { TransactionsTemplate } from '@/templates/transactions-template/transactions-template'
import { useTransactions } from '@/features/transactions/_logic/use-transactions'

export const Transactions = () => {
  const { tabSelected, handleTabChange, tabsOptions, transactions } = useTransactions()

  return (
    <DashboardLayout>
      <TransactionsTemplate
        tabsOptions={tabsOptions}
        selectedTab={tabSelected}
        handleTabChange={handleTabChange}
        transactions={transactions}
      />
    </DashboardLayout>
  )
}
