import type { GetMonthlySummaryResponse } from "@/api/get/get-monthly-summary/get-monthly-summary.types"
import type { UseDashboardReturnContract } from "@/features/dashboard/_logic/use-dashboard.types"

export interface DashboardTemplateProps {
    balance: number
    income: number
    expenses: number
    graphData: GetMonthlySummaryResponse[]
    topExpenses: {
        category: string
        color: string
        total: number
    }[]
    configUseDashboard: Pick<UseDashboardReturnContract, 'openCreateTransactionModal' | 'setOpenCreateTransactionModal'>
}   