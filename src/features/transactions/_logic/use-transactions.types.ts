import type { TransactionResponse } from "@/api/get/get-transactions/get-transactions.types"

export interface UseTransactionsContract {
  tabSelected: string
  handleTabChange: (tab: string) => void
  tabsOptions: {
    label: string
    value: string
  }[]
  transactions: TransactionResponse[]
  openDeleteModal: boolean
  handleDeleteModalOpen: () => void
  handleDeleteModalClose: () => void
  selectedId: string | null
  handleSelectedId: (id: string | null) => void
  handleDeleteTransaction: () => void
  isLoadingTransactions: boolean
}