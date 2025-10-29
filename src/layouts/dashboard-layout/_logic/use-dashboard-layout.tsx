import { useState } from 'react'
import type { UseDashboardLayout } from './use-dashboard-layout.types'

export const useDashboardLayout = (): UseDashboardLayout => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleOpenMenu = () => setOpenMenu(!openMenu)

  return {
    openMenu,
    handleOpenMenu,
  }
}
