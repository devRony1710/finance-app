import { Wallet } from 'lucide-react'
import FinanceWalletFrontVariant from '@/assets/wallet-front-variant.png'
import { RegisterForm } from './_components/register-form/register-form'
import type { RegisterTemplateProps } from './register-template.types'
import type { FC } from 'react'

export const RegisterTemplate: FC<RegisterTemplateProps> = ({ config }) => {
  return (
    <section className="w-full h-screen lg:h-[90vh] max-w-[980px] mx-auto p-4 flex flex-col gap-4 items-center lg:border-2 border-primary rounded-lg lg:mt-10 lg:shadow-lg">
      <div className="flex items-center justify-center w-full gap-2">
        <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
          <Wallet className="w-8 h-8 text-white" />
        </div>
        <span className="text-2xl font-bold">FinanzasPro</span>
      </div>

      <div className="w-[220px] flex items-center justify-center h-[220px] rounded-full border-2 border-primary bg-primary">
        <img src={FinanceWalletFrontVariant} alt="FinanceWallet" className="w-auto object-cover h-[200px]" />
      </div>

      <div className="flex flex-col gap-2 items-start w-full">
        <h3 className="text-2xl font-bold text-left">Crea tu cuenta.</h3>
        <span className="text-left">Registrate para gestionar tus finanzas.</span>
      </div>

      <RegisterForm config={config} />
    </section>
  )
}
