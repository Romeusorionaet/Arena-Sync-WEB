import { MatchDetailsProps } from '@/@types/arena-sync'

interface Props {
  match: MatchDetailsProps
}

export function StatisticsContent({ match }: Props) {
  const redCardsHome = match.timeMandante.estatisticaDaPartida[0].cartao.filter(
    (card) => card.cor === 'VERMELHO',
  ).length

  const yellowCardsHome =
    match.timeMandante.estatisticaDaPartida[0].cartao.filter(
      (card) => card.cor === 'AMARELO',
    ).length

  const redCardsAway =
    match.timeVisitante.estatisticaDaPartida[0].cartao.filter(
      (card) => card.cor === 'VERMELHO',
    ).length

  const yellowCardsAway =
    match.timeVisitante.estatisticaDaPartida[0].cartao.filter(
      (card) => card.cor === 'AMARELO',
    ).length

  return (
    <div className="border-x">
      <ul className="table-statistics space-y-4 p-2">
        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].gol.length}</span>
          gols
          <span>{match.timeVisitante.estatisticaDaPartida[0].gol.length}</span>
        </li>
        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].faltas}</span>
          faltas
          <span>{match.timeVisitante.estatisticaDaPartida[0].faltas}</span>
        </li>
        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].defesas}</span>
          defesas
          <span>{match.timeVisitante.estatisticaDaPartida[0].defesas}</span>
        </li>
        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].desarmes}</span>
          desarmes
          <span>{match.timeVisitante.estatisticaDaPartida[0].desarmes}</span>
        </li>
        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].escanteios}</span>
          escanteios
          <span>{match.timeVisitante.estatisticaDaPartida[0].escanteios}</span>
        </li>

        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].impedimentos}</span>
          impedimentos
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].impedimentos}
          </span>
        </li>
        <li>
          <span>{match.timeMandante.estatisticaDaPartida[0].posseDeBola}</span>
          posse de bola
          <span>{match.timeVisitante.estatisticaDaPartida[0].posseDeBola}</span>
        </li>
        <li>
          <span>{redCardsHome}</span>
          cartão vermelho
          <span>{redCardsAway}</span>
        </li>
        <li>
          <span>{yellowCardsHome}</span>
          cartão amarelo
          <span>{yellowCardsAway}</span>
        </li>
      </ul>

      <h3 className="mt-4 text-center">Finalização</h3>

      <ul className="table-statistics space-y-4 p-2">
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].finalizacao[0].bloqueio}
          </span>
          bloqueio
          <span>
            {
              match.timeVisitante.estatisticaDaPartida[0].finalizacao[0]
                .bloqueio
            }
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].finalizacao[0].precisao}
          </span>
          precisão
          <span>
            {
              match.timeVisitante.estatisticaDaPartida[0].finalizacao[0]
                .precisao
            }
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].finalizacao[0].naTrave}
          </span>
          na trave
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].finalizacao[0].naTrave}
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].finalizacao[0].praFora}
          </span>
          pra fora
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].finalizacao[0].praFora}
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].finalizacao[0].noGol}
          </span>
          no gol
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].finalizacao[0].noGol}
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].finalizacao[0].total}
          </span>
          total
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].finalizacao[0].total}
          </span>
        </li>
      </ul>

      <h3 className="mt-4 text-center">Passes</h3>

      <ul className="table-statistics space-y-4 p-2">
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].passe[0].completos}
          </span>
          completos
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].passe[0].completos}
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].passe[0].errados}
          </span>
          errados
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].passe[0].errados}
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].passe[0].precisao}
          </span>
          precisão
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].passe[0].precisao}
          </span>
        </li>
        <li>
          <span>
            {match.timeMandante.estatisticaDaPartida[0].passe[0].total}
          </span>
          total
          <span>
            {match.timeVisitante.estatisticaDaPartida[0].passe[0].total}
          </span>
        </li>
      </ul>
    </div>
  )
}
