import type { GetMonthlySummaryResponse } from "@/api/get/get-monthly-summary/get-monthly-summary.types"
import type { GetTopExpensesResponse } from "@/api/get/get-top-expenses/get-top-expenses.types"
import type { GetTotalsResponse } from "@/api/get/get-totals/get-totals.types"

export interface UseDashboardReturnContract {
    balance: number | undefined
    totals: GetTotalsResponse | undefined
    monthlySummary: GetMonthlySummaryResponse[] | undefined
    topExpenses: GetTopExpensesResponse[] | undefined
    openCreateTransactionModal: boolean
    setOpenCreateTransactionModal: React.Dispatch<React.SetStateAction<boolean>>
}