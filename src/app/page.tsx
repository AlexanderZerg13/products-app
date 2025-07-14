'use client'

import { useEffect, useState } from 'react'
import { ProductCard } from '@/components/ProductCard'
import { ProductType } from '@/types/product'

export default function HomePage() {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка при получении данных')
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Список продуктов</h1>

      {loading && <p>Загрузка...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {!loading &&
          !error &&
          products
            .slice(0, 12)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </main>
  )
}
