import { z } from 'zod'

export const editFormSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  amount: z.number().min(1, 'El monto es requerido').nullable(),
})