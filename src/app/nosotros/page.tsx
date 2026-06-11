import Image from 'next/image'
import { documents } from '@/lib/data'
import PDFViewer from '@/components/PDFViewer'

export default function Nosotros() {
  return (
    <>
      <section id="nosotros-banner" className="relative text-white py-24 bg-cover bg-center animate-fadeIn" style={{ backgroundImage: "url('/images/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg')" }}>
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Acerca de Iglesia Cristiana Casa de Dios
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
              <h2 className="text-2xl font-bold text-primary mb-4">Identidad</h2>
              <h3 className="font-bold text-secondary text-lg mb-2">Visión</h3>
              <p className="text-gray-700 mb-6">
                Ser una Iglesia que Glorifique, ame y sirva a Dios con unidad doctrinal, fraternal;
                guiada por el Espíritu Santo, y basada en las sagradas Escrituras, con crecimiento
                permanente, estabilidad y sostenibilidad.
              </p>
              <h3 className="font-bold text-secondary text-lg mb-2">Misión</h3>
              <p className="text-gray-700">
                Adorar a Dios, Reconciliar a los hombres con Dios a través de la proclamación del
                evangelio de Jesucristo. Instruirlos en la doctrina y fundamento de las Sagradas
                Escrituras, enseñándoles a vivir en comunión con Dios y con los demás, sirviendo a
                la sociedad y a los necesitados.
              </p>

              <h2 className="text-2xl font-bold text-primary mt-12 mb-6">Régimen Tributario Especial</h2>
              <PDFViewer documents={documents} />
            </div>

            <div>
              <Image
                src="/images/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg"
                alt="Iglesia Cristiana Casa de Dios"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-md mb-6"
              />
              <p className="text-gray-700 leading-relaxed">
                En obediencia al mandato del Señor Jesucristo de enseñar y predicar su santo evangelio,
                bajo la dirección del Espíritu Santo, y basados en el artículo 19 de la CPN de 1991,
                y la ley 133 de 1994, encausamos esfuerzos en alcanzar la visión de ser una Iglesia
                multiplicadora de discípulos suyos, de generaciones a generaciones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
