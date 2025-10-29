import { supabase } from "../config/create-client";

export const updateTransaction = async (id: string, data: { title: string; amount: number }) => {
  const { data: transaction, error } = await supabase.from('transactions').update(data).eq('id', id)

  if (error) throw error

  return transaction
}