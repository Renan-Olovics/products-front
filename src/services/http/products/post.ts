import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import type { PostProduct, Product } from '@/types'
import { api } from '@/configs'

type Props = {
  onError?: (
    error: AxiosError<unknown, unknown>,
    variables: PostProduct,
    context: unknown
  ) => unknown
  onMutate?: (variables: PostProduct) => unknown
  onSettled?: (
    data: Product | undefined,
    error: AxiosError<unknown, unknown> | null,
    variables: PostProduct,
    context: unknown
  ) => unknown
  onSuccess?: (data: Product, variables: PostProduct, context: unknown) => unknown
}

export const usePostProduct = ({ onError, onMutate, onSettled, onSuccess }: Props) => {
  const query = useMutation<Product, AxiosError, PostProduct>({
    onError,
    onMutate,
    onSettled,
    onSuccess,
    mutationKey: ['products', 'post'],
    mutationFn: async (product) => {
      const { data } = await api.post<Product>('/products', product)
      return data
    },
  })

  return query
}
