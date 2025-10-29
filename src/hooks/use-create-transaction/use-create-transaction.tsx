import { useForm } from 'react-hook-form'
import z from 'zod'
import { createTransactionFormSchema, type UseCreateTransactionReturnContract } from './use-create-transaction.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { getCategories } from '@/api/get/get-categories/get-categories'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo } from 'react'
import dayjs from 'dayjs'
import { createTransactionSupabase } from '@/api/post/create-transaction-supabase/create-transaction-supabase'
import { useAuth } from '@/context/auth-context/auth-context'
import toast from 'react-hot-toast'
import { handleCreateTransactionErrros } from '@/lib/handle-request-errors/handle-create-transaction-errors/handle-create-transaction-errors'
import { QueryKeys } from '@/features/dashboard/_logic/_querykeys'

export const useCreateTransaction = (onClose: VoidFunction): UseCreateTransactionReturnContract => {
  const { user } = useAuth()
  const {
    control,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof createTransactionFormSchema>>({
    defaultValues: {
      name: '',
      amount: null,
      category: '',
      date: dayjs().toDate(),
    },
    mode: 'all',
    resolver: zodResolver(createTransactionFormSchema),
  })

  const queryClient = useQueryClient()

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.balance, user?.id],
    })
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.totals, user?.id],
    })
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.monthlySummary, user?.id],
    })
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.topExpenses, user?.id],
    })
  }

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createTransactionSupabase,
    onSuccess: () => {
      reset()
      onClose()
      toast.success('Transacción creada exitosamente')
      invalidateQueries()
    },
    onError: (error) => {
      toast.error(handleCreateTransactionErrros(error.message))
    },
  })

  const handleSubmit = async () => {
    mutateAsync({
      amount: watch('amount') as number,
      category_id: watch('category'),
      date: watch('date'),
      title: watch('name'),
      type: watch('type'),
      user_id: (user?.id as string) ?? '',
    })
  }

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

  const typeOptions = useMemo(() => {
    return [
      { value: 'income', label: 'Ingreso' },
      { value: 'expense', label: 'Gasto' },
    ]
  }, [])

  return {
    control,
    categoriesOptions: categoriesOptions ?? [],
    errors,
    handleSubmit,
    isValid,
    typeOptions,
    isPending,
  }
}
