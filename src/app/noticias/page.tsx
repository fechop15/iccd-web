import { newsEvents as localNews } from '@/lib/data'
import { getEvents } from '@/lib/contentful'
import EventGallery from '@/components/EventGallery'

export default async function Noticias() {
  let cmsNews: typeof localNews = []
  try {
    const all = await getEvents()
    if (all.length > 0) cmsNews = all.slice(0, 9)
  } catch {}
  const newsEvents = cmsNews.length > 0 ? cmsNews : localNews

  return (
    <>
      <section id="noticias" className="bg-gray-50 py-16 animate-fadeInUp">
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
