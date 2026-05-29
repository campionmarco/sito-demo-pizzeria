"use client"

import { useState } from "react"

type Category = "antipasti" | "pizze" | "dolci" | "bevande"

interface MenuItem {
  name: string
  description: string
  price: string
}

const menuData: Record<Category, MenuItem[]> = {
  antipasti: [
    { name: "Bruschetta Classica", description: "Pane tostato con pomodori freschi, basilico e olio extra vergine d'oliva", price: "€6.00" },
    { name: "Caprese", description: "Mozzarella di bufala campana DOP, pomodori cuore di bue, basilico fresco", price: "€9.00" },
    { name: "Frittura di Calamari", description: "Calamari freschi fritti in pastella leggera, serviti con salsa tartara", price: "€12.00" },
    { name: "Prosciutto e Melone", description: "Prosciutto di Parma stagionato 18 mesi con melone fresco di stagione", price: "€11.00" },
    { name: "Antipasto della Casa", description: "Selezione di salumi, formaggi, olive e verdure grigliate", price: "€14.00" },
    { name: "Arancini Siciliani", description: "Arancini ripieni di ragù, piselli e mozzarella filante", price: "€8.00" },
  ],
  pizze: [
    { name: "Margherita", description: "Pomodoro San Marzano DOP, mozzarella fior di latte, basilico fresco, olio EVO", price: "€8.00" },
    { name: "Marinara", description: "Pomodoro San Marzano, aglio, origano, olio extra vergine d'oliva", price: "€7.00" },
    { name: "Diavola", description: "Pomodoro, mozzarella, salame piccante calabrese, peperoncino", price: "€10.00" },
    { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, fontina, parmigiano reggiano 24 mesi", price: "€11.00" },
    { name: "Prosciutto e Funghi", description: "Pomodoro, mozzarella, prosciutto cotto, funghi champignon", price: "€10.00" },
    { name: "Capricciosa", description: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive", price: "€12.00" },
    { name: "Salsiccia", description: "Pomodoro, mozzarella, salsiccia", price: "€6.50" },
    {name: "New York", description: "Pomodoro, mozzarella, wurstel, patate", price:  "€11.00"},
    { name: "Bufala", description: "Pomodoro San Marzano, mozzarella di bufala DOP, basilico, olio EVO", price: "€12.00" },
    { name: "Napoli", description: "Pomodoro, mozzarella, acciughe, capperi, origano", price: "€10.00" },
  ],
  dolci: [
    { name: "Tiramisù", description: "Il classico dessert italiano con mascarpone, caffè e cacao", price: "€6.00" },
    { name: "Panna Cotta", description: "Crema cotta alla vaniglia con coulis di frutti di bosco", price: "€5.50" },
    { name: "Cannolo Siciliano", description: "Croccante cialda ripiena di ricotta dolce e gocce di cioccolato", price: "€5.00" },
    { name: "Torta della Nonna", description: "Crostata con crema pasticcera e pinoli caramellati", price: "€5.50" },
    { name: "Dolce di Laura", description: "Biscotti imbevuti nel latte separati da uno strato di panna montata", price: "€6.00" },
    { name: "Gelato Artigianale", description: "Tre gusti a scelta: cioccolato, pistacchio, stracciatella, nocciola", price: "€5.00" },
  ],
  bevande: [
    { name: "Acqua Minerale", description: "Naturale o frizzante (75cl)", price: "€2.50" },
    { name: "Coca-Cola / Fanta / Sprite", description: "Lattina 33cl", price: "€3.00" },
    { name: "Birra Moretti", description: "Alla spina (40cl)", price: "€4.50" },
    { name: "Vino della Casa", description: "Rosso o bianco (calice)", price: "€4.00" },
    { name: "Vino della Casa", description: "Rosso o bianco (bottiglia 75cl)", price: "€15.00" },
    { name: "Caffè Espresso", description: "100% Arabica", price: "€1.50" },
    { name: "Limoncello", description: "Limoncello artigianale di Sorrento", price: "€4.00" },
    { name: "The Pesca / Limone", description: "Lattina 33cl", price: "€3.00" },
  ],
}

const categories: { id: Category; label: string }[] = [
  { id: "antipasti", label: "Antipasti" },
  { id: "pizze", label: "Pizze" },
  { id: "dolci", label: "Dolci" },
  { id: "bevande", label: "Bevande" },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("pizze")

  return (
    <section id="menu" className="py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Il Nostro Menu
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Scopri le nostre specialità preparate con ingredienti freschi e la passione di tre generazioni
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#e8b84b] text-[#1a1a1a]"
                  : "bg-[#1a1a1a] text-[#fafaf8] hover:bg-[#333]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].map((item, index) => (
            <div
              key={index}
              className="menu-card bg-white rounded-xl p-6 shadow-md border border-[#e5e5e5]"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-serif text-xl text-[#1a1a1a] font-semibold">
                  {item.name}
                </h3>
                <span className="text-[#b8860b] font-bold text-lg whitespace-nowrap ml-4">
                  {item.price}
                </span>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
