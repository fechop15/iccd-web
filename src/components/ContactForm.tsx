export default function ContactForm() {
  return (
    <section id="contact-form" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">Datos</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Petición"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white font-semibold py-3 rounded-md hover:bg-yellow-700 transition-colors"
          >
            DEJA TU MENSAJE
          </button>
        </form>
      </div>
    </section>
  )
}
