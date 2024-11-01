'use client'

export function WidgetRound() {
  return (
    <iframe
      src={`https://api.api-futebol.com.br/v1/widgets/rodadas?client_id=${process.env.NEXT_PUBLIC_SOCCER_API_KEY}`}
      title="API Futebol"
      width="90%"
      height="80%"
      className="max-md:mt-6"
    ></iframe>
  )
}
