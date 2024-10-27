import Image from 'next/image'
import '@/assets/styles/table-statistics.css'
import { SearchFormMatch } from '../components/search-form-match'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div>
      <main className="">
        <section className="flex max-md:flex-col-reverse md:h-[40rem]">
          <div className="h-96 w-full bg-[url('/img/futebol-arena.jpg')] bg-cover bg-center md:h-full md:w-2/3"></div>

          <div className="h-full w-full bg-black p-4 md:w-1/3">
            <Image
              width={500}
              height={500}
              sizes="100vw"
              className="mx-auto max-h-[300px] max-w-[200px] object-cover"
              src="/img/brasileirao-assai.png"
              alt="wallpaper de três jogadores no campo de futebol"
            />

            <div className="text-center">
              <h1 className="font-bold text-emerald-100 md:text-4xl">
                Aqui tem Brasileirão
              </h1>
              <span className="font-semibold">A-B</span>
            </div>

            <p className="mt-10 md:mt-20">
              Acompanhe cada jogada, cada gol e todos os detalhes do maior
              campeonato de futebol do Brasil.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center bg-[url('/img/wallpaper-tres-atletas.jpg')] bg-cover bg-center bg-no-repeat p-4 md:h-[60rem] md:p-20">
          <article className="mx-auto flex h-[40rem] w-full max-w-[60rem] flex-col justify-between rounded-lg bg-white/90 p-1 text-black">
            <header className="flex justify-between rounded-t-lg bg-emerald-300 p-1">
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src="/img/brasileirao-assai.png"
                  alt="wallpaper de três jogadores no campo de futebol"
                />

                <p className="text-sm">Bragantino</p>
              </div>
              <h2 className="uppercase">estatísticas</h2>
              <div className="flex flex-col items-center">
                <Image
                  width={100}
                  height={100}
                  sizes="100vw"
                  className="h-10 w-10 object-cover"
                  src="/img/brasileirao-assai.png"
                  alt="wallpaper de três jogadores no campo de futebol"
                />

                <p className="text-sm">Bragantino</p>
              </div>
            </header>

            <div>
              <ul id="table-statistics" className="space-y-4 p-2">
                <li>
                  <span>7</span>chutes<span>9</span>
                </li>
                <li>
                  <span>3</span>chutes ao gol<span>5</span>
                </li>
                <li>
                  <span>50%</span>posse de bola<span>50%</span>
                </li>
                <li>
                  <span>235</span>passes<span>340</span>
                </li>
                <li>
                  <span>30%</span>precisão de passe<span>70%</span>
                </li>
                <li>
                  <span>9</span>faltas<span>10</span>
                </li>
                <li>
                  <span>1</span>cartões amarelos<span>3</span>
                </li>
                <li>
                  <span>0</span>cartões vermelhos<span>0</span>
                </li>
                <li>
                  <span>1</span>impedimentos<span>2</span>
                </li>
                <li>
                  <span>4</span>escanteios<span>2</span>
                </li>
              </ul>
            </div>

            <footer className="flex items-center justify-center gap-4 rounded-b-lg bg-emerald-300 p-1">
              <Image
                width={100}
                height={100}
                sizes="100vw"
                className="h-10 w-10 object-cover"
                src="/img/brasileirao-assai.png"
                alt="wallpaper de três jogadores no campo de futebol"
              />
              <p className="text-xs">
                Principais estatísticas da ultima partida
              </p>
            </footer>
          </article>
        </section>

        <section className="bg-gradient-to-t from-yellow-400 to-green-700 p-4 pb-20">
          <h2 className="mb-10 text-center font-bold max-md:mt-20">
            Pesquise pela sua partida favorita
          </h2>

          <SearchFormMatch />
        </section>
      </main>

      <Footer />
    </div>
  )
}
