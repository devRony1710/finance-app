import { supabase } from "@/api/config/create-client"

export const getTotals = async (uid: string) => {
  const [incomes, expenses] = await Promise.all([
    supabase.rpc('get_total_incomes', { uid }),
    supabase.rpc('get_total_expenses', { uid }),
  ])

  if (incomes.error) throw incomes.error
  if (expenses.error) throw expenses.error

  return {
    incomes: Number(incomes.data) || 0,
    expenses: Number(expenses.data) || 0,
  }
}