import Image from 'next/image'
import { siteInfo, ministries, homeEvents } from '@/lib/data'
import MinistryCard from '@/components/MinistryCard'
import EventGallery from '@/components/EventGallery'
export default function Home() {
  return (
    <>
      <section id="hero" className="relative text-white py-24 bg-cover bg-center animate-fadeIn" style={{ backgroundImage: "url('/images/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg')" }}>
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <Image
            src={siteInfo.logo}
            alt={siteInfo.shortName}
            width={120}
            height={120}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {siteInfo.name}
          </h1>
          <p className="text-xl text-secondary italic">{siteInfo.description}</p>
        </div>
      </section>

      <section id="info-cards" className="py-16 bg-gray-50 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Identidad</h3>
              <p className="text-sm text-gray-600">Misión<br />Visión<br />Valores<br />Nuestra fe</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Contacto</h3>
              <p className="text-sm text-gray-600">
                Línea de atención en Sincelejo<br />
                {siteInfo.phone}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">Ubicación</h3>
              <p className="text-sm text-gray-600">{siteInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ministerios" className="py-16 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Nuestros Ministerios</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ministries.map((m) => (
              <MinistryCard key={m.name} name={m.name} image={m.image} />
            ))}
          </div>
        </div>
      </section>

      <section id="eventos" className="py-16 bg-gray-50 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          {homeEvents.reduce<JSX.Element[][]>((groups, event, i) => {
            const groupIndex = Math.floor(i / 3)
            if (!groups[groupIndex]) groups[groupIndex] = []
            groups[groupIndex].push(
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-bold text-primary">{event.title}</h3>
                </div>
              </div>
            )
            return groups
          }, []).map((group, i) => (
            <div key={i} className="mb-8">
              {i === 0 && <h2 className="text-2xl font-bold text-primary mb-6">Campamento Niños y Adolescentes</h2>}
              {i === 1 && <h2 className="text-2xl font-bold text-primary mb-6">Impacto Evangelístico</h2>}
              {i === 2 && <h2 className="text-2xl font-bold text-primary mb-6">Visita al Batallón de Infantería de Marina en Corozal</h2>}
              <div className="grid sm:grid-cols-3 gap-4">
                {group}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
