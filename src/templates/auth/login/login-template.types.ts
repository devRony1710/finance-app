import type { LoginFieldValues } from "@/features/auth/login/_logic/use-login.types"
import type { Control, FieldErrors } from "react-hook-form"

export interface LoginTemplateProps {
    control: Control<LoginFieldValues>
    errors: FieldErrors<LoginFieldValues>
    handleLogin: () => void
}
    