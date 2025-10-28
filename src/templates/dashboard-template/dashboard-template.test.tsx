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
})
