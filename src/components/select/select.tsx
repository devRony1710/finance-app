import { useRef, type FC, type RefObject } from 'react'
import clsx from 'clsx'
import { X } from 'lucide-react'
import { useClickOutside } from '@/hooks/use-click-outside/use-click-outside'
import type { SelectProps } from './select.types'
import { useSelect } from './_logic/use-select'

const selectorStylesVariant = {
  height: {
    default: 'h-[36px]',
    xl: 'h-[40px]',
  },
}

const renderLabel = (value: string): string => {
  if (value.length > 22) {
    return `${value.slice(0, 22)}...`
  }

  return value
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  heightVariant = 'default',
  hasSearchInput = false,
  errors,
}) => {
  const { isOpen, toggleDropdown, closeDropdown, optionsFiltered, setSearchValue, searchValue } = useSelect(options)

  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref as RefObject<HTMLElement>, closeDropdown)

  return (
    <div ref={ref} className="relative w-full h-auto">
      <button
        type="button"
        className={clsx(
          'border border-primary rounded-[8px] px-5 py-1 w-full cursor-pointer',
          selectorStylesVariant.height[heightVariant],
          (isOpen || value) && 'bg-primary'
        )}
        onClick={(e) => {
          e.stopPropagation()
          toggleDropdown()
        }}
      >
        <span className={clsx('text-primary font-semibold text-[14px]', (isOpen || value) && 'text-white-esc')}>
          {renderLabel(value ?? '') || label}
        </span>
      </button>

      {isOpen && (
        <ul className="absolute max-h-[200px] overflow-y-auto top-full bg-primary !z-[9999] mt-2 left-0 right-0 border border-primary rounded-[8px] p-2 h-auto flex flex-col gap-2">
          {hasSearchInput && (
            <div className="flex items-center gap-2 border border-white rounded-[8px]">
              <input
                type="text"
                placeholder="Buscar"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full p-2 text-white-esc"
              />
              <button
                className="text-white rounded-full border border-white h-5 w-6 flex items-center justify-center mr-2"
                type="button"
                onClick={() => setSearchValue('')}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
          {hasSearchInput
            ? optionsFiltered.map((option) => (
                <li className="cursor-pointer hover:bg-primary-800 p-2 rounded-[8px] text-white-esc" key={option.value}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeDropdown()
                      onChange(option.label)
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {option.label}
                  </button>
                </li>
              ))
            : options.map((option) => (
                <li className="cursor-pointer hover:bg-primary-800 p-2 rounded-[8px] text-white-esc" key={option.value}>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      closeDropdown()
                      onChange(option.label)
                    }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {option.label}
                  </button>
                </li>
              ))}
        </ul>
      )}
      {errors && <span className="text-red-500">{errors}</span>}
    </div>
  )
}
