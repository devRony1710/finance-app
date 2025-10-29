import type { Control, FieldErrors } from "react-hook-form"
import z from "zod"

export type RegisterFormValues = {
    name: string
    lastName: string
    email: string
    password: string
}

export interface UseRegisterReturnContract {
    control: Control<RegisterFormValues>
    errors: FieldErrors<RegisterFormValues>
    isSubmitting: boolean
    handleSubmit: () => void
}

export const registerSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    lastName: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
    email: z.email('El correo electrónico debe ser válido'),
    password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .regex(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .regex(/[a-z]/, "Debe contener al menos una letra minúscula")
    .regex(/[0-9]/, "Debe contener al menos un número")
    .regex(/[^A-Za-z0-9]/, "Debe contener al menos un carácter especial")
    .nonempty("La contraseña es requerida"),
})