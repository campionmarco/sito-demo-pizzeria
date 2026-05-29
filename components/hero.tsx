"use client"

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=80')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#fafaf8] mb-6 text-balance leading-tight">
          La vera pizza napoletana a Rovigo
        </h1>
        <p className="text-xl md:text-2xl text-[#fafaf8]/90 mb-10 font-light">
          Dal 1945, ingredienti freschi e forno a legna
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            onClick={(e) => handleScroll(e, "#menu")}
            className="btn-gold inline-block bg-[#e8b84b] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4a43f]"
          >
            Scopri il Menu
          </a>
          <a
            href="#prenota"
            onClick={(e) => handleScroll(e, "#prenota")}
            className="btn-gold inline-block border-2 border-[#e8b84b] text-[#e8b84b] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#e8b84b] hover:text-[#1a1a1a]"
          >
            Prenota un Tavolo
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#fafaf8]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#fafaf8]/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
