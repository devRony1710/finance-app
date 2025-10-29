import { ArrowLeft, Menu } from 'lucide-react'
import type { FC } from 'react'
import type { NavbarProps } from './navbar.types'

export const Navbar: FC<NavbarProps> = ({ hasGoBackButton, hideMenuIcon, handleOpenMenu }) => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-4 bg-zinc-300">
      <div className="flex items-center gap-2">
        {hasGoBackButton && (
          <button className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
        )}

        <span className="ml-2 text-xl font-bold">FinanzasPro</span>
      </div>

      {!hideMenuIcon && (
        <button
          className="w-8 h-8 rounded-md bg-primary flex items-center justify-center lg:hidden"
          onClick={handleOpenMenu}
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
      )}
    </nav>
  )
}
