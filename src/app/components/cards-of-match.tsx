import { Shirt } from 'lucide-react'
import Image from 'next/image'

interface Props {
  shield: string
  cards: {
    cor: string
    minuto: string
    periodo: string
    atleta: {
      id: string
      nomePopular: string
      titular: [
        {
          camisa: string
          posicao: string
        },
      ]
      reserva: [
        {
          camisa: string
          posicao: string
        },
      ]
    }
  }[]
}

export function CardsOfMatch({ cards, shield }: Props) {
  const redCards = cards.filter((card) => card.cor === 'VERMELHO')

  const yellowCards = cards.filter((card) => card.cor === 'AMARELO')

  return (
    <div className="space-y-4">
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full items-center justify-between gap-2 rounded-t-lg bg-yellow-300 px-1">
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-10 w-10 object-cover"
            src={shield}
            alt=""
          />
          <div className="flex items-center gap-2">
            <p className="uppercase">cartão</p>
            <span>{yellowCards.length}</span>
            <p className="uppercase">amarelo</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {yellowCards.map((card, index) => {
            return (
              <div key={index} className="w-28 bg-yellow-200 p-1">
                <div className="max-md:text-sm">
                  <p>{card.periodo}</p>
                  <p className="max-md:text-xs">{card.minuto}</p>
                </div>

                {card.atleta ? (
                  <div className="mt-4 flex flex-col font-light max-md:text-xs">
                    <p>{card.atleta?.nomePopular}</p>
                    {card.atleta?.reserva.length > 0 && (
                      <div className="space-y-2 text-center">
                        <p className="bg-yellow-50">
                          {card.atleta?.reserva[0].posicao}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-1">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <p>{card.atleta?.reserva[0].camisa}</p>
                        </div>
                      </div>
                    )}
                    {card.atleta?.titular.length > 0 && (
                      <div className="space-y-2 text-center">
                        <p className="bg-yellow-50">
                          {card.atleta.titular[0].posicao}
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <p>{card.atleta?.titular[0].camisa}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="max-md:text mt-4 text-center font-light">
                    Erro ao carregar os dados do atleta associado ao cartão
                    recebido
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="flex w-full items-center justify-between gap-2 rounded-b-lg bg-red-500 px-1">
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-10 w-10 object-cover"
            src={shield}
            alt=""
          />
          <div className="flex items-center gap-2">
            <p className="uppercase">cartão</p>
            <span>{redCards.length}</span>
            <p className="uppercase">vermelho</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {redCards.map((card, index) => {
            return (
              <div key={index} className="w-28 bg-red-200 p-1">
                <div className="max-md:text-sm">
                  <p>{card.periodo}</p>
                  <p className="max-md:text-xs">{card.minuto}</p>
                </div>

                {card.atleta ? (
                  <div className="mt-4 flex flex-col font-light max-md:text-xs">
                    <p>{card.atleta?.nomePopular}</p>
                    {card.atleta?.reserva.length > 0 && (
                      <div className="space-y-2 text-center">
                        <p className="bg-red-50">
                          {card.atleta?.reserva[0].posicao}
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-1">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <p>{card.atleta?.reserva[0].camisa}</p>
                        </div>
                      </div>
                    )}
                    {card.atleta?.titular.length > 0 && (
                      <div className="space-y-2 text-center">
                        <p className="bg-red-50">
                          {card.atleta.titular[0].posicao}
                        </p>
                        <div className="flex items-center justify-center gap-1">
                          <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                          <p>{card.atleta?.titular[0].camisa}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="max-md:text mt-4 text-center font-light">
                    Erro ao carregar os dados do atleta associado ao cartão
                    recebido
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
