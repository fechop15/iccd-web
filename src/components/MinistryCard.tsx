import Image from 'next/image'

type Props = {
  name: string
  image: string
}

export default function MinistryCard({ name, image }: Props) {
  return (
    <div className="relative group rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <h3 className="text-sm font-bold text-white">{name}</h3>
      </div>
    </div>
  )
}
