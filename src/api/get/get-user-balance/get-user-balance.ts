import { supabase } from "@/api/config/create-client"
import type { GetBalanceResponse } from "./get-user-balance.types"

export const getBalanceRpc = async (uid: string): Promise<GetBalanceResponse> => {
  const { data, error } = await supabase
    .rpc('get_user_balance', { uid })

  if (error) throw error

  return Number(data) || 0
}