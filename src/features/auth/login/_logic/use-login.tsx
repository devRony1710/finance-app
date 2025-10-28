import { login } from '@/api/auth/login/login'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { loginSchema, type UseLoginReturnContract } from './use-login.types'
import type z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { handleLoginErrors } from '@/lib/handle-request-errors/handle-login-errors/handle-login-errors'
import { useNavigate } from 'react-router-dom'

export const useLogin = (): UseLoginReturnContract => {
  const navigate = useNavigate()

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
      navigate('/dashboard')
    },
    onError: (error) => {
      toast.error(handleLoginErrors(error.message))
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
