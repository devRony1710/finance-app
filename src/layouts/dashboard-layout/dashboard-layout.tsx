import type { FC, PropsWithChildren } from 'react'
import { Navbar } from './_components/navbar/navbar'

export const DashboardLayout: FC<PropsWithChildren & { hasGoBackButton?: boolean; hideMenuIcon?: boolean }> = ({
  children,
  hasGoBackButton = false,
  hideMenuIcon = false,
}) => {
  return (
    <section className="grid h-screen w-full grid-rows-[80px_1fr] grid-cols-[1fr] lg:grid-cols-[200px_1fr]">
      <Navbar hasGoBackButton={hasGoBackButton} hideMenuIcon={hideMenuIcon} />

      {/* <SidebarTemplate /> */}

      <main className="row-start-2 row-end-3 col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 overflow-auto px-4">
        {children}
      </main>
    </section>
  )
}
