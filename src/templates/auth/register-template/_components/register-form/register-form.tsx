import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'

export const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-2 items-center w-full overflow-y-auto">
      <Input label="Nombre" htmlFor="name" type="text" id="name" placeholder="Nombre" />

      <Input label="Apellido" htmlFor="name" type="text" id="name" placeholder="Apellido" />

      <Input label="Correo electrónico" htmlFor="name" type="text" id="name" placeholder="Correo electrónico" />

      <Input label="Contraseña" htmlFor="name" type="text" id="name" placeholder="Contraseña" />

      <Button label="Registrarse" type="button" className="mt-10" />
    </form>
  )
}
