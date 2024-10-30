import { Suspense } from 'react'
import { getSearchMatch } from '@/actions/get-search-match'
import { MatchProps } from '@/@types/arena-sync'
import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Link from 'next/link'
import { SearchFormMatch } from '@/app/components/search-form-match'
import { Pagination } from '@/app/components/pagination'
import { ChartColumnStacked } from 'lucide-react'

interface SearchProps {
  searchParams: {
    team1: string
    team2: string
    championshipSeason: string
    status: string
    page: string
  }
}

export default async function Search({ searchParams }: SearchProps) {
  const { status, championshipSeason, page, team1, team2 } = searchParams

  const { props } = await getSearchMatch({
    status,
    championshipSeason,
    page,
    team1,
    team2,
  })

  const matches: MatchProps[] = JSON.parse(props.matches ?? '[]')

  const searchedItemHasNotBeenFound = matches.length === 0 && team1

  return (
    <div className="relative bg-green-800/80 pt-28">
      <p className="absolute right-5 top-5 text-2xl font-extrabold text-yellow-300 md:right-10 md:top-10">
        Arena{' '}
        <span className="rounded-md bg-white p-0.5 text-green-500">Sync</span>
      </p>

      <div className="pl-10">
        <Link href="/" className="border-b">
          Voltar para Home
        </Link>
      </div>

      <div className="mt-14 flex flex-col items-center gap-4 px-4">
        <Suspense fallback={null}>
          <SearchFormMatch />
        </Suspense>

        {team1 && (
          <p>
            Resultado para:{' '}
            <span className="font-semibold">
              {team1}, {team2}
            </span>
          </p>
        )}
      </div>

      <main className="flex min-h-screen w-full flex-col justify-between gap-4">
        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-6">
          {searchedItemHasNotBeenFound ? (
            <p>Não encontrado.</p>
          ) : (
            matches.map((match) => {
              const isFinalized = match.status === 'agendado'
              return (
                <article
                  key={match.id}
                  className="flex w-[12rem] flex-col gap-4 rounded-lg bg-yellow-50/10 duration-300 hover:bg-yellow-50/20 md:w-[20rem]"
                >
                  <header className="flex h-10 items-center justify-between bg-emerald-400 p-1 md:h-14">
                    <div>
                      <p className="border-b font-medium max-md:text-xs">
                        {match.status}
                      </p>
                      <p className="font-medium max-md:text-xs">
                        {match.estadio}
                      </p>
                    </div>
                    <span className="text-xs md:text-sm">
                      {format(
                        new Date(match.dataRealizacaoIso),
                        'dd/MM, HH:mm',
                        {
                          locale: ptBR,
                        },
                      )}
                    </span>
                  </header>

                  <div className="flex flex-col items-center gap-4 p-1">
                    <div className="flex gap-4">
                      <p className="font-light max-md:text-xs">Mandante</p>
                      <Image
                        width={100}
                        height={100}
                        sizes="100vw"
                        className="h-6 w-6 object-cover md:h-10 md:w-10"
                        src={match.timeMandante.escudo}
                        alt="wallpaper de três jogadores no campo de futebol"
                      />
                      <p className="font-light max-md:text-xs">
                        {match.timeMandante.sigla}
                      </p>
                      <span className="max-md:text-xs">
                        {match.placarMandante}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <p className="font-light max-md:text-xs">Visitante</p>
                      <Image
                        width={100}
                        height={100}
                        sizes="100vw"
                        className="h-6 w-6 object-cover md:h-10 md:w-10"
                        src={match.timeVisitante.escudo}
                        alt="wallpaper de três jogadores no campo de futebol"
                      />
                      <p className="font-light max-md:text-xs">
                        {match.timeVisitante.sigla}
                      </p>
                      <span className="max-md:text-xs">
                        {match.placarVisitante}
                      </span>
                    </div>

                    <Link
                      href={`/match-details/${match.timeMandante.sigla}-${match.timeVisitante.sigla}/${match.id}`}
                      data-value={isFinalized}
                      className="flex gap-2 text-sm underline opacity-80 hover:opacity-100 data-[value=true]:hidden md:text-base"
                    >
                      Estatística
                      <ChartColumnStacked className="h-5 w-5 md:h-6 md:w-6" />
                    </Link>
                  </div>

                  <footer className="flex h-6 items-center justify-center rounded-b-lg bg-white">
                    {match.placar ? (
                      <p className="text-xs text-black md:text-sm">
                        {match.placar}
                      </p>
                    ) : (
                      <span className="text-black">_ _ X _ _</span>
                    )}
                  </footer>
                </article>
              )
            })
          )}
        </div>

        <div className="pb-28">
          <Pagination
            sizeList={matches.length}
            disableArrowIf={!searchedItemHasNotBeenFound}
          />
        </div>
      </main>
    </div>
  )
}
