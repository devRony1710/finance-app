import type { FC } from 'react'
import clsx from 'clsx'
import type { TabsProps } from './tabs.types'

export const Tabs: FC<TabsProps> = ({ tabs = [], selectedTab = '', handleTabChange }) => {
  return (
    <div className="w-full flex items-center gap-1 p-1 rounded-md">
      {tabs.map((item, index) => (
        <button
          key={`${index}-${item.value}`}
          type="button"
          className={clsx(
            'w-full h-10 border border-zinc-600 rounded-md cursor-pointer',
            'hover:bg-primary-800 hover:text-white-esc transition-colors',
            selectedTab === item.value ? 'text-white font-semibold' : 'text-primary-800',
            {
              'bg-primary': item.value === selectedTab,
            }
          )}
          aria-label={`Button tab ${item.label}`}
          onClick={() => handleTabChange(item.value)}
        >
          <span className={clsx('font-poppins')}>{item.label}</span>
        </button>
      ))}
    </div>
  )
}
