
export type TransactionType = "all" | "income" | "expense"

export interface TransactionFilters {
  type?: TransactionType
  category_id?: string
}

export interface TransactionResponse {
    id: string
    user_id: string
    title: string
    amount: number
    type: Omit<TransactionType, 'all'>
    category_id: string
    date: string
    created_at: string
}