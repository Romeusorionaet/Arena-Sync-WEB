import Image from 'next/image'

export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-green-500 p-4">
      <h3>Arena Sync</h3>

      <Image
        width={100}
        height={100}
        sizes="100vw"
        className="h-20 w-20 object-cover"
        src="/img/bola.png"
        alt="wallpaper de três jogadores no campo de futebol"
      />

      <p className="font-extralight">© Copyright 2024</p>
    </footer>
  )
}
