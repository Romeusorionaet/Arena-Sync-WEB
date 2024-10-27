'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function SearchFormMatch() {
  const [valueTeam1, setValueTeam1] = useState('')
  const [valueTeam2, setValueTeam2] = useState('')

  const championships = [{ season: '2025' }, { season: '2024' }]

  const [championshipSeason, setChampionshipSeason] = useState(
    championships[0].season || '',
  )
  const [status, setStatus] = useState('finalizado')

  const router = useRouter()

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    router.push(
      `/search?team1=${valueTeam1}&team2=${valueTeam2}&championshipSeason=${championshipSeason}&status=${status}&p=1`,
    )
  }

  return (
    <form onSubmit={handleSearch} className="space-y-10 text-center">
      <div className="mb-10 flex justify-center gap-10">
        <label className="flex flex-col items-center gap-2">
          <p>Temporada</p>
          <select
            defaultValue={championships[0].season || 0}
            onChange={(e) => setChampionshipSeason(e.target.value)}
            className="w-24 rounded-lg bg-yellow-100 p-1 text-black"
          >
            {championships.map((championship) => (
              <option key={championship.season} value={championship.season}>
                {championship.season}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col items-center gap-2">
          <p>Status da partida</p>
          <select
            onChange={(e) => setStatus(e.target.value)}
            className="w-28 rounded-lg bg-yellow-100 p-1 text-black"
          >
            <option value="finalizado">finalizado</option>
            <option value="agendado">agendado</option>
          </select>
        </label>
      </div>

      <label htmlFor="teams">Pesquise pelo seu timão ou por dois times</label>

      <div
        // id="teams"
        className="mx-auto flex w-full max-w-[600px] items-center justify-between rounded-md border bg-white/50 px-5 py-2 md:py-2"
      >
        <input
          type="text"
          value={valueTeam1}
          placeholder="Primeiro time"
          onChange={(e) => setValueTeam1(e.target.value)}
          name="team1"
          required
          className="bg-transparent text-center text-black/70 outline-none max-md:w-28 max-md:text-sm"
        />

        <div className="rounded-full bg-gradient-to-tr from-yellow-100 to-orange-500 p-1">
          <span className="font-extrabold uppercase">vs</span>
        </div>

        <input
          type="text"
          value={valueTeam2}
          placeholder="opcional"
          onChange={(e) => setValueTeam2(e.target.value)}
          name="team2"
          className="bg-transparent text-center text-black/70 outline-none max-md:w-28 max-md:text-sm"
        />
      </div>

      <button
        type="submit"
        className="rounded-md border p-2 text-xs duration-300 hover:border-transparent hover:bg-green-600 max-md:-mr-4 md:w-28 md:p-4 md:text-base"
      >
        buscar
      </button>
    </form>
  )
}
