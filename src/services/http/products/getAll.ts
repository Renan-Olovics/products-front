import { useQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import type { Product } from '@/types'
import { api } from '@/configs'

export const useGetAllProducts = () => {
  const query = useQuery<Product[], AxiosError, Product[]>({
    staleTime: 1000 * 60 * 10, // 10min
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await api.get<Product[]>('/products')
      return data
    },
  })

  return query
}
