import { supabase } from "@/api/config/create-client";
import type { CreateTransactionSupabaseParams } from "./create-transaction-supabase.types";

export const createTransactionSupabase = async ({
    title,
    user_id,
    amount,
    type,
    category_id,
    date,
}: CreateTransactionSupabaseParams) => {
    const { data, error } = await supabase
        .from('transactions')
        .insert({
            title,
            user_id,
            amount,
            type,
            category_id,
            date,
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}