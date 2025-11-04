import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const allItems = [{ name: 'Início', url: 'https://novolargeriatria.com.br' }, ...items]

  return (
    <>
      <BreadcrumbSchema items={allItems} />

      <nav
        aria-label="Breadcrumb"
        className={`flex items-center gap-2 text-sm ${className}`}
      >
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-600 transition hover:text-[#2C3E6B]"
          aria-label="Voltar para página inicial"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Início</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <div key={`breadcrumb-${index}`} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-gray-400" />
              {isLast ? (
                <span className="font-medium text-[#2C3E6B]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="text-gray-600 transition hover:text-[#2C3E6B]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          )
        })}
      </nav>
    </>
  )
}
