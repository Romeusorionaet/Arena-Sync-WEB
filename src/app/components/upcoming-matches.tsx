import { X } from 'lucide-react'
import Image from 'next/image'

export function UpcomingMatches() {
  return (
    <div className="flex gap-2">
      <div className="flex items-center justify-between rounded-s-lg bg-white uppercase text-black">
        <div className="flex items-center justify-center gap-2">
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-10 w-10 object-cover"
            src="/img/brasileirao-assai.png"
            alt="wallpaper de três jogadores no campo de futebol"
          />
          <p>RB bragantino</p>
        </div>

        <X className="h-10 w-10 text-black" />

        <div className="flex items-center justify-center gap-2">
          <p>Atlético mineiro</p>
          <Image
            width={100}
            height={100}
            sizes="100vw"
            className="h-10 w-10 object-cover"
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
