export interface DashboardTemplateProps {
    balance: number
    income: number
    expenses: number
    graphData: {
        month: string
        income: number
        expense: number
    }[]
}   