import { LoginTemplate } from '@/templates/auth/login/login-template'
import { useLogin } from './_logic/use-login'

export const Login = () => {
  const { control, handleLogin, errors } = useLogin()

  return <LoginTemplate control={control} handleLogin={handleLogin} errors={errors} />
}
