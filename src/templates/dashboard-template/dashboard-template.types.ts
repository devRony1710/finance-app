export interface DashboardTemplateProps {
    balance: number
    income: number
    expenses: number
    graphData: {
        month: string
        income: number
        expense: number
    }[]
    topExpenses: {
        category: string
        color: string
        total: number
    }[]
}   