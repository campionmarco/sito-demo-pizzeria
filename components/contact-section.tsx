import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contatti" className="py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Contatti
          </h2>
          <p className="text-[#666666] text-lg">
            Vieni a trovarci o contattaci per informazioni
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e8b84b] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] text-lg mb-1">Indirizzo</h3>
                <p className="text-[#666666]">Via Roma 123</p>
                <p className="text-[#666666]">45100 Rovigo (RO), Italia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e8b84b] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] text-lg mb-1">Telefono</h3>
                <a href="tel:+390425123456" className="text-[#666666] hover:text-[#e8b84b] transition-colors">
                  +39 0425 123456
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e8b84b] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] text-lg mb-1">Email</h3>
                <a href="mailto:info@pizzeriadamarco.it" className="text-[#666666] hover:text-[#e8b84b] transition-colors">
                  info@pizzeriadamarco.it
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e8b84b] rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1a1a1a] text-lg mb-2">Orari di Apertura</h3>
                <div className="text-[#666666] space-y-1">
                  <p><span className="font-medium text-[#1a1a1a]">Martedì - Domenica</span></p>
                  <p>Pranzo: 12:00 - 14:30</p>
                  <p>Cena: 19:00 - 23:00</p>
                  <p className="mt-2 text-[#e8b84b] font-medium">Lunedì: Chiuso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11286.069893559366!2d11.7789!3d45.0687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f3bb3c6bb1d5d%3A0x5ce05d0a8f5d94a6!2s45100%20Rovigo%20RO%2C%20Italy!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Pizzeria Da Marco - Rovigo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
