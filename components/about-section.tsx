export function AboutSection() {
  return (
    <section id="chi-siamo" className="py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80"
                alt="Forno a legna tradizionale della pizzeria"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e8b84b] rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
              Chi Siamo
            </h2>
            <div className="w-20 h-1 bg-[#e8b84b] mb-8" />
            <div className="space-y-6 text-[#666666] leading-relaxed">
              <p>
                <span className="text-[#1a1a1a] font-semibold">Dal 1987</span>, la famiglia Marco porta avanti con passione la tradizione della vera pizza napoletana a Rovigo. Tutto è iniziato con nonno Giuseppe, che arrivò dalla Campania portando con sé i segreti del mestiere tramandati di generazione in generazione.
              </p>
              <p>
                Oggi, <span className="text-[#1a1a1a] font-semibold">tre generazioni</span> lavorano insieme ogni giorno per offrire ai nostri clienti un&apos;esperienza autentica. Il nostro forno a legna, costruito secondo la tradizione napoletana, raggiunge i 450°C per cuocere le pizze in soli 90 secondi, regalando quel bordo soffice e la caratteristica &quot;cornicione&quot; che ci contraddistingue.
              </p>
              <p>
                Utilizziamo solo <span className="text-[#1a1a1a] font-semibold">ingredienti freschi e di prima qualità</span>: farina tipo 00, pomodori San Marzano DOP, mozzarella fior di latte prodotta quotidianamente e olio extra vergine d&apos;oliva italiano. La nostra pasta viene lasciata lievitare naturalmente per almeno 24 ore, per garantire leggerezza e digeribilità.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-[#e8b84b] font-bold">37+</div>
                <div className="text-[#666666] text-sm mt-1">Anni di esperienza</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-[#e8b84b] font-bold">3</div>
                <div className="text-[#666666] text-sm mt-1">Generazioni</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-[#e8b84b] font-bold">100%</div>
                <div className="text-[#666666] text-sm mt-1">Ingredienti freschi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
