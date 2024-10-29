import { MatchDetailsProps } from '@/@types/arena-sync'
import { getMatchDetails } from '@/actions/get-match-details'
import { metadata } from '@/app/layout'
import { Metadata } from 'next'
import { format } from 'date-fns'
import '@/assets/styles/table-statistics.css'
import { ptBR } from 'date-fns/locale'
import Image from 'next/image'
import { StatisticsContent } from '@/app/components/statistics-content'
import { Shirt } from 'lucide-react'
import { ReplacementContent } from '@/app/components/replacement-content'

interface ParamsProps {
  params: {
    slug: string
    id: string
  }
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const { slug, id } = params
  return {
    title: slug,
    openGraph: {
      siteName: metadata.openGraph?.siteName,
      url: `${metadata.openGraph?.url}/details/${slug}/${id}`,
      images: [
        {
          url: 'https://brandlogos.net/wp-content/uploads/2023/08/brasileiro_serie_a-logo_brandlogos.net_nnva7-768x943.png',
          width: 1000,
          height: 1000,
          alt: 'My custom alt',
        },
      ],
    },
  }
}

export default async function MatchDetails({ params }: ParamsProps) {
  const { id } = params
  const { props } = await getMatchDetails(id)

  const match: MatchDetailsProps = JSON.parse(props.match ?? '')

  return (
    <main className="flex min-h-screen w-full flex-col gap-4 bg-green-800/80 pt-28">
      <section>
        <p className="mb-4 text-center font-bold">{match.status}</p>
        <h2 className="text-center max-md:text-base max-md:font-light">
          {match.placar}
        </h2>

        <p className="text-center max-md:text-base max-md:font-light">
          Realizado em{' '}
          <span className="font-normal">
            {format(new Date(match.dataRealizacaoIso), 'dd/MM, HH:mm', {
              locale: ptBR,
            })}
          </span>
        </p>

        <p className="text-center max-md:text-base max-md:font-light">
          Estádio: {match.estadio}
        </p>
      </section>

      <section className="mt-10 space-y-10 bg-white/90 p-2 text-black md:p-10">
        <article className="mx-auto flex w-full max-w-[30rem] flex-col justify-between rounded-lg p-1 text-black">
          <header className="flex justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
            <div className="flex flex-col items-center">
              <Image
                width={100}
                height={100}
                sizes="100vw"
                className="h-10 w-10 object-cover"
                src={match.timeMandante.escudo}
                alt="wallpaper de três jogadores no campo de futebol"
              />

              <p className="text-sm">{match.timeMandante.sigla}</p>
            </div>
            <h2 className="max-md:text-base">estatísticas</h2>
            <div className="flex flex-col items-center">
              <Image
                width={100}
                height={100}
                sizes="100vw"
                className="h-10 w-10 object-cover"
                src={match.timeVisitante.escudo}
                alt="wallpaper de três jogadores no campo de futebol"
              />

              <p className="text-sm">{match.timeVisitante.sigla}</p>
            </div>
          </header>

          <StatisticsContent match={match} />

          <footer className="flex items-center justify-center gap-4 rounded-b-lg bg-emerald-300 p-1">
            <Image
              width={100}
              height={100}
              sizes="100vw"
              className="h-10 w-10 object-cover"
              src="/img/brasileirao-assai.png"
              alt="wallpaper de três jogadores no campo de futebol"
            />
            <p className="text-xs">Principais estatísticas da partida</p>
          </footer>
        </article>

        <div className="flex flex-wrap gap-4">
          <article className="mx-auto flex w-full max-w-[30rem] flex-col rounded-lg p-1 text-black">
            <header className="flex items-center justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
              <div>
                <h2 className="max-md:text-base">Escalação</h2>
                <p className="text-sm font-light">
                  Técnico: {match.timeMandante.Escalacao[0].tecnico}
                </p>
                <p className="text-sm font-light">
                  Esquema Tático:{' '}
                  {match.timeMandante.Escalacao[0].esquemaTatico}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src={match.timeMandante.escudo}
                  alt="wallpaper de três jogadores no campo de futebol"
                />

                <p className="text-sm">{match.timeMandante.nome}</p>
              </div>
            </header>

            <div className="flex justify-between">
              <div className="w-1/2 bg-emerald-300 p-1">
                <h3 className="max-md:text-base">Titular</h3>

                <div className="flex flex-col gap-2">
                  {match.timeMandante.Escalacao[0].titular.map((esc) => {
                    return (
                      <div
                        key={esc.atleta.id}
                        className="border-b border-black/10 font-light"
                      >
                        <p>{esc.atleta.nomePopular}</p>

                        <div className="flex items-center">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <div className="flex gap-2">
                            <span className="max-md:text-xs">{esc.camisa}</span>
                            <span className="max-md:text-xs">
                              {esc.posicao}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="w-1/2 bg-emerald-900 p-1 text-white">
                <h3 className="max-md:text-base">Reserva</h3>

                <div className="flex flex-col gap-2">
                  {match.timeMandante.Escalacao[0].reserva.map((esc) => {
                    return (
                      <div
                        key={esc.atleta.id}
                        className="border-b border-black/10 font-light"
                      >
                        <p>{esc.atleta.nomePopular}</p>

                        <div className="flex items-center">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <div className="flex gap-2">
                            <span className="max-md:text-xs">{esc.camisa}</span>
                            <span className="max-md:text-xs">
                              {esc.posicao}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <footer className="h-6 rounded-b-lg bg-emerald-300" />
          </article>

          <article className="mx-auto flex w-full max-w-[30rem] flex-col rounded-lg p-1 text-black">
            <header className="flex items-center justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
              <div>
                <h2 className="max-md:text-base">Escalação</h2>
                <p className="text-sm font-light">
                  Técnico: {match.timeVisitante.Escalacao[0].tecnico}
                </p>
                <p className="text-sm font-light">
                  Esquema Tático:{' '}
                  {match.timeVisitante.Escalacao[0].esquemaTatico}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src={match.timeVisitante.escudo}
                  alt="wallpaper de três jogadores no campo de futebol"
                />

                <p className="text-sm">{match.timeVisitante.nome}</p>
              </div>
            </header>

            <div className="flex justify-between">
              <div className="w-1/2 bg-emerald-300 p-1">
                <h3 className="max-md:text-base">Titular</h3>

                <div className="flex flex-col gap-2">
                  {match.timeVisitante.Escalacao[0].titular.map((esc) => {
                    return (
                      <div
                        key={esc.atleta.id}
                        className="border-b border-black/10 font-light"
                      >
                        <p>{esc.atleta.nomePopular}</p>

                        <div className="flex items-center">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <div className="flex gap-2">
                            <span className="max-md:text-xs">{esc.camisa}</span>
                            <span className="max-md:text-xs">
                              {esc.posicao}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="w-1/2 bg-emerald-900 p-1 text-white">
                <h3 className="max-md:text-base">Reserva</h3>

                <div className="flex flex-col gap-2">
                  {match.timeVisitante.Escalacao[0].reserva.map((esc) => {
                    return (
                      <div
                        key={esc.atleta.id}
                        className="border-b border-black/10 font-light"
                      >
                        <p>{esc.atleta.nomePopular}</p>

                        <div className="flex items-center">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <div className="flex gap-2">
                            <span className="max-md:text-xs">{esc.camisa}</span>
                            <span className="max-md:text-xs">
                              {esc.posicao}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <footer className="h-6 rounded-b-lg bg-emerald-300" />
          </article>
        </div>

        <div className="flex flex-wrap gap-4">
          <article className="mx-auto flex w-full max-w-[30rem] flex-col rounded-lg p-1 text-black">
            <header className="flex items-center justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
              <h2 className="max-md:text-base">Substituição</h2>

              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src={match.timeMandante.escudo}
                  alt="wallpaper de três jogadores no campo de futebol"
                />

                <p className="text-sm">{match.timeMandante.nome}</p>
              </div>
            </header>

            <ReplacementContent
              replacement={
                match.timeMandante.estatisticaDaPartida[0].substituicao
              }
            />

            <footer className="mt-2 h-6 rounded-b-lg bg-emerald-400" />
          </article>

          <article className="mx-auto flex w-full max-w-[30rem] flex-col rounded-lg p-1 text-black">
            <header className="flex items-center justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
              <h2 className="max-md:text-base">Substituição</h2>

              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src={match.timeVisitante.escudo}
                  alt="wallpaper de três jogadores no campo de futebol"
                />

                <p className="text-sm">{match.timeVisitante.nome}</p>
              </div>
            </header>

            <ReplacementContent
              replacement={
                match.timeVisitante.estatisticaDaPartida[0].substituicao
              }
            />

            <footer className="h-6 rounded-b-lg bg-emerald-300" />
          </article>
        </div>
      </section>
    </main>
  )
}
