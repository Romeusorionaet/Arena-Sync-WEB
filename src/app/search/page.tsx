import { Suspense } from 'react'
import { SearchFormMatch } from '../components/search-form-match'
import { getSearchMatch } from '@/actions/get-search-match'
import { MatchProps } from '@/@types/arena-sync'
import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Pagination } from '../components/pagination'
import Link from 'next/link'

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
    <main className="flex min-h-screen w-full flex-col justify-between gap-4 bg-green-800/80 pt-28">
      <div className="pl-10">
        <Link href="/" className="border-b">
          Voltar
        </Link>
      </div>

      <div>
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

        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-6">
          {searchedItemHasNotBeenFound ? (
            <p>Não encontrado.</p>
          ) : (
            matches.map((match) => {
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
      </div>

      <div className="pb-28">
        <Pagination
          sizeList={matches.length}
          disableArrowIf={!searchedItemHasNotBeenFound}
        />
      </div>
    </main>
  )
}
