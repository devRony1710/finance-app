import type { TransactionResponse } from "@/api/get/get-transactions/get-transactions.types";

export interface TransactionItemCardProps {
    transaction: TransactionResponse
    onClickEdit: (transaction: TransactionResponse) => void
    onClickDelete: (transaction: TransactionResponse) => void
    selectedId: string
    setSelectedId: (id: string) => void
}