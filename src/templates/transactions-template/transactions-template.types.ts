import type { TransactionResponse } from "@/api/get/get-transactions/get-transactions.types"
import type { TransactionItemCardProps } from "@/features/transactions/_components/transaction-item-card/transaction-item-card.types"

export interface TransactionsTemplateProps {
    tabsOptions: {
        label: string
        value: string
    }[]
    selectedTab: string
    handleTabChange: (tab: string) => void
    transactions: TransactionResponse[]
    cardActions: Pick<TransactionItemCardProps, 'onClickEdit' | 'onClickDelete' | 'selectedId' | 'setSelectedId'>
}
