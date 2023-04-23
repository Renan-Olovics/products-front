import { Product } from '@/types'

export type PutProduct = Partial<Product> & { id: string }
