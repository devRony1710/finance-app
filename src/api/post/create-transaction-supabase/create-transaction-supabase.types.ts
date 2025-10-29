export interface CreateTransactionSupabaseParams {
    title: string;
    user_id: string;
    amount: number;
    type: 'income' | 'expense';
    category_id: string;
    date: Date;
}
