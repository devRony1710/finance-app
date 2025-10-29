export interface UseTransactionsContract {
  tabSelected: string
  handleTabChange: (tab: string) => void
  tabsOptions: {
    label: string
    value: string
  }[]
}