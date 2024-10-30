import Image from 'next/image'

export function Footer() {
  return (
    <footer className="xl-rounded-t-lg flex items-center justify-between p-4">
      <p className="text-2xl font-extrabold text-yellow-300">
        Arena{' '}
        <span className="rounded-md bg-white p-0.5 text-green-500">Sync</span>
      </p>

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
