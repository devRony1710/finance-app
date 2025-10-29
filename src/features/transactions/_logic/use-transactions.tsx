import { useState } from 'react'
import type { UseTransactionsContract } from './use-transactions.types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getTransactions } from '@/api/get/get-transactions/get-transactions'
import { useAuth } from '@/context/auth-context/auth-context'
import type { TransactionType } from '@/api/get/get-transactions/get-transactions.types'
import { deleteTransaction } from '@/api/delete/delete-transaction/delete-transaction'
import toast from 'react-hot-toast'
import { handleDeleteTransactionErrros } from '@/lib/handle-request-errors/handle-delete-transaction-errors/handle-delete-transaction-errors'

export const useTransactions = (): UseTransactionsContract => {
  const [tabSelected, setTabSelected] = useState('all')
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const queryClient = useQueryClient()

  const { user } = useAuth()

  const { data: transactions, isLoading: isLoadingTransactions } = useQuery({
    queryKey: ['transactions', tabSelected, user?.id],
    queryFn: () =>
      getTransactions({
        type: tabSelected as TransactionType,
      }),
  })

  const { mutateAsync: deleteTransactionMutation } = useMutation({
    mutationFn: deleteTransaction,
    onSuccess: () => {
      toast.success('Transacción eliminada correctamente')
      handleDeleteModalClose()
      setSelectedId(null)
      queryClient.invalidateQueries({
        queryKey: ['transactions', tabSelected, user?.id],
      })
    },
    onError: (error) => {
      toast.error(handleDeleteTransactionErrros(error.message))
    },
  })

  const handleDeleteTransaction = () => {
    deleteTransactionMutation(selectedId || '')
    handleDeleteModalClose()
  }

  const handleTabChange = (tab: string) => {
    setTabSelected(tab)
  }

  const handleDeleteModalOpen = () => {
    setOpenDeleteModal(true)
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
    handleDeleteTransaction,
    isLoadingTransactions,
  }
}
