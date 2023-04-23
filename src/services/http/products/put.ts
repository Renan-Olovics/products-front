import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import type { PutProduct, Product } from '@/types'
import { api } from '@/configs'

type Props = {
  onError?: (
    error: AxiosError<unknown, unknown>,
    variables: PutProduct,
    context: unknown
  ) => unknown
  onMutate?: (variables: PutProduct) => unknown
  onSettled?: (
    data: Product | undefined,
    error: AxiosError<unknown, unknown> | null,
    variables: PutProduct,
    context: unknown
  ) => unknown
  onSuccess?: (data: Product, variables: PutProduct, context: unknown) => unknown
}

export const usePutProduct = (props?: Props) => {
  const query = useMutation<Product, AxiosError, PutProduct>({
    onError: props?.onError,
    onMutate: props?.onMutate,
    onSettled: props?.onSettled,
    onSuccess: props?.onSuccess,
    mutationKey: ['products', 'put'],
    mutationFn: async (product) => {
      const { data } = await api.put<Product>(`/products/${product.id}`, product)
      return data
    },
  })

  return query
}
