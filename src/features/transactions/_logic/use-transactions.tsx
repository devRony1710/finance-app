import { useState } from 'react'
import type { UseTransactionsContract } from './use-transactions.types'
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from '@/api/get/get-transactions/get-transactions'
import { useAuth } from '@/context/auth-context/auth-context'
import type { TransactionType } from '@/api/get/get-transactions/get-transactions.types'

export const useTransactions = (): UseTransactionsContract => {
  const [tabSelected, setTabSelected] = useState('all')
  const { user } = useAuth()

  const { data: transactions } = useQuery({
    queryKey: ['transactions', tabSelected, user?.id],
    queryFn: () =>
      getTransactions({
        type: tabSelected as TransactionType,
      }),
  })

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
    transactions: transactions || [],
  }
}
