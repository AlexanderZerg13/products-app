import { ProductType } from '@/types/product'
import Link from 'next/link'

interface ProductCardPropsType {
  product: ProductType
}

export const ProductCard = ({ product }: ProductCardPropsType) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition flex flex-col">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />

        <h2 className="font-semibold text-lg">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  )
}
