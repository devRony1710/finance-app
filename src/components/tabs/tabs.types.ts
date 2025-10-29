type TabObj = {
  label: string
  value: string
}

export interface TabsProps {
  tabs: TabObj[]
  selectedTab: string
  handleTabChange: (tab: string) => void
}