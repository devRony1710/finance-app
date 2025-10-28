import { supabase } from "@/api/config/create-client"
import type { GetTopExpensesResponse } from "./get-top-expenses.types"

export const getTopExpensesRpc = async (uid: string): Promise<GetTopExpensesResponse[]> => {
    const { data, error } = await supabase
      .rpc('get_top_expenses', { uid })

    if (error) throw error

    return data
}