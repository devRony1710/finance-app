import type { Control, FieldErrors } from "react-hook-form"
import z from "zod"

type CreateTransactionFormType = {
    name: string
    amount: number
    category: string
    date: Date
    type: 'income' | 'expense'
}

export interface UseCreateTransactionReturnContract {
    control: Control<CreateTransactionFormType>
    categoriesOptions: { value: string; label: string }[]
    errors: FieldErrors<CreateTransactionFormType>
    handleSubmit: VoidFunction
    typeOptions: { value: string; label: string }[]
}

export const createTransactionFormSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    amount: z.number().min(1, 'El monto es requerido'),
    category: z.string().min(1, 'La categoría es requerida'),
    date: z.date().min(1, 'La fecha es requerida'),
    type: z.enum(['income', 'expense'], "El tipo es requerido"),
})