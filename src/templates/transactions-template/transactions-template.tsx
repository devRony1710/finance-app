import { Tabs } from '@/components/tabs/tabs'
import type { FC } from 'react'
import type { TransactionsTemplateProps } from './transactions-template.types'
import { TransactionItemCard } from '@/features/transactions/_components/transaction-item-card/transaction-item-card'
import { Loader } from 'lucide-react'

export const TransactionsTemplate: FC<TransactionsTemplateProps> = ({
  tabsOptions,
  selectedTab,
  handleTabChange,
  transactions,
  cardActions,
  isLoading,
}) => {
  return (
    <section className="w-full h-full">
      <span className="text-2xl font-bold text-primary">Transacciones</span>

      <div className="w-full mt-4">
        <Tabs tabs={tabsOptions} selectedTab={selectedTab} handleTabChange={handleTabChange} />
      </div>

      <div className="w-full mt-4 gap-4">
        {isLoading ? (
          <Loader className="w-12 h-12 animate-spin" />
        ) : transactions.length > 0 ? (
          <div className="w-full grid grid-cols-1 w-full lg:grid-cols-2 gap-4 h-auto overflow-y-scroll">
            {transactions.map((transaction) => (
              <TransactionItemCard key={transaction.id} transaction={transaction} {...cardActions} />
            ))}
          </div>
        ) : (
          <div className="w-full mt-4">
            <span className="text-2xl font-bold text-primary">No hay transacciones</span>
          </div>
        )}
      </div>
    </section>
  )
}
