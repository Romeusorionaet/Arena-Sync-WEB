'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export function SearchFormMatch() {
  const [valueInput, setValueInput] = useState('')

  const router = useRouter()

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    router.push(`/search?q=${valueInput}&p=1`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto flex w-full max-w-[600px] items-center gap-3 rounded-md border bg-white/50 px-5 py-2 md:py-2"
    >
      <Search size={32} className="h-5 w-5" />

      <input
        type="text"
        value={valueInput}
        placeholder="Buscar produtos..."
        onChange={(e) => setValueInput(e.target.value)}
        name="q"
        required
        className="flex-1 bg-transparent text-black/70 outline-none max-md:text-sm"
      />

      <button
        type="submit"
        className="rounded-md bg-green-500 p-2 text-xs duration-700 max-md:-mr-4"
      >
        buscar
      </button>
    </form>
  )
}
