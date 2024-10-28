import { X } from 'lucide-react'
import Image from 'next/image'

export function UpcomingMatches() {
  return (
    <div className="flex gap-2">
      <div className="flex justify-between rounded-s-lg bg-white uppercase text-black">
        <div className="flex items-center justify-center gap-2">
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-full w-8 object-cover md:w-10"
            src="/img/brasileirao-assai.png"
            alt="wallpaper de três jogadores no campo de futebol"
          />
          <p className="border p-0.5 text-center max-md:text-xs max-md:font-light">
            RB bragantino
          </p>
        </div>

        <X className="mt-4 h-6 w-6 text-black md:mt-2 md:h-10 md:w-10" />

        <div className="flex items-center justify-center gap-2">
          <p className="border p-0.5 text-center max-md:text-xs max-md:font-light">
            Atlético mineiro
          </p>
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-full w-8 object-cover md:w-10"
            src="/img/brasileirao-assai.png"
            alt="wallpaper de três jogadores no campo de futebol"
          />
        </div>
      </div>

      <div className="flex flex-col rounded-r-lg bg-white text-center">
        <p className="bg-emerald-400 p-1">13/07</p>
        <span className="text-black">16:00</span>
      </div>
    </div>
  )
}
