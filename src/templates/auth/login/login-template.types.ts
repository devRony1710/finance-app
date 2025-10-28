import type { UseLoginReturnContract } from "@/features/auth/login/_logic/use-login.types"

export interface LoginTemplateProps {
    config: Pick<UseLoginReturnContract, 'control' | 'errors' | 'handleLogin' | 'isSubmitting'>
}
    