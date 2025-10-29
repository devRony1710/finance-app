import { useEffect, useState } from 'react'
import type { UseSelectReturnContract } from '../select.types'
import type { OptionType } from '../select.types'

export const useSelect = (options: OptionType[]): UseSelectReturnContract => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [optionsFiltered, setOptionsFiltered] = useState(options)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
    setSearchValue('')
  }

  useEffect(() => {
    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchValue.toLowerCase()))
    setOptionsFiltered(filteredOptions)
  }, [searchValue, options])

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
    optionsFiltered,
    setSearchValue,
    searchValue,
  }
}
