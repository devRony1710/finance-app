import clsx from 'clsx'
import { useSidebar } from './_logic/use-sidebar'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/auth-context/auth-context'
import { Button } from '../button/button'

const SidebarItem = ({
  name,
  icon,
  isActive,
  path,
}: {
  name: string
  icon: React.ReactNode
  isActive: boolean
  path: string
}) => {
  return (
    <Link
      to={path}
      className={clsx(
        'flex items-center gap-2 w-full border p-2 rounded-md border-primary',
        isActive && 'bg-primary text-white',
        !isActive && 'text-primary'
      )}
    >
      {icon}
      <span className={clsx('font-semibold', isActive && 'text-white')}>{name}</span>
    </Link>
  )
}

export const Sidebar = () => {
  const { SidebarOptions } = useSidebar()
  const { logout } = useAuth()

  const isActive = (path: string) => {
    return window.location.pathname === path
  }

  return (
    <section className="w-full h-full flex flex-col gap-2 relative">
      {SidebarOptions.map((option, index) => (
        <SidebarItem
          key={index}
          name={option.name}
          icon={option.icon}
          isActive={isActive(option.path)}
          path={option.path}
        />
      ))}

      <div className="w-full flex items-center justify-center absolute bottom-0">
        <Button onClick={logout} label="Cerrar sesión" size="medium" variant="primary" />
      </div>
    </section>
  )
}
