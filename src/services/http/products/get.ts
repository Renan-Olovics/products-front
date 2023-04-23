import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { DEFAULT_CACHE_TIME } from '@/constants'
import type { Product } from '@/types'
import { api } from '@/configs'

type Props = {
  id: string
}

export const useGetProduct = ({ id }: Props) => {
  const query = useQuery<Product, AxiosError, Product>({
    staleTime: DEFAULT_CACHE_TIME,
    queryKey: ['products', id],
    queryFn: async () => {
      const { data } = await api.get<Product>(`/products/${id}`)
      return data
    },
  })

  return query
}
