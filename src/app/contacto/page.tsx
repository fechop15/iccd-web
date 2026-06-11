import { siteInfo } from '@/lib/data'
import SocialBar from '@/components/SocialBar'
import { MapPin, Clock, Phone } from 'lucide-react'

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Contacto
          </h1>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            Puede acercarse a nuestra oficina ubicada en la ciudad de Sincelejo - Sucre - Colombia.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Ubicación</h3>
              <p className="text-sm text-gray-600">{siteInfo.address}</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Clock className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Horario</h3>
              <p className="text-sm text-gray-600">
                {siteInfo.schedule.weekdays}<br />
                {siteInfo.schedule.saturday}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="w-10 h-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Contacto</h3>
              <p className="text-sm text-gray-600">
                Línea de atención en Sincelejo<br />
                {siteInfo.phone}
              </p>
            </div>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=Calle+26+No.+16A-82+Sabanas+de+Nariño+Sincelejo+Colombia&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación ICCD Sincelejo"
            />
          </div>

          <SocialBar />

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-primary mb-2">
              Cel: {siteInfo.phone}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Diana Atencia - Secretaria Pastoral ICCD
            </p>
            <a
              href={siteInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-600 transition-colors"
            >
              CONTACTAR
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
