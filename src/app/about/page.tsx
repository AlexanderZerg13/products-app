export const dynamic = 'force-static'

export default function AboutPage() {
  const now = new Date().toLocaleString()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">О нас</h1>
      <p className="mt-4">
        Это тестовое приложение для демонстрации работы с Next.js.
      </p>
      <p className="text-sm text-gray-500 mt-2">Сгенерировано: {now}</p>
    </main>
  )
}
