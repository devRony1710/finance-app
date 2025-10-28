import type { Control, FieldErrors, UseFormWatch } from "react-hook-form"
import { z } from "zod"

export type LoginFieldValues = {
    email: string
    password: string
}

export interface UseLoginReturnContract {
    control: Control<LoginFieldValues>
    errors: FieldErrors<LoginFieldValues>
    isSubmitting: boolean
    watch: UseFormWatch<LoginFieldValues>    
}

export const loginSchema = z.object({
    email: z.email("Ingrese un correo valido").nonempty("El correo es requerido"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres").nonempty("La contraseña es requerida"),
})