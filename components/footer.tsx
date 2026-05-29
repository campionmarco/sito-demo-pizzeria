import { Instagram, Facebook } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#prenota", label: "Prenota" },
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#contatti", label: "Contatti" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <h3 className="font-serif text-2xl text-[#e8b84b] font-bold mb-4">
              Pizzeria Da Marco
            </h3>
            <p className="text-[#fafaf8]/70 leading-relaxed">
              La vera pizza napoletana a Rovigo dal 1987. Ingredienti freschi, forno a legna e passione da tre generazioni.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#fafaf8] font-semibold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#fafaf8]/70 hover:text-[#e8b84b] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-[#fafaf8] font-semibold text-lg mb-4">Seguici</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#fafaf8] hover:bg-[#e8b84b] hover:text-[#1a1a1a] transition-all duration-300"
                aria-label="Seguici su Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#2a2a2a] rounded-full flex items-center justify-center text-[#fafaf8] hover:bg-[#e8b84b] hover:text-[#1a1a1a] transition-all duration-300"
                aria-label="Seguici su Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#fafaf8]/10 mt-12 pt-8">
          <p className="text-center text-[#fafaf8]/50 text-sm">
            © 2026 Pizzeria Da Marco. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
