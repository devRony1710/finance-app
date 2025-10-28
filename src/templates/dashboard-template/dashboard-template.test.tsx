import { beforeEach, describe, expect, it } from 'vitest'
import { DashboardTemplate } from './dashboard-template'
import { render, screen } from '@testing-library/react'

describe('DashboardTemplate test suite', () => {
  beforeEach(() => {
    render(<DashboardTemplate balance={0} />)
  })

  it('should render the title "Resumen de tu cuenta"', () => {
    const title = screen.getByText('Resumen de tu cuenta')
    expect(title).toBeInTheDocument()
  })

  it('should render the current balance', () => {
    const currentBalance = screen.getByText('Balance actual:')
    expect(currentBalance).toBeInTheDocument()
  })

  it('should render the totals cards', () => {
    const totalCardIncome = screen.getByText('Total Ingresos')
    expect(totalCardIncome).toBeInTheDocument()

    const totalCardExpenses = screen.getByText('Total Egresos')
    expect(totalCardExpenses).toBeInTheDocument()
  })

  it('should render the add button', () => {
    const addButton = screen.getByTestId('addButton')
    expect(addButton).toBeInTheDocument()
  })
})
