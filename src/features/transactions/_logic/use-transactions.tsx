import { useState } from 'react'
import type { UseTransactionsContract } from './use-transactions.types'

export const useTransactions = (): UseTransactionsContract => {
  const [tabSelected, setTabSelected] = useState('all')

  const handleTabChange = (tab: string) => {
    setTabSelected(tab)
  }

  const tabsOptions = [
    {
      label: 'Todas',
      value: 'all',
    },
    {
      label: 'Ingresos',
      value: 'income',
    },
    {
      label: 'Gastos',
      value: 'expense',
    },
  ]

  return {
    tabSelected,
    handleTabChange,
    tabsOptions,
  }
}
