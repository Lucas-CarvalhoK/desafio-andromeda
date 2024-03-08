import Budget from '@/components/templates/Budget'
import DomainChecker from '@/components/templates/DomainChecker'
import PaletteGenerator from '@/components/templates/PaletteGenerator'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PaletteGenerator />
    </main>
  )
}
