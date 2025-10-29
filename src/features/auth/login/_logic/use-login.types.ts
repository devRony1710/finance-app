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
      password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .regex(/[^A-Za-z0-9]/, "Debe contener al menos un carácter especial")
    .nonempty("La contraseña es requerida"),
})