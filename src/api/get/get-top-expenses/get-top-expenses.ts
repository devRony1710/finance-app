import { supabase } from "@/api/config/create-client"

export const getTopExpensesRpc = async (uid: string) => {
    const { data, error } = await supabase
      .rpc('get_top_expenses', { uid })

    if (error) throw error

    return data
}