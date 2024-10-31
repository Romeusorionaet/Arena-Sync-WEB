export interface ChampionshipsSeasonProps {
  temporada: string
}

export interface NearestMatchesProps {
  dataRealizacaoIso: string
  timeMandante: {
    escudo: string
    nome: string
  }
  timeVisitante: {
    escudo: string
    nome: string
  }
}

export interface MatchProps {
  id: string
  dataRealizacaoIso: string
  estadio: string | null
  placar: string | null
  placarMandante: number | null
  placarVisitante: number | null
  status: string
  timeMandante: {
    escudo: string
    sigla: string
  }
  timeVisitante: {
    escudo: string
    sigla: string
  }
}

// Match details props

type LineupProps = [
  {
    tecnico: string
    esquemaTatico: string
    reserva: [
      {
        camisa: string
        posicao: string
        atleta: { id: string; nomePopular: string }
      },
    ]
    titular: [
      {
        camisa: string
        posicao: string
        atleta: { id: string; nomePopular: string }
      },
    ]
  },
]

export type StatisticsProps = [
  {
    defesas: number
    desarmes: number
    escanteios: number
    faltas: number
    posseDeBola: string
    impedimentos: number
    cartao: [
      {
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
      },
    ]
    gol: [
      {
        minuto: string
        periodo: string
        atleta: {
          id: string
          nomePopular: string
          titular: [
            {
              posicao: string
              camisa: string
            },
          ]
          reserva: [
            {
              posicao: string
              camisa: string
            },
          ]
        }
      },
    ]
    finalizacao: [
      {
        bloqueio: number
        naTrave: number
        noGol: number
        praFora: number
        precisao: string
        total: number
      },
    ]
    passe: [
      {
        total: number
        completos: number
        errados: number
        precisao: string
      },
    ]
    substituicao: [
      {
        periodo: string
        minuto: string
        entrouAtleta: {
          id: string
          nomePopular: string
          reserva: [
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
      },
    ]
    escalacao: [
      {
        tecnico: string
        esquemaTatico: string
        reserva: [
          {
            camisa: string
            posicao: string
            atleta: {
              id: string
              nomePopular: string
            }
          },
        ]
        titular: [
          {
            camisa: string
            posicao: string
            atleta: {
              id: string
              nomePopular: string
            }
          },
        ]
      },
    ]
  },
]

export interface MatchDetailsProps {
  id: string
  dataRealizacaoIso: string
  estadio: string | null
  placar: string | null
  placarMandante: number | null
  placarVisitante: number | null
  status: string
  timeMandante: {
    nome: string
    sigla: string
    escudo: string
    estatisticaDaPartida: StatisticsProps
    escalacao: LineupProps
  }
  timeVisitante: {
    nome: string
    sigla: string
    escudo: string
    estatisticaDaPartida: StatisticsProps
    escalacao: LineupProps
  }
}
