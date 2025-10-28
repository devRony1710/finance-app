import { RegisterTemplate } from '@/templates/auth/register-template/register-template'
import { useRegister } from './_logic/use-register'

export const Register = () => {
  const { control, errors, isSubmitting } = useRegister()
  return <RegisterTemplate config={{ control, errors, isSubmitting }} />
}
