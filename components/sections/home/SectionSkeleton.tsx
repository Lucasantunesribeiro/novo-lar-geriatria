export default function SectionSkeleton() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-10 shadow-sm">
      <div className="space-y-4">
        <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3 rounded-2xl border border-gray-100 p-4">
              <div className="h-40 w-full animate-pulse rounded-xl bg-gray-100" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
