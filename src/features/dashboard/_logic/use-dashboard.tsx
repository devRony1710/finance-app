import { getMonthlySummaryRpc } from '@/api/get/get-monthly-summary/get-monthly-summary'
import { getTopExpensesRpc } from '@/api/get/get-top-expenses/get-top-expenses'
import { getTotals } from '@/api/get/get-totals/get-totals'
import { getBalanceRpc } from '@/api/get/get-user-balance/get-user-balance'
import { useAuth } from '@/context/auth-context/auth-context'
import { useQuery } from '@tanstack/react-query'
import type { UseDashboardReturnContract } from './use-dashboard.types'
import { useState } from 'react'
import { QueryKeys } from './_querykeys'

export const useDashboard = (): UseDashboardReturnContract => {
  const [openCreateTransactionModal, setOpenCreateTransactionModal] = useState(false)

  const { user } = useAuth()

  const { data: balance, isLoading: isLoadingBalance } = useQuery({
    queryKey: [QueryKeys.balance, user?.id],
    queryFn: () => getBalanceRpc(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: totals, isLoading: isLoadingTotals } = useQuery({
    queryKey: [QueryKeys.totals, user?.id],
    queryFn: () => getTotals(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: monthlySummary, isLoading: isLoadingMonthlySummary } = useQuery({
    queryKey: [QueryKeys.monthlySummary, user?.id],
    queryFn: () => getMonthlySummaryRpc(user?.id || ''),
    enabled: !!user?.id,
  })

  const { data: topExpenses, isLoading: isLoadingTopExpenses } = useQuery({
    queryKey: [QueryKeys.topExpenses, user?.id],
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
    isLoadingBalance,
    isLoadingTotals,
    isLoadingMonthlySummary,
    isLoadingTopExpenses,
  }
}
