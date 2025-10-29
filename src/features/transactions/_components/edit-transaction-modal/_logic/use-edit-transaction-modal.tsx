import { useForm } from 'react-hook-form'
import type z from 'zod'
import { editFormSchema } from './use-edit-transaction-modal.types'
import { zodResolver } from '@hookform/resolvers/zod'

export const useEditTransactionModal = (nameDefault: string, amountDefault: number) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof editFormSchema>>({
    defaultValues: {
      name: nameDefault,
      amount: amountDefault,
    },
    mode: 'onChange',
    resolver: zodResolver(editFormSchema),
  })

  return {
    control,
    errors,
    watch,
  }
}
