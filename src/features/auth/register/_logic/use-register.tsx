import { useForm } from 'react-hook-form'
import { registerSchema, type UseRegisterReturnContract } from './use-register.types'
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const useRegister = (): UseRegisterReturnContract => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(registerSchema),
  })

  return {
    control,
    errors,
    isSubmitting,
  }
}
