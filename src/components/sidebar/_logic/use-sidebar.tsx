import { Home, Wallet } from 'lucide-react'

export const useSidebar = () => {
  const SidebarOptions = [
    {
      name: 'Dashboard',
      icon: <Home />,
      path: '/dashboard',
    },
    {
      name: 'Movimientos',
      icon: <Wallet />,
      path: '/transactions',
    },
  ]

  return {
    SidebarOptions,
  }
}
