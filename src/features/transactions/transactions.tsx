import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { TransactionsTemplate } from '@/templates/transactions-template/transactions-template'
import { useTransactions } from '@/features/transactions/_logic/use-transactions'
import { Modal } from '@/components/modal/modal'
import { DeleteTransactionModal } from './_components/delete-transaction-modal/delete-transaction-modal'
import { EditTransactionModal } from './_components/edit-transaction-modal/edit-transaction-modal'

export const Transactions = () => {
  const {
    tabSelected,
    handleTabChange,
    tabsOptions,
    transactions,
    openDeleteModal,
    handleDeleteModalOpen,
    handleDeleteModalClose,
    selectedId,
    handleSelectedId,
    handleDeleteTransaction,
    isLoadingTransactions,
    openEditModal,
    handleEditModalOpen,
    handleEditModalClose,
    selectedTransaction,
  } = useTransactions()

  return (
    <DashboardLayout>
      <TransactionsTemplate
        tabsOptions={tabsOptions}
        selectedTab={tabSelected}
        handleTabChange={handleTabChange}
        transactions={transactions}
        cardActions={{
          onClickEdit: handleEditModalOpen,
          onClickDelete: handleDeleteModalOpen,
          selectedId: selectedId || '',
          setSelectedId: handleSelectedId,
        }}
        isLoading={isLoadingTransactions}
      />

      {openDeleteModal && (
        <Modal onClose={handleDeleteModalClose}>
          <DeleteTransactionModal onClose={handleDeleteModalClose} onDelete={handleDeleteTransaction} />
        </Modal>
      )}

      {openEditModal && (
        <Modal onClose={handleEditModalClose}>
          <EditTransactionModal selectedTransaction={selectedTransaction} />
        </Modal>
      )}
    </DashboardLayout>
  )
}
