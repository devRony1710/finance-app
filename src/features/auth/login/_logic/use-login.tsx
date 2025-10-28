import { login } from '@/api/auth/login/login'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { loginSchema, type UseLoginReturnContract } from './use-login.types'
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const useLogin = (): UseLoginReturnContract => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(loginSchema),
  })

  const { mutateAsync } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success('Se inicio sesión correctamente!')
    },
    onError: () => {
      toast.error('Hubo un error al iniciar sesión')
    },
  })

  const handleLogin = () => {
    mutateAsync({
      email: watch('email'),
      password: watch('password'),
    })
  }

  return {
    control,
    handleLogin,
    errors,
  }
}
