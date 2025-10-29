import { Input } from './input'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'

const onChangeEventMock = vi.fn()

describe('Input test suite', () => {
  beforeEach(() => {
    render(<Input label="Email" type="email" name="email" id="email" htmlFor="email" />)
  })

  it('should render the input', () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('should render the label with the correct text', () => {
    const label = screen.getByText('Email')
    expect(label).toBeInTheDocument()
    expect(label).toHaveTextContent('Email')
  })

  it('should render the input with the correct type', () => {
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('should call onChange when the input value changes', () => {
    const input = screen.getByRole('textbox')

    waitFor(() => {
      fireEvent.change(input, { target: { value: 'test' } })
      expect(input).toHaveValue('test')
      expect(onChangeEventMock).toHaveBeenCalledTimes(1)
    })
  })
})
