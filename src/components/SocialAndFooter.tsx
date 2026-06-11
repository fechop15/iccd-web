import SocialBar from './SocialBar'
import { siteInfo } from '@/lib/data'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function SocialAndFooter() {
  return (
    <section id="social-footer" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <SocialBar />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
            <a
              href="https://www.google.com/maps/@9.2979615,-75.3930829,3a,75y,205.64h,78.76t/data=!3m6!1e1!3m4!1sXW-IkERj7gu8ED104h_6NQ!2e0!7i13312!8i6656?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-secondary transition-colors"
            >
              <h4 className="font-semibold">{siteInfo.address}</h4>
            </a>
          </div>

          <div className="text-center">
            <Phone className="w-8 h-8 text-secondary mx-auto mb-2" />
            <h4 className="font-semibold text-primary">{siteInfo.phone}</h4>
          </div>

          <div className="text-center">
            <Mail className="w-8 h-8 text-secondary mx-auto mb-2" />
            <a
              href={`mailto:${siteInfo.email}`}
              className="text-sm text-primary hover:text-secondary transition-colors"
            >
              <h4 className="font-semibold">{siteInfo.email}</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
