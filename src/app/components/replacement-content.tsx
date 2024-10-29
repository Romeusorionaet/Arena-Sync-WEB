import { MoveDown, MoveUp, Shirt } from 'lucide-react'

interface Props {
  replacement: {
    periodo: string
    minuto: string
    entrouAtleta: {
      id: string
      nomePopular: string
      Reserva: [
        {
          camisa: string
          posicao: string
        },
      ]
    }
    saiuAtleta: {
      id: string
      nomePopular: string
      titular: [
        {
          camisa: string
          posicao: string
        },
      ]
    }
  }[]
}

export function ReplacementContent({ replacement }: Props) {
  return (
    <div className="flex flex-col gap-4 border-x">
      {replacement.map((sub, index) => {
        return (
          <div key={index} className="space-y-2 border-b border-black/10">
            <div className="flex justify-between bg-yellow-400 p-1">
              <p>min: {sub.minuto}</p>
              <p>{sub.periodo}</p>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <MoveDown className="h-4 w-4 text-red-500" />
                  <p>{sub.saiuAtleta.nomePopular}</p>
                </div>

                <div className="flex gap-2 font-light">
                  <div className="flex items-center">
                    <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                    <p>{sub.saiuAtleta.titular[0].camisa}</p>
                  </div>
                  <p>{sub.saiuAtleta.titular[0].posicao}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center">
                  <MoveUp className="h-4 w-4 text-green-500" />
                  <p>{sub.entrouAtleta.nomePopular}</p>
                </div>

                <div className="flex gap-2 font-light">
                  <div className="flex items-center">
                    <Shirt className="h-3 w-3 md:h-4 md:w-4" />
                    <p>{sub.entrouAtleta.Reserva[0].camisa}</p>
                  </div>
                  <p>{sub.entrouAtleta.Reserva[0].posicao}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
