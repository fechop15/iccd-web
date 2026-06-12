import Image from 'next/image'
import { siteInfo as localInfo, documents as localDocs } from '@/lib/data'
import { getDocuments, getSiteInfo } from '@/lib/contentful'
import PDFViewer from '@/components/PDFViewer'

export default async function Nosotros() {
  const [cmsSiteInfo, cmsDocs] = await Promise.all([
    getSiteInfo().catch(() => null),
    getDocuments().catch(() => [] as typeof localDocs),
  ])
  const info = cmsSiteInfo || localInfo
  const documents = cmsDocs.length > 0 ? cmsDocs : localDocs

  return (
    <>
      <section id="nosotros-banner" className="relative text-white py-24 bg-cover bg-center animate-fadeIn" style={{ backgroundImage: `url(${info.aboutHeroImage})` }}>
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Acerca de {info.name}
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Organización de carácter evangélico, guiada por su declaración de fe y valores conforme a los principios bíblicos,
            sin ánimo de lucro, sin partidismo político.
          </p>
        </div>
      </section>

      <section id="nosotros" className="bg-gray-50 py-16 animate-fadeInUp">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">{info.aboutTitle}</h2>
              <h3 className="font-bold text-secondary text-lg mb-2">{info.visionTitle}</h3>
              <p className="text-gray-700 mb-6">{info.visionText}</p>
              <h3 className="font-bold text-secondary text-lg mb-2">{info.missionTitle}</h3>
              <p className="text-gray-700">{info.missionText}</p>

              <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Régimen Tributario Especial</h2>
              <PDFViewer documents={documents} />
            </div>

            <div>
              <Image
                src={info.aboutImage}
                alt={info.name}
                width={600}
                height={400}
                className="lazy-bg w-full rounded-lg shadow-md mb-6"
              />
              <p className="text-gray-700 leading-relaxed">{info.aboutText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
