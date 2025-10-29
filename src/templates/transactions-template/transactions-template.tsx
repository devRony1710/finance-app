import { Tabs } from '@/components/tabs/tabs'
import type { FC } from 'react'
import type { TransactionsTemplateProps } from './transactions-template.types'
import { TransactionItemCard } from '@/features/transactions/_components/transaction-item-card/transaction-item-card'

export const TransactionsTemplate: FC<TransactionsTemplateProps> = ({
  tabsOptions,
  selectedTab,
  handleTabChange,
  transactions,
  cardActions,
}) => {
  return (
    <section className="w-full h-full">
      <span className="text-2xl font-bold text-primary">Transacciones</span>

      <div className="w-full mt-4">
        <Tabs tabs={tabsOptions} selectedTab={selectedTab} handleTabChange={handleTabChange} />
      </div>

      <div className="block lg:hidden">
        {transactions.length > 0 ? (
          <div className="w-full mt-4 flex flex-col gap-4 h-auto min-h-[600px] overflow-y-scroll">
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
