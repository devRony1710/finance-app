import type { UseRegisterReturnContract } from "@/features/auth/register/_logic/use-register.types"

export interface RegisterTemplateProps {
    config: Pick<UseRegisterReturnContract, 'control' | 'errors' | 'isSubmitting' | 'handleSubmit'>
}