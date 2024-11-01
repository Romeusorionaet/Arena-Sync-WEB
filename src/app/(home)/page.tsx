import Image from 'next/image'
import '@/assets/styles/table-statistics.css'
import { SearchFormMatch } from '../components/search-form-match'
import { UpcomingMatches } from '../components/upcoming-matches'
import { Header } from '../components/header'
import { WidgetRound } from '../components/widget-round'
import { WidgetTable } from '../components/widget-table'

export default function Home() {
  return (
    <div>
      <Header />

      <main className="max-md:pt-12">
        <section id="topPage" className="flex max-md:flex-col md:h-[40rem]">
          <div className="relative h-full w-full bg-gradient-to-b from-green-600 to-yellow-500 p-4 md:w-1/3">
            <Image
              width={500}
              height={500}
              sizes="100vw"
              className="mx-auto max-h-[300px] max-w-[200px] object-cover"
              src="/img/brasileirao-assai.png"
              alt="logo do campeonato brasileirão de futebol"
            />

            <div className="text-center">
              <h1 className="font-bold text-emerald-100 md:text-4xl">
                Aqui tem Brasileirão
              </h1>
              <span className="font-semibold">A-B</span>
            </div>

            <p className="mx-auto mt-10 md:mt-20">
              Acompanhe cada jogada, cada gol e todos os detalhes do maior
              campeonato de futebol do Brasil.
            </p>

            <div className="absolute -bottom-10 left-0 h-8 w-full bg-gradient-to-b from-yellow-500/40 to-yellow-600 md:bottom-0" />
          </div>

          <div className="relative flex h-[40rem] w-full items-center justify-center bg-[url('/img/futebol-arena.png')] bg-cover bg-center bg-no-repeat md:h-full md:w-2/3 md:pt-4">
            <p className="absolute right-5 top-5 text-2xl font-extrabold text-yellow-300 md:right-10 md:top-10">
              Arena{' '}
              <span className="rounded-md bg-white p-0.5 text-green-500">
                Sync
              </span>
            </p>
            <WidgetRound />
          </div>
        </section>
        <section
          id="schedulingMatches"
          className="flex h-[60rem] items-center justify-center bg-[url('/img/wallpaper-tres-atletas.jpg')] bg-cover bg-center bg-no-repeat p-4 max-xl:flex-col max-xl:gap-8 md:p-20"
        >
          <WidgetTable />
          <UpcomingMatches />
        </section>

        <div className="h-8 w-full bg-gradient-to-b from-green-800 to-green-700" />

        <section id="searchArea" className="bg-green-700 p-4 pb-20">
          <div className="my-10 flex items-center gap-6 max-lg:flex-wrap max-md:flex-col">
            <p className="text-center text-2xl font-bold lg:text-4xl">
              Quando o talento encontra a estratégia, cada dado faz diferença.
              Explore as estatísticas do jogo!
            </p>
            <Image
              width={900}
              height={900}
              sizes="100vw"
              className="object-container mx-auto h-full max-h-[40rem] w-full max-w-[50rem] border-8 border-yellow-400"
              src="/img/view-details.png"
              alt="visualização de tabelas e gráficos detalhado da partida entre dois times"
            />
          </div>
          <h2 className="mb-10 text-center font-bold max-md:mt-20">
            Pesquise por uma partida
          </h2>

          <SearchFormMatch />
        </section>
      </main>
    </div>
  )
}
