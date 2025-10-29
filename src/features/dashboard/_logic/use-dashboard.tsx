import { getMonthlySummaryRpc } from '@/api/get/get-monthly-summary/get-monthly-summary'
import { getTopExpensesRpc } from '@/api/get/get-top-expenses/get-top-expenses'
import { getTotals } from '@/api/get/get-totals/get-totals'
import { getBalanceRpc } from '@/api/get/get-user-balance/get-user-balance'
import { useAuth } from '@/context/auth-context/auth-context'
import { useQuery } from '@tanstack/react-query'
import type { UseDashboardReturnContract } from './use-dashboard.types'
import { useState } from 'react'

export const useDashboard = (): UseDashboardReturnContract => {
  const [openCreateTransactionModal, setOpenCreateTransactionModal] = useState(false)

  const { user } = useAuth()

  const { data: balance } = useQuery({
    queryKey: ['balance', user?.id],
    queryFn: () => getBalanceRpc(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: totals } = useQuery({
    queryKey: ['totals', user?.id],
    queryFn: () => getTotals(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: monthlySummary } = useQuery({
    queryKey: ['monthlySummary', user?.id],
    queryFn: () => getMonthlySummaryRpc(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: topExpenses } = useQuery({
    queryKey: ['topExpenses', user?.id],
    queryFn: () => getTopExpensesRpc(user?.id || ''),
    enabled: !!user?.id,
  })

  return {
    balance,
    totals,
    monthlySummary,
    topExpenses,
    openCreateTransactionModal,
    setOpenCreateTransactionModal,
  }
}
