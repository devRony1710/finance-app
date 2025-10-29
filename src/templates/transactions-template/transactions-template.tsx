import { Tabs } from '@/components/tabs/tabs'
import type { FC } from 'react'
import type { TransactionsTemplateProps } from './transactions-template.types'

export const TransactionsTemplate: FC<TransactionsTemplateProps> = ({
  tabsOptions,
  selectedTab,
  handleTabChange,
  transactions,
}) => {
  return (
    <section className="w-full h-full">
      <span className="text-2xl font-bold text-primary">Transacciones</span>

      <div className="w-full mt-4">
        <Tabs tabs={tabsOptions} selectedTab={selectedTab} handleTabChange={handleTabChange} />
      </div>

      {transactions.length > 0 ? (
        <div className="w-full mt-4">
          {transactions.map((transaction) => (
            <div key={transaction.id}>
              <span>{transaction.title}</span>
              <span>{transaction.amount}</span>
              <span>{transaction.type}</span>
              <span>{transaction.category_id}</span>
              <span>{transaction.date}</span>
              <span>{transaction.created_at}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-4">
          <span className="text-2xl font-bold text-primary">No hay transacciones</span>
        </div>
      )}
    </section>
  )
}
