import { LoginTemplate } from '@/templates/auth/login/login-template'
import { useLogin } from './_logic/use-login'
import { useAuth } from '@/context/auth-context/auth-context'
import { useMutation } from '@tanstack/react-query'
import { useNavigation } from '@/hooks/use-navigation/use-navigation'
import toast from 'react-hot-toast'
import { handleLoginErrors } from '@/lib/handle-request-errors/handle-login-errors/handle-login-errors'
import { Loader } from 'lucide-react'

export const Login = () => {
  const { control, watch, errors, isSubmitting } = useLogin()
  const { loginTrigger } = useAuth()
  const { navigateTo } = useNavigation()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => loginTrigger(watch('email'), watch('password')),
    onSuccess: () => {
      navigateTo('/dashboard')
      toast.success('Inicio de sesión exitoso')
    },
    onError: (error) => {
      toast.error(handleLoginErrors(error.message))
    },
  })

  if (isPending) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        <Loader className="w-12 h-12 animate-spin" />
      </section>
    )
  }

  return <LoginTemplate config={{ control, errors, isSubmitting }} handleLogin={mutateAsync} />
}
