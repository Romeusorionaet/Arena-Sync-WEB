import { Suspense } from 'react'
import { SearchFormMatch } from '../components/search-form-match'
import { getSearchMatch } from '@/actions/get-search-match'
import { MatchProps } from '@/@types/arena-sync'
import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

  console.log(props.matches, '[[')

  const matches: MatchProps[] = JSON.parse(props.matches ?? '[]')

  const searchedItemHasNotBeenFound = matches.length === 0 && team1

  return (
    <div className="flex min-h-screen w-full flex-col justify-between gap-4 bg-green-800/80 pt-28">
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

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {searchedItemHasNotBeenFound ? (
            <p>Não encontrado.</p>
          ) : (
            matches.map((match) => {
              return (
                <article
                  key={match.id}
                  className="flex h-72 w-[12rem] flex-col justify-between rounded-lg bg-yellow-50/10 p-2 duration-300 hover:bg-yellow-50/20 md:w-[20rem]"
                >
                  <header className="flex justify-between">
                    <div>
                      <p>{match.status}</p>
                      <p>{match.estadio}</p>
                    </div>
                    {format(new Date(match.dataRealizacaoIso), 'dd/MM, HH:mm', {
                      locale: ptBR,
                    })}
                  </header>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-4">
                      <p>Mandante</p>
                      <Image
                        width={100}
                        height={100}
                        sizes="100vw"
                        className="h-10 w-10 object-cover"
                        src={match.timeMandante.escudo}
                        alt="wallpaper de três jogadores no campo de futebol"
                      />
                      <p>{match.timeMandante.sigla} </p>
                      <span>{match.placarMandante}</span>
                    </div>

                    <div className="flex gap-4">
                      <p>Visitante</p>
                      <Image
                        width={100}
                        height={100}
                        sizes="100vw"
                        className="h-10 w-10 object-cover"
                        src={match.timeVisitante.escudo}
                        alt="wallpaper de três jogadores no campo de futebol"
                      />
                      <p>{match.timeVisitante.sigla} </p>
                      <span>{match.placarVisitante}</span>
                    </div>
                  </div>

                  <footer>
                    <p className="text-center">{match.placar}</p>
                  </footer>
                </article>
              )
            })
          )}
        </div>
      </div>

      <div className="pb-28">
        {/* <Pagination
          sizeList={productListToShow.length}
          disableArrowIf={!searchedItemHasNotBeenFound}
        /> */}
      </div>
    </div>
  )
}
