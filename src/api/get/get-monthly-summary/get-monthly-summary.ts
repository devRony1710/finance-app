import { supabase } from "@/api/config/create-client"

export const getMonthlySummaryRpc = async (uid: string) => {
    const { data, error } = await supabase
      .rpc('get_monthly_summary', { uid })

    if (error) throw error

    return data
}