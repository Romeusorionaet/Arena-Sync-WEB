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
