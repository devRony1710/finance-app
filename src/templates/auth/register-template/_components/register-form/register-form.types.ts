import type { UseRegisterReturnContract } from "@/features/auth/register/_logic/use-register.types";

export interface RegisterFormProps {
    config: Pick<UseRegisterReturnContract, 'control' | 'errors' | 'isSubmitting'>
}