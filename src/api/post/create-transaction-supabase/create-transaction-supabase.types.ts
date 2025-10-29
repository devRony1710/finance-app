export interface CreateTransactionSupabaseParams {
    title: string;
    user_id: string;
    amount: number | null;
    type: string;
    category_id: string;
    date: Date;
}
