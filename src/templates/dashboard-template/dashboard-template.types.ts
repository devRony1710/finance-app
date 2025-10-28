import type { GetMonthlySummaryResponse } from "@/api/get/get-monthly-summary/get-monthly-summary.types"

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
}   