import clsx from 'clsx'
import { useSidebar } from './_logic/use-sidebar'
import { Link } from 'react-router-dom'

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

  const isActive = (path: string) => {
    return window.location.pathname === path
  }

  return (
    <section className="w-full h-full flex flex-col gap-2">
      {SidebarOptions.map((option, index) => (
        <SidebarItem
          key={index}
          name={option.name}
          icon={option.icon}
          isActive={isActive(option.path)}
          path={option.path}
        />
      ))}
    </section>
  )
}
