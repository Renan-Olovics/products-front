import { Product } from '@/types'
import Link from 'next/link'

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <section className="bg-dark-purple-800 rounded p-3">
      <Link href={`products/${product.id}`}>
        <h1>{product.name}</h1>
        <p className="text-sm">{product.description}</p>
        <div>
          <div className="flex justify-between">
            <span>
              {product.price.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })}
            </span>

            <span className="text-sm">Stock:{product.stock_number}</span>
          </div>
        </div>
        <span className="text-2xs ">{product.id}</span>
      </Link>
    </section>
  )
}
