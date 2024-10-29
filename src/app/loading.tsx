import Image from 'next/image'

export default function Loading() {
  return (
    <div className="pt-44">
      <div className="w-full animate-pulse bg-zinc-200">
        <Image
          width={500}
          height={500}
          sizes="100vw"
          className="mx-auto h-24 w-24 object-cover md:h-28 md:w-28"
          src="/gif/futebol1.gif"
          alt=""
        />
      </div>
    </div>
  )
}
