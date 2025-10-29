export type OptionType = {
  value: string
  label: string
}

export interface SelectProps {
  label: string
  options: OptionType[]
  value: string | null
  onChange: (value: string) => void
  heightVariant?: 'default' | 'xl'
  hasSearchInput?: boolean
  errors?: string
}

export interface UseSelectReturnContract {
  isOpen: boolean
  toggleDropdown: () => void
  closeDropdown: () => void
  optionsFiltered: OptionType[]
  setSearchValue: (value: string) => void
  searchValue: string
}