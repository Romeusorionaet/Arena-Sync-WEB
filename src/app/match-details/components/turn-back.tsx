'use client'

import { useRouter } from 'next/navigation'

export function TurnBack() {
  const router = useRouter()

  const handleTurnBack = () => {
    router.back()
  }

  return (
    <button onClick={() => handleTurnBack()} className="border-b">
      Voltar
    </button>
  )
}
