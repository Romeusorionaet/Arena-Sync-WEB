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
import { CardsOfMatch } from '@/app/components/cards-of-match'
import dynamic from 'next/dynamic'
import { TurnBack } from '../../components/turn-back'

const TeamPerformanceGraphic = dynamic(
  () =>
    import('@/app/components/team-performance-graphic').then(
      (mod) => mod.default,
    ),
  {
    ssr: false,
  },
)

const ActionMetricsGraphic = dynamic(
  () =>
    import('@/app/components/action-metrics-graphic').then(
      (mod) => mod.default,
    ),
  {
    ssr: false,
  },
)

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
          alt: 'Logo do campeonato brasileirão',
        },
      ],
    },
  }
}

export default async function MatchDetails({ params }: ParamsProps) {
  const { id } = params
  const { props } = await getMatchDetails(id)

  const match: MatchDetailsProps = JSON.parse(props.match ?? '')
  const golsMandante = match.timeMandante.estatisticaDaPartida[0].gol
  const golsVisitante = match.timeVisitante.estatisticaDaPartida[0].gol

  return (
    <div className="bg-green-800/80">
      <header>
        <div className="flex justify-between px-4 pt-6">
          <TurnBack />

          <p className="text-2xl font-extrabold text-yellow-300">
            Arena{' '}
            <span className="rounded-md bg-white p-0.5 text-green-500">
              Sync
            </span>
          </p>
        </div>

        <section className="flex items-end justify-between px-2 pt-28 md:items-center md:justify-evenly">
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-full w-10 object-cover md:w-28 lg:w-40"
            src={match.timeMandante.escudo}
            alt={`banderia do time ${match.timeMandante.nome}`}
          />
          <div>
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

            {match.estadio && (
              <p className="text-center max-md:text-base max-md:font-light">
                Estádio: {match.estadio}
              </p>
            )}
          </div>
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-full w-10 object-cover md:w-28 lg:w-40"
            src={match.timeVisitante.escudo}
            alt={`banderia do time ${match.timeVisitante.nome}`}
          />
        </section>
      </header>

      <main className="flex min-h-screen w-full flex-col gap-4">
        <section className="mt-10 space-y-10 bg-white/90 text-black">
          <div className="h-8 w-full bg-gradient-to-b from-green-800/80 to-green-50/90" />

          <div className="flex flex-wrap justify-center gap-6 p-2">
            <article className="mx-auto flex w-full max-w-[30rem] flex-col justify-between rounded-lg p-1 text-black">
              <header className="flex justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
                <div className="flex flex-col items-center">
                  <Image
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="h-10 w-10 object-cover"
                    src={match.timeMandante.escudo}
                    alt={`logo do time ${match.timeMandante.nome}`}
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
                    alt={`logo do time ${match.timeVisitante.nome}`}
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
                  alt="logo do campeonato brasileirão"
                />
                <p className="text-xs">Principais estatísticas da partida</p>
              </footer>
            </article>

            <Image
              width={500}
              height={500}
              sizes="100vw"
              className="mx-auto h-44 w-96 object-contain md:hidden"
              src="/img/rasura-design.png"
              alt=""
            />

            <div className="space-y-4">
              <div className="flex flex-wrap justify-center gap-2">
                <TeamPerformanceGraphic
                  estatistica={match.timeMandante.estatisticaDaPartida}
                  time={match.timeMandante.nome}
                />

                <TeamPerformanceGraphic
                  estatistica={match.timeVisitante.estatisticaDaPartida}
                  time={match.timeVisitante.nome}
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                <ActionMetricsGraphic
                  estatistica={match.timeMandante.estatisticaDaPartida}
                  time={match.timeMandante.nome}
                />

                <ActionMetricsGraphic
                  estatistica={match.timeVisitante.estatisticaDaPartida}
                  time={match.timeVisitante.nome}
                />
              </div>
            </div>
          </div>

          <div className="h-8 w-full bg-gradient-to-b from-green-50/90 to-green-800/80" />
        </section>

        <section className="mt-10 flex justify-center gap-4 p-2 max-md:flex-col max-md:items-center md:p-10">
          <div className="flex h-full w-1/2 flex-col items-center gap-4">
            <div className="flex w-full items-center justify-between md:justify-evenly">
              <h2 className="font-bold">GOLS</h2>{' '}
              <p>{match.timeMandante.nome}</p>
            </div>
            <div className="flex-wrap items-center justify-center gap-2">
              {golsMandante.map((gol) => {
                return (
                  <article
                    key={gol.minuto}
                    className="w-72 space-y-4 rounded-lg bg-[url('/img/footbal-fire.png')] bg-cover p-4"
                  >
                    <header className="flex justify-between gap-6 rounded-lg bg-red-950 p-1">
                      <p>min: {gol.minuto}</p>
                      <p>{gol.periodo}</p>
                    </header>

                    <div className="rounded-lg bg-red-950 p-0.5">
                      {gol.atleta.titular.length > 0 && (
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                            <p>{gol.atleta.titular[0]?.camisa}</p>
                          </div>
                          <p>{gol.atleta.titular[0]?.posicao}</p>
                          {gol.atleta.nomePopular}
                        </div>
                      )}

                      {gol.atleta.reserva.length > 0 && (
                        <div>
                          <div className="flex items-center">
                            <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                            <p>{gol.atleta.reserva[0]?.camisa}</p>
                          </div>
                          <p>{gol.atleta.reserva[0]?.posicao}</p>
                          <p>{gol.atleta.nomePopular}</p>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="flex h-full w-1/2 flex-col items-center gap-4">
            <div className="flex w-full items-center justify-between md:justify-evenly">
              <h2 className="font-bold">GOLS</h2>{' '}
              <p>{match.timeVisitante.nome}</p>
            </div>
            <div className="flex-wrap items-center justify-center gap-2">
              {golsVisitante.map((gol) => {
                return (
                  <article
                    key={gol.minuto}
                    className="w-72 space-y-4 rounded-lg bg-[url('/img/footbal-fire.png')] bg-cover p-4"
                  >
                    <header className="flex justify-between gap-6 rounded-lg bg-red-950 p-1">
                      <p>min: {gol.minuto}</p>
                      <p>{gol.periodo}</p>
                    </header>

                    <div className="rounded-lg bg-red-950 p-0.5">
                      {gol.atleta.titular.length > 0 && (
                        <div className="text-center">
                          <div className="flex items-center justify-center">
                            <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                            <p>{gol.atleta.titular[0]?.camisa}</p>
                          </div>
                          <p>{gol.atleta.titular[0]?.posicao}</p>
                          {gol.atleta.nomePopular}
                        </div>
                      )}

                      {gol.atleta.reserva.length > 0 && (
                        <div>
                          <div className="flex items-center">
                            <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                            <p>{gol.atleta.reserva[0]?.camisa}</p>
                          </div>
                          <p>{gol.atleta.reserva[0]?.posicao}</p>
                          <p>{gol.atleta.nomePopular}</p>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mt-10 flex flex-wrap justify-center gap-4 bg-white/90 text-black">
          <div className="h-8 w-full bg-gradient-to-b from-green-800/80 to-green-50/90" />

          <CardsOfMatch
            shield={match.timeMandante.escudo}
            cards={match.timeMandante.estatisticaDaPartida[0].cartao}
          />
          <CardsOfMatch
            shield={match.timeVisitante.escudo}
            cards={match.timeVisitante.estatisticaDaPartida[0].cartao}
          />

          <div className="h-8 w-full bg-gradient-to-b from-green-50/90 to-green-800/80" />
        </section>

        <section className="mt-10 flex flex-wrap justify-center gap-4 p-2 md:p-10">
          <article className="mx-auto flex w-full max-w-[30rem] flex-col rounded-lg p-1 text-black">
            <header className="flex items-center justify-between rounded-t-lg bg-emerald-300 p-1 uppercase">
              <div>
                <h2 className="max-md:text-base">Escalação</h2>
                <p className="text-sm font-light">
                  Técnico: {match.timeMandante.escalacao[0].tecnico}
                </p>
                <p className="text-sm font-light">
                  Esquema Tático:{' '}
                  {match.timeMandante.escalacao[0].esquemaTatico}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src={match.timeMandante.escudo}
                  alt={`logo do time ${match.timeMandante.nome}`}
                />

                <p className="text-sm">{match.timeMandante.nome}</p>
              </div>
            </header>

            <div className="flex justify-between">
              <div className="w-1/2 bg-emerald-300 p-1">
                <h3 className="max-md:text-base">Titular</h3>

                <div className="flex flex-col gap-2">
                  {match.timeMandante.escalacao[0].titular.map((esc) => {
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
                  {match.timeMandante.escalacao[0].reserva.map((esc) => {
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
                  Técnico: {match.timeVisitante.escalacao[0].tecnico}
                </p>
                <p className="text-sm font-light">
                  Esquema Tático:{' '}
                  {match.timeVisitante.escalacao[0].esquemaTatico}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src={match.timeVisitante.escudo}
                  alt={`logo do time ${match.timeVisitante.nome}`}
                />

                <p className="text-sm">{match.timeVisitante.nome}</p>
              </div>
            </header>

            <div className="flex justify-between">
              <div className="w-1/2 bg-emerald-300 p-1">
                <h3 className="max-md:text-base">Titular</h3>

                <div className="flex flex-col gap-2">
                  {match.timeVisitante.escalacao[0].titular.map((esc) => {
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
                  {match.timeVisitante.escalacao[0].reserva.map((esc) => {
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
        </section>

        <section className="flex flex-wrap justify-center gap-4 bg-white/90 text-black">
          <div className="h-8 w-full bg-gradient-to-b from-green-800/80 to-green-50/90" />

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
                  alt={`logo do time ${match.timeMandante.nome}`}
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
                  alt={`logo do time ${match.timeVisitante.nome}`}
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

          <div className="h-8 w-full bg-gradient-to-b from-green-50/90 to-green-800/80" />
        </section>
      </main>
    </div>
  )
}
