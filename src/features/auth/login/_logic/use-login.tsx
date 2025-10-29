import { useForm } from 'react-hook-form'
import { loginSchema, type UseLoginReturnContract } from './use-login.types'
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const useLogin = (): UseLoginReturnContract => {
  const {
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(loginSchema),
  })

  return {
    control,
    errors,
    isSubmitting,
    watch,
  }
}
