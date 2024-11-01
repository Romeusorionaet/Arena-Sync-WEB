'use client'

export function WidgetMatchTable() {
  return (
    <iframe
      src={`https://api.api-futebol.com.br/v1/widgets/tabela?client_id=${process.env.NEXT_PUBLIC_KEY_WIDGET_TABLE}`}
      title="API Futebol"
      width="90%"
      height="80%"
      className="apifutebol-tabela h-full w-full rounded-lg opacity-90 max-md:mt-6"
    ></iframe>
  )
}
