import { supabase } from "@/api/config/create-client"

export const getBalanceRpc = async (uid: string) => {
  const { data, error } = await supabase
    .rpc('get_user_balance', { uid })
  console.log("🚀 ~ getBalanceRpc ~ data:", data)

  if (error) throw error

  return Number(data) || 0
}