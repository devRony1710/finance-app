import { useForm } from 'react-hook-form'
import z from 'zod'
import { createTransactionFormSchema } from './use-create-transaction.types'
import { zodResolver } from '@hookform/resolvers/zod'

export const useCreateTransaction = () => {
  const { control } = useForm<z.infer<typeof createTransactionFormSchema>>({
    defaultValues: {
      name: '',
      amount: 0,
      category: '',
      date: '',
      description: '',
    },
    mode: 'all',
    resolver: zodResolver(createTransactionFormSchema),
  })

  return {
    control,
  }
}
