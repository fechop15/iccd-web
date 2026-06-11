import { siteInfo } from '@/lib/data'
import { MapPin, Phone, Mail } from 'lucide-react'
import SocialBar from './SocialBar'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <SocialBar bgColor="#ffb400" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#ffb400]" />
              <h3 className="font-semibold text-[#ffb400]">Ubicación</h3>
            </div>
            <a
              href="https://www.google.com/maps/@9.2979615,-75.3930829,3a,75y,205.64h,78.76t/data=!3m6!1e1!3m4!1sXW-IkERj7gu8ED104h_6NQ!2e0!7i13312!8i6656?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {siteInfo.address}
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-5 h-5 text-[#ffb400]" />
              <h3 className="font-semibold text-[#ffb400]">Contacto</h3>
            </div>
            <p className="text-sm text-gray-300">{siteInfo.phone}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-[#ffb400]" />
              <h3 className="font-semibold text-[#ffb400]">Email</h3>
            </div>
            <a
              href={`mailto:${siteInfo.email}`}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {siteInfo.email}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
