import { supabase } from "@/api/config/create-client"

export const deleteTransaction = async (id: string): Promise<string> => {
    const { error } = await supabase.from('transactions').delete().eq('id', id)
    if (error) throw new Error(error.message)
    
    return 'Transacción eliminada correctamente'
}