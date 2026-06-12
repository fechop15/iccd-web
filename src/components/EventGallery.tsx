import Image from 'next/image'
import type { Event } from '@/lib/data'

type Props = {
  events: Event[]
}

export default function EventGallery({ events }: Props) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="lazy-bg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm">
                {event.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
