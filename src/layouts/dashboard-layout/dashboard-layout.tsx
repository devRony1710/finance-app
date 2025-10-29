import type { FC, PropsWithChildren } from 'react'
import { Navbar } from './_components/navbar/navbar'
import { useDashboardLayout } from './_logic/use-dashboard-layout'
import { Drawer } from '@/components/drawer/drawer'

export const DashboardLayout: FC<PropsWithChildren & { hasGoBackButton?: boolean; hideMenuIcon?: boolean }> = ({
  children,
  hasGoBackButton = false,
  hideMenuIcon = false,
}) => {
  const { openMenu, handleOpenMenu } = useDashboardLayout()

  return (
    <section className="grid h-screen w-full grid-rows-[80px_1fr]">
      <Navbar hasGoBackButton={hasGoBackButton} hideMenuIcon={hideMenuIcon} handleOpenMenu={handleOpenMenu} />

      <main className="row-start-2 row-end-3 grid grid-cols-[1fr] lg:grid-cols-[200px_1fr] overflow-auto px-4">
        {/* <SidebarTemplate /> */}
        <div className="col-start-1 col-end-2 hidden lg:block">sidebar</div>
        <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-3">{children}</div>
      </main>

      <Drawer title="Menu" isOpen={openMenu} onClose={handleOpenMenu}>
        <div>sidebar</div>
      </Drawer>
    </section>
  )
}
