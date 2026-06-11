import { newsEvents } from '@/lib/data'
import EventGallery from '@/components/EventGallery'

export default function Noticias() {
  return (
    <>
      <section id="noticias" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Publicaciones
          </h1>
          <EventGallery events={newsEvents} />
        </div>
      </section>
    </>
  )
}
