import type { Control } from "react-hook-form"
import z from "zod"

type CreateTransactionFormType = {
    name: string
    amount: number
    category: string
    date: string
    description: string
}

export interface UseCreateTransactionReturnContract {
    control: Control<CreateTransactionFormType>
}

export const createTransactionFormSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    amount: z.number().min(1, 'El monto es requerido'),
    category: z.string().min(1, 'La categoría es requerida'),
    date: z.string().min(1, 'La fecha es requerida'),
    description: z.string().min(1, 'La descripción es requerida'),
})