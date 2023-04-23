import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { api } from '@/configs'

type Props = {
  onError?: (error: AxiosError<unknown, unknown>, variables: string, context: unknown) => unknown
  onMutate?: (variables: string) => unknown
  onSettled?: (
    data: unknown,
    error: AxiosError<unknown, unknown> | null,
    variables: string,
    context: unknown
  ) => unknown
  onSuccess?: (data: unknown, variables: string, context: unknown) => unknown
}

export const useDeleteProduct = (props?: Props) => {
  const query = useMutation<unknown, AxiosError, string>({
    onError: props?.onError,
    onMutate: props?.onMutate,
    onSettled: props?.onSettled,
    onSuccess: props?.onSuccess,
    mutationKey: ['products', 'delete'],
    mutationFn: async (id) => {
      const { data } = await api.delete(`/products/${id}`)
      return data
    },
  })

  return query
}
