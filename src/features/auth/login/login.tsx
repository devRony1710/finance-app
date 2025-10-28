import { LoginTemplate } from '@/templates/auth/login/login-template'
import { useLogin } from './_logic/use-login'

export const Login = () => {
  const { control, handleLogin, errors, isSubmitting } = useLogin()

  return <LoginTemplate config={{ control, handleLogin, errors, isSubmitting }} />
}
