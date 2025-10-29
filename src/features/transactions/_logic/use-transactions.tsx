import { useState } from 'react'
import type { UseTransactionsContract } from './use-transactions.types'
import { useQuery } from '@tanstack/react-query'
import { getTransactions } from '@/api/get/get-transactions/get-transactions'
import { useAuth } from '@/context/auth-context/auth-context'
import type { TransactionType } from '@/api/get/get-transactions/get-transactions.types'

export const useTransactions = (): UseTransactionsContract => {
  const [tabSelected, setTabSelected] = useState('all')
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

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

  const handleDeleteModalOpen = () => {
    setOpenDeleteModal(true)
    if (selectedId) {
      setSelectedId(null)
    }
  }

  const handleDeleteModalClose = () => {
    setOpenDeleteModal(false)
  }

  const handleSelectedId = (id: string | null) => {
    if (selectedId === id) {
      setSelectedId(null)
    } else {
      setSelectedId(id)
    }
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
    openDeleteModal,
    handleDeleteModalOpen,
    handleDeleteModalClose,
    selectedId,
    handleSelectedId,
  }
}
