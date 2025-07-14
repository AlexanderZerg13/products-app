import { ProductType } from '@/types/product'
import { notFound } from 'next/navigation'

async function getProduct(id: string): Promise<ProductType | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
      {
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      return null
    }

    return res.json()
  } catch {
    return null
  }
}

interface ProductPagePropsType {
  params: { id: string }
}

export default async function ProductPage({
  params: { id },
}: ProductPagePropsType) {
  const product = await getProduct(id)

  if (!product) {
    return notFound()
  }

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-64 h-auto mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">${product.price}</p>
      <p className="text-lg ">{product.description}</p>
    </main>
  )
}
