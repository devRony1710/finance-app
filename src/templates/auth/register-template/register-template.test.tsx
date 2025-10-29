import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { RegisterTemplate } from './register-template'
import { useForm } from 'react-hook-form'
import type { RegisterFormValues } from '@/features/auth/register/_logic/use-register.types'

const mockOnChange = vi.fn()

describe('RegisterTemplate test suite', () => {
  const Wrapper = () => {
    const {
      control,
      formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>()
    return <RegisterTemplate config={{ control, errors, isSubmitting, handleSubmit: vi.fn() }} />
  }

  beforeEach(() => {
    render(<Wrapper />)
  })

  it('should render the page title and subtitle', () => {
    const registerTitle = screen.getByText('Crea tu cuenta.')
    expect(registerTitle).toBeInTheDocument()

    const registerSubtitle = screen.getByText('Registrate para gestionar tus finanzas.')
    expect(registerSubtitle).toBeInTheDocument()
  })

  it('should render the wallet image', () => {
    const walletImage = screen.getByAltText('FinanceWallet')
    expect(walletImage).toBeInTheDocument()
  })

  it('should render the register form', () => {
    const registerForm = screen.getByTestId('register-form')
    expect(registerForm).toBeInTheDocument()
  })

  it('should render the register form inputs and write values', () => {
    const nameInput = screen.getByLabelText('Nombre')
    const lastNameInput = screen.getByLabelText('Apellido')
    const emailInput = screen.getByLabelText('Correo electrónico')
    const passwordInput = screen.getByLabelText('Contraseña')

    expect(nameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()

    waitFor(() => {
      fireEvent.change(nameInput, 'John Doe')
      fireEvent.change(lastNameInput, 'Doe')
      fireEvent.change(emailInput, 'john.doe@example.com')
      fireEvent.change(passwordInput, 'password')

      expect(mockOnChange).toHaveBeenCalledTimes(4)

      expect(nameInput).toHaveValue('John Doe')
      expect(lastNameInput).toHaveValue('Doe')
      expect(emailInput).toHaveValue('john.doe@example.com')
      expect(passwordInput).toHaveValue('password')
    })
  })
})
