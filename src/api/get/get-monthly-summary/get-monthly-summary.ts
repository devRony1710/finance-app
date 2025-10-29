import { supabase } from "@/api/config/create-client"
import type { GetMonthlySummaryResponse } from "./get-monthly-summary.types"

export const getMonthlySummaryRpc = async (uid: string): Promise<GetMonthlySummaryResponse[]> => {
    const { data, error } = await supabase
      .rpc('get_monthly_summary', { uid })

    if (error) throw error

    return data
}