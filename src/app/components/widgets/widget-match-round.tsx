'use client'

export function WidgetMatchRound() {
  return (
    <iframe
      src={`https://api.api-futebol.com.br/v1/widgets/rodadas?client_id=${process.env.NEXT_PUBLIC_KEY_WIDGET_ROUND}`}
      title="API Futebol"
      width="90%"
      height="80%"
      className="rounded-lg opacity-90 max-md:mt-6"
    ></iframe>
  )
}
