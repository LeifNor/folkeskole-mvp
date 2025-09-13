import TimebankInfo from '@/components/TimebankInfo'

export default function TimebankPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
      <div>
        <div className="kicker">Initiativ</div>
        <h1 className="h1">Timebanken</h1>
      </div>

      <TimebankInfo />

      <div className="card p-4 sm:p-6">
        <div className="kicker mb-2">Kilder</div>
        <p className="text-gray-600 text-sm">
          Undervisningsministeriet, KL, Retsinformation.
        </p>
      </div>
    </main>
  )
}
