import { supabase } from "@/api/config/create-client"
import type { TransactionFilters } from "./get-transactions.types"

export const getTransactions = async (filters: TransactionFilters = {}) => {
  const query = supabase.from("transactions").select("*")

  if (filters.type && filters.type !== "all") {
    query.eq("type", filters.type)
  }

  if (filters.category_id) {
    query.eq("category_id", filters.category_id)
  }

  const { data, error } = await query.order("date", { ascending: false })

  if (error) throw new Error(error.message)
  return data
}
