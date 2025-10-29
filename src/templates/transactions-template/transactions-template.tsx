import { Tabs } from '@/components/tabs/tabs'
import { useTransactions } from '@/features/transactions/_logic/use-transactions'

export const TransactionsTemplate = () => {
  const { tabSelected, handleTabChange, tabsOptions } = useTransactions()

  return (
    <section className="w-full h-full">
      <span className="text-2xl font-bold text-primary">Transacciones</span>

      <div className="w-full mt-4">
        <Tabs tabs={tabsOptions} selectedTab={tabSelected} handleTabChange={handleTabChange} />
      </div>
    </section>
  )
}
