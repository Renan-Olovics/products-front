import { useRouter } from 'next/router'

export const ProductId = () => {
  const { query } = useRouter()

  return <div className="h-full w-full">{query.id}</div>
}

export default ProductId
