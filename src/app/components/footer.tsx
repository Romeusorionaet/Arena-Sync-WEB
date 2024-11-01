import Image from 'next/image'

export function Footer() {
  return (
    <footer className="xl-rounded-t-lg flex items-center justify-between p-4">
      <p className="font-extrabold text-yellow-300 md:text-2xl">
        Arena{' '}
        <span className="rounded-md bg-white p-0.5 text-green-500">Sync</span>
      </p>

      <Image
        width={100}
        height={100}
        sizes="100vw"
        className="h-16 w-16 object-cover md:h-20 md:w-20"
        src="/img/bola.png"
        alt="uma bola de futebol preta e branca"
      />

      <p className="font-extralight max-md:text-xs">© Copyright 2024</p>
    </footer>
  )
}
