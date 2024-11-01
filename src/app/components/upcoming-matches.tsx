'use client'

import { NearestMatchesProps } from '@/@types/arena-sync'
import { getNearestMatches } from '@/actions/get-nearest-matches'
import { useQuery } from '@tanstack/react-query'
import { X } from 'lucide-react'
import Image from 'next/image'
import { UpcomingMatchesSkeleton } from './skeletons/upcoming-matches-skeleton'
import { UpcomingMatchesError } from '../errors/upcoming-matches-error'

export function UpcomingMatches() {
  const thisYear = new Date().getFullYear()

  const { data, isLoading, error } = useQuery({
    queryKey: ['nearestMatches'],
    queryFn: () => getNearestMatches(thisYear.toString()),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })

  if (isLoading) {
    return <UpcomingMatchesSkeleton />
  }

  if (error) {
    return <UpcomingMatchesError />
  }

  const matches: NearestMatchesProps[] = JSON.parse(data?.props.matches || '[]')

  return (
    <div className="scrollbar mx-auto flex w-full flex-col justify-center gap-2 overflow-auto rounded-lg pr-1 opacity-90 md:w-[40rem]">
      {matches.map((match, index) => {
        const matchDate = new Date(match.dataRealizacaoIso)

        const formattedDate = matchDate.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
        })

        const formattedTime = matchDate.toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        })

        return (
          <div key={index} className="flex gap-2">
            <div className="flex w-full justify-between rounded-s-lg bg-white uppercase text-black">
              <div className="flex items-center justify-center gap-2 bg-red-500/10 pr-2">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-full w-8 object-cover md:w-10"
                  src={match.timeMandante.escudo}
                  alt={`logo do time ${match.timeMandante.nome}`}
                />
                <p className="border p-0.5 text-center max-md:text-xs max-md:font-light">
                  {match.timeMandante.nome}
                </p>
              </div>

              <X className="mt-4 h-6 w-6 text-red-800 md:mt-2 md:h-10 md:w-10" />

              <div className="flex items-center justify-center gap-2 bg-red-500/10 pl-2">
                <p className="border p-0.5 text-center max-md:text-xs max-md:font-light">
                  {match.timeVisitante.nome}
                </p>
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-full w-8 object-cover md:w-10"
                  src={match.timeVisitante.escudo}
                  alt={`logo do time ${match.timeVisitante.nome}`}
                />
              </div>
            </div>

            <div className="flex flex-col rounded-e-lg bg-white text-center">
              <p className="bg-emerald-400 p-1">{formattedDate}</p>
              <span className="text-black">{formattedTime}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
