import { DashboardLayout } from '@/layouts/dashboard-layout/dashboard-layout'
import { TransactionsTemplate } from '@/templates/transactions-template/transactions-template'
import { useTransactions } from '@/features/transactions/_logic/use-transactions'
import { Modal } from '@/components/modal/modal'

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
  } = useTransactions()

  return (
    <DashboardLayout>
      <TransactionsTemplate
        tabsOptions={tabsOptions}
        selectedTab={tabSelected}
        handleTabChange={handleTabChange}
        transactions={transactions}
        cardActions={{
          onClickEdit: (transaction) => {},
          onClickDelete: handleDeleteModalOpen,
          selectedId: selectedId || '',
          setSelectedId: handleSelectedId,
        }}
      />

      {openDeleteModal && (
        <Modal onClose={handleDeleteModalClose}>
          <p>¿Estás seguro de eliminar esta transacción?</p>
        </Modal>
      )}
    </DashboardLayout>
  )
}
