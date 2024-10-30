'use client'

import { NearestMatchesProps } from '@/@types/arena-sync'
import { getNearestMatches } from '@/actions/get-nearest-matches'
import { useQuery } from '@tanstack/react-query'
import { X } from 'lucide-react'
import Image from 'next/image'

export function UpcomingMatches() {
  const thisYear = new Date().getFullYear()

  const { data } = useQuery({
    queryKey: ['nearestMatches'],
    queryFn: () => getNearestMatches(thisYear.toString()),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  })

  const matches: NearestMatchesProps[] = JSON.parse(data?.props.matches || '[]')

  return (
    <div className="scrollbar flex flex-col gap-2 overflow-auto pr-1">
      {matches.map((match) => {
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
          <div key={match.dataRealizacaoIso} className="flex gap-2">
            <div className="flex w-full justify-between rounded-s-lg bg-white uppercase text-black">
              <div className="flex items-center justify-center gap-2">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-full w-8 object-cover md:w-10"
                  src={match.timeMandante.escudo}
                  alt="wallpaper de três jogadores no campo de futebol"
                />
                <p className="border p-0.5 text-center max-md:text-xs max-md:font-light">
                  {match.timeMandante.nome}
                </p>
              </div>

              <X className="mt-4 h-6 w-6 text-black md:mt-2 md:h-10 md:w-10" />

              <div className="flex items-center justify-center gap-2">
                <p className="border p-0.5 text-center max-md:text-xs max-md:font-light">
                  {match.timeVisitante.nome}
                </p>
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-full w-8 object-cover md:w-10"
                  src={match.timeVisitante.escudo}
                  alt="wallpaper de três jogadores no campo de futebol"
                />
              </div>
            </div>

            <div className="flex flex-col rounded-r-lg bg-white text-center">
              <p className="bg-emerald-400 p-1">{formattedDate}</p>
              <span className="text-black">{formattedTime}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
