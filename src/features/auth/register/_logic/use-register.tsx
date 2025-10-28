import { useForm } from 'react-hook-form'
import { registerSchema, type UseRegisterReturnContract } from './use-register.types'
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { supabaseRegister } from '@/api/auth/register/register'
import toast from 'react-hot-toast'
import { useNavigation } from '@/hooks/use-navigation/use-navigation'
import { handleRegisterErrors } from '@/lib/handle-request-errors/handle-register-errors/handle-register-errors'

export const useRegister = (): UseRegisterReturnContract => {
  const { navigateTo } = useNavigation()
  const {
    control,
    watch,
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

  const { mutateAsync } = useMutation({
    mutationFn: supabaseRegister,
    onSuccess: () => {
      toast.success('Cuenta creada correctamente')
      navigateTo('/')
    },
    onError: (error) => {
      toast.error(handleRegisterErrors(error.message))
    },
  })

  const handleSubmit = () => {
    mutateAsync({
      email: watch('email'),
      password: watch('password'),
      name: watch('name'),
      lastName: watch('lastName'),
    })
  }

  return {
    control,
    errors,
    isSubmitting,
    handleSubmit,
  }
}
