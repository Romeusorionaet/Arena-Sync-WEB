'use client'

import { useEffect, useState } from 'react'

export function WidgetTable() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const script = document.createElement('script')
    script.src =
      'https://cdn.api-futebol.com.br/widgets/v1/apifutebol-tabela.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!isClient) {
    return <p className="animate-pulse text-center">Loading...</p>
  }

  return (
    <div
      className="apifutebol-tabela h-[35rem] w-full xl:w-1/2"
      data-client-id={process.env.NEXT_PUBLIC_SOCCER_API_KEY}
    ></div>
  )
}
