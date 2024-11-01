'use client'

import { ScrollLink } from './scroll-link'

export function Header() {
  return (
    <header className="fixed top-0 z-20 flex w-full justify-center">
      <div className="rounded-b-lg border border-black bg-gradient-to-br from-red-500 via-yellow-400 to-indigo-500 duration-300 hover:border-none hover:px-1 hover:pb-1 max-md:w-full">
        <div className="flex w-full justify-center rounded-b-lg bg-white/90 p-3 md:w-[29rem]">
          <nav>
            <ul className="flex gap-4">
              <li>
                <ScrollLink target="topPage" title="Início" offset={-80} />
              </li>
              <li>
                <ScrollLink
                  target="classificationTable"
                  title="Classificação"
                  offset={-80}
                />
              </li>
              <li>
                <ScrollLink
                  target="searchArea"
                  title="Buscar partidas"
                  offset={-150}
                />
              </li>
              <li>
                <ScrollLink target="chatbot" title="Chatbot" offset={-80} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
