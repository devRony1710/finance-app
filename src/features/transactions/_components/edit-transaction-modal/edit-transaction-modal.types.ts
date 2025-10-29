export interface EditTransactionModalProps {
  selectedTransaction: { name: string; amount: number } | null
  handleUpdateTransaction: (data: { title: string; amount: number }) => void
}