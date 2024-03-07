import Budget from '@/components/templates/Budget'
import DomainChecker from '@/components/templates/DomainChecker'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DomainChecker />
    </main>
  )
}
