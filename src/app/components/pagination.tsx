'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface Props {
  sizeList: number
  disableArrowIf: boolean
}

export function Pagination({ sizeList, disableArrowIf }: Props) {
  const searchParams = useSearchParams()
  const team1 = searchParams.get('team1') ?? ''
  const team2 = searchParams.get('team2') ?? ''
  const status = searchParams.get('status') ?? ''
  const championshipSeason = searchParams.get('championshipSeason')
  const page = parseInt(searchParams.get('page') || '1', 10)

  const [currentPage, setCurrentPage] = useState(page)

  const router = useRouter()

  const path = usePathname()

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const handleChangePage = (direction: string) => {
    let newPage = currentPage
    if (direction === 'next') {
      newPage = currentPage + 1
    } else if (direction === 'previous' && currentPage > 1) {
      newPage = currentPage - 1
    }

    setCurrentPage(newPage)

    router.push(
      `${path}?championshipSeason=${championshipSeason}&team1=${team1}&team2=${team2}&status=${status}&page=${newPage}`,
    )
  }

  return (
    <div className="mt-10 w-full pr-4">
      <div className="flex items-center justify-end gap-4">
        <button
          data-testid="btn_left"
          data-value={currentPage <= 1}
          onClick={() => handleChangePage('previous')}
          className="rounded-lg border border-white p-1 duration-300 hover:border-transparent hover:bg-white/20 data-[value=true]:hidden"
        >
          <ChevronLeft />
        </button>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 p-2">
          <span
            data-value={!disableArrowIf}
            className="text-black data-[value=true]:hidden"
          >
            <strong>{page}</strong>
          </span>
        </div>
        <button
          data-testid="btn_right"
          data-value={sizeList < 10 || !disableArrowIf}
          onClick={() => handleChangePage('next')}
          className="rounded-lg border border-white p-1 duration-300 hover:border-transparent hover:bg-white/20 data-[value=true]:hidden"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
