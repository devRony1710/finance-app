import { useForm } from 'react-hook-form'
import z from 'zod'
import { createTransactionFormSchema, type UseCreateTransactionReturnContract } from './use-create-transaction.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCategories } from '@/api/get/get-categories/get-categories'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import dayjs from 'dayjs'

export const useCreateTransaction = (): UseCreateTransactionReturnContract => {
  const {
    control,
    formState: { errors },
  } = useForm<z.infer<typeof createTransactionFormSchema>>({
    defaultValues: {
      name: '',
      amount: 0,
      category: '',
      date: dayjs().toDate(),
    },
    mode: 'all',
    resolver: zodResolver(createTransactionFormSchema),
  })

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const categoriesOptions = useMemo(() => {
    return data?.data.map((category) => ({
      value: category.id,
      label: category.name,
    }))
  }, [data])

  return {
    control,
    categoriesOptions: categoriesOptions ?? [],
    errors,
  }
}
