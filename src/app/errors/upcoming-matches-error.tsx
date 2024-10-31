export function UpcomingMatchesError() {
  return (
    <div className="relative flex w-80 flex-col gap-2 md:w-[25rem]">
      <p className="absolute top-28 z-10 bg-black p-1 text-center font-bold">
        Problema na busca das partidas. Esse erro ocorreu porque a API na qual
        fornece os dados esta inativo.
      </p>
      <div className="flex w-full gap-2 opacity-50">
        <div className="h-14 w-full rounded-l-lg border border-red-500 bg-red-300"></div>
        <div className="h-14 w-24 rounded-e-lg border border-red-500 bg-red-300"></div>
      </div>
      <div className="flex w-full gap-2 opacity-50">
        <div className="h-14 w-full rounded-l-lg border border-red-500 bg-red-300"></div>
        <div className="h-14 w-24 rounded-e-lg border border-red-500 bg-red-300"></div>
      </div>
      <div className="flex w-full gap-2 opacity-50">
        <div className="h-14 w-full rounded-l-lg border border-red-500 bg-red-300"></div>
        <div className="h-14 w-24 rounded-e-lg border border-red-500 bg-red-300"></div>
      </div>
      <div className="flex w-full gap-2 opacity-50">
        <div className="h-14 w-full rounded-l-lg border border-red-500 bg-red-300"></div>
        <div className="h-14 w-24 rounded-e-lg border border-red-500 bg-red-300"></div>
      </div>
      <div className="flex w-full gap-2 opacity-50">
        <div className="h-14 w-full rounded-l-lg border border-red-500 bg-red-300"></div>
        <div className="h-14 w-24 rounded-e-lg border border-red-500 bg-red-300"></div>
      </div>
    </div>
  )
}
