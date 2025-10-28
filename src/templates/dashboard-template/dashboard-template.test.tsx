import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { DashboardTemplate } from './dashboard-template'
import { render, screen } from '@testing-library/react'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeAll(() => {
  globalThis.ResizeObserver = ResizeObserverMock
})

describe('DashboardTemplate test suite', () => {
  const mockData = {
    balance: 0,
    income: 0,
    expenses: 0,
    graphData: [
      {
        month: '2023-01',
        income: 100,
        expenses: 50,
      },
    ],
    topExpenses: [
      {
        category: 'test',
        color: 'test',
        total: 100,
      },
    ],
  }

  beforeEach(() => {
    render(<DashboardTemplate {...mockData} />)
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
