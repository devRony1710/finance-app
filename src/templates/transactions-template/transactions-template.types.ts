import type { TransactionResponse } from "@/api/get/get-transactions/get-transactions.types"

export interface TransactionsTemplateProps {
    tabsOptions: {
        label: string
        value: string
    }[]
    selectedTab: string
    handleTabChange: (tab: string) => void
    transactions: TransactionResponse[]
}
