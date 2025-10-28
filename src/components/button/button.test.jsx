import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import { Button } from './button'

const mockFnClick = vi.fn()

describe('Button', () => {
  beforeEach(() => {
    render(<Button label="Button" variant="primary" size="medium" onClick={mockFnClick} />)
  })

  it('should render with default props', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('should render with custom props', () => {
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Button')
    expect(button).toHaveClass('bg-primary text-white')
    expect(button).toHaveClass('px-4 py-2 text-base w-48')
  })

  it('should call onClick when clicked', () => {
    const button = screen.getByRole('button')
    button.click()
    expect(mockFnClick).toHaveBeenCalledTimes(1)
  })
})
