import { ProductCard } from '@/components/Molecules'
import { useGetAllProducts } from '@/services'

const Home = () => {
  const { data } = useGetAllProducts()

  return (
    <div className="font-roboto h-screen m-5">
      <div className="display-grid-200">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Home
