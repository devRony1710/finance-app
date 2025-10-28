import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import type { RegisterFormProps } from './register-form.types'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'

export const RegisterForm: FC<RegisterFormProps> = ({ config }) => {
  return (
    <form data-testid="register-form" className="flex flex-col gap-2 items-center w-full overflow-y-auto">
      <Controller
        control={config.control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            htmlFor="name"
            label="Nombre"
            type="text"
            id="name"
            placeholder="Nombre"
            errors={config.errors.name?.message}
          />
        )}
      />

      <Controller
        control={config.control}
        name="lastName"
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            htmlFor="lastName"
            label="Apellido"
            type="text"
            id="lastName"
            placeholder="Apellido"
            errors={config.errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={config.control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            htmlFor="email"
            label="Correo electrónico"
            type="email"
            id="email"
            placeholder="Correo electrónico"
            errors={config.errors.email?.message}
          />
        )}
      />

      <Controller
        control={config.control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            onChange={onChange}
            value={value}
            htmlFor="password"
            label="Contraseña"
            type="password"
            id="password"
            placeholder="Contraseña"
            errors={config.errors.password?.message}
          />
        )}
      />

      <Button label="Registrarse" type="button" className="mt-10" />
    </form>
  )
}
