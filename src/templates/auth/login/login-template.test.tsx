import { describe, it, expect, beforeEach } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { LoginTemplate } from './login-template'

describe('LoginTemplate test suite', () => {
  beforeEach(() => {
    render(<LoginTemplate />)
  })

  it('should render the login template title', () => {
    const loginTemplateTitle = screen.getByText('Bienvenido de vuelta.')
    expect(loginTemplateTitle).toBeInTheDocument()
  })

  it('should render the login template subtitle', () => {
    const loginTemplateSubtitle = screen.getByText('Accede a tu cuenta para gestionar tus finanzas.')
    expect(loginTemplateSubtitle).toBeInTheDocument()
  })

  it('should render the login template form', () => {
    const loginTemplateForm = screen.getByTestId('loginForm')
    expect(loginTemplateForm).toBeInTheDocument()
  })

  it('should render the login template inputs', () => {
    const loginTemplateInputs = screen.getByPlaceholderText('Correo Electrónico')
    expect(loginTemplateInputs).toBeInTheDocument()

    const loginTemplateInputPassword = screen.getByPlaceholderText('Contraseña')
    expect(loginTemplateInputPassword).toBeInTheDocument()
  })

  it('should render the login template button', () => {
    const loginTemplateButton = screen.getByRole('button')
    expect(loginTemplateButton).toBeInTheDocument()
  })

  it('should render the login template link', () => {
    const loginTemplateLink = screen.getAllByRole('link')
    expect(loginTemplateLink[0]).toHaveTextContent('¿Olvidaste tu contraseña?')
    expect(loginTemplateLink[0]).toBeInTheDocument()
    expect(loginTemplateLink[1]).toHaveTextContent('¿No tienes una cuenta?')
    expect(loginTemplateLink[1]).toBeInTheDocument()
  })

  it('should type in the login template inputs', () => {
    const loginTemplateInputEmail = screen.getByPlaceholderText('Correo Electrónico')
    const loginTemplateInputPassword = screen.getByPlaceholderText('Contraseña')
    expect(loginTemplateInputEmail).toBeInTheDocument()
    expect(loginTemplateInputPassword).toBeInTheDocument()

    waitFor(() => {
      fireEvent.change(loginTemplateInputEmail, { target: { value: 'test' } })
      expect(loginTemplateInputEmail).toHaveValue('test')
    })

    waitFor(() => {
      fireEvent.change(loginTemplateInputPassword, { target: { value: 'test1234*.' } })
      expect(loginTemplateInputPassword).toHaveValue('test1234*.')
    })
  })
})
