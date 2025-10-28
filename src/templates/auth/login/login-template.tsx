import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Wallet, Lock, Mail } from 'lucide-react'
import FinanceWallet from '@/assets/finance-wallet.png'

export const LoginTemplate = () => {
  return (
    <section className="w-full h-screen lg:h-[90vh] max-w-[980px] mx-auto p-4 flex flex-col gap-4 items-center lg:border-2 border-primary rounded-lg lg:mt-10 lg:shadow-lg">
      <div className="w-[220px] flex items-center justify-center h-[220px] rounded-full border-2 border-primary bg-primary">
        <img src={FinanceWallet} alt="FinanceWallet" className="w-auto object-cover h-[200px]" />
      </div>

      <div className="flex items-center justify-start lg:justify-center w-full gap-2">
        <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
          <Wallet className="w-8 h-8 text-white" />
        </div>
        <span className="text-2xl font-bold">FinanzasPro</span>
      </div>

      <div className="flex flex-col gap-2 items-start">
        <h3 className="text-2xl font-bold text-left">Bienvenido de vuelta.</h3>
        <span className="text-left">Accede a tu cuenta para gestionar tus finanzas.</span>
      </div>

      <form data-testid="loginForm" className="flex flex-col gap-2 items-center w-full">
        <Input
          htmlFor="email"
          label="Correo electrónico"
          type="email"
          name="email"
          id="email"
          placeholder="Correo Electrónico"
          icon={<Mail className="w-4 h-4" />}
        />
        <Input
          htmlFor="password"
          label="Contraseña"
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          icon={<Lock className="w-4 h-4" />}
        />
      </form>

      <div className="w-full flex justify-end lg:justify-center pr-2">
        <a className="text-blue-500 text-sm font-medium underline underline-offset-4" href="/register">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <div className="w-full flex justify-center lg:w-[20rem]">
        <Button size="large" label="Iniciar sesión" />
      </div>

      <div className="w-full flex justify-center">
        <a className="text-gray-500 text-sm font-medium underline underline-offset-4" href="/register">
          ¿No tienes una cuenta? <span className="font-bold text-blue-500">Registrate</span>
        </a>
      </div>
    </section>
  )
}
