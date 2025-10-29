import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { vi, describe, it, beforeAll, expect, beforeEach } from 'vitest'
import DashboardCreateTransactionForm from './dashboard-create-transaction-form'
import { useCreateTransaction } from '@/hooks/use-create-transaction/use-create-transaction'
import { useForm } from 'react-hook-form'

// Mock del hook
vi.mock('@/hooks/use-create-transaction/use-create-transaction', () => ({
  useCreateTransaction: vi.fn(),
}))

describe('DashboardCreateTransactionForm', () => {
  beforeAll(() => {
    const portalRoot = document.createElement('div')
    portalRoot.setAttribute('id', 'portal-root')
    document.body.appendChild(portalRoot)
  })

  beforeEach(() => {
    const Wrapper = () => {
      const { control } = useForm({
        defaultValues: {
          name: '',
          amount: '',
          category: '',
          date: '',
        },
      })

      vi.mocked(useCreateTransaction).mockReturnValue({
        control,
        categoriesOptions: [
          { label: 'Comida', value: 'food' },
          { label: 'Transporte', value: 'transport' },
        ],
        errors: {},
        handleSubmit: vi.fn(),
      } as any)

      return <DashboardCreateTransactionForm onClose={vi.fn()} />
    }

    render(<Wrapper />)
  })

  it('should render the form', () => {
    const form = screen.getByTestId('form-create-transaction')
    expect(form).toBeInTheDocument()
  })

  it('should render the form button to close and the user can close the form', () => {
    const form = screen.getByTestId('cancelButton')
    expect(form).toBeInTheDocument()

    const onClose = vi.fn()

    waitFor(() => {
      fireEvent.click(form)
      expect(onClose).toHaveBeenCalled()
      expect(form).not.toBeInTheDocument()
    })
  })

  it('should render the form button to submit and the user can submit the form', () => {
    const form = screen.getByTestId('submitButton')
    expect(form).toBeInTheDocument()

    const handleSubmit = vi.fn()

    waitFor(() => {
      fireEvent.click(form)
      expect(handleSubmit).toHaveBeenCalled()
      expect(form).not.toBeInTheDocument()
    })
  })
})
