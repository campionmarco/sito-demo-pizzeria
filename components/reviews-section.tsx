import { Star } from "lucide-react"

const reviews = [
  {
    name: "Marco Bianchi",
    rating: 5,
    text: "La migliore pizza di Rovigo, senza dubbio! L'impasto è incredibilmente leggero e digeribile. La Margherita è un capolavoro di semplicità. Torneremo sicuramente!",
  },
  {
    name: "Giulia Ferri",
    rating: 5,
    text: "Atmosfera accogliente e personale gentilissimo. La pizza Bufala con la mozzarella di bufala fresca è divina. Ottimo rapporto qualità-prezzo. Consigliatissimo!",
  },
  {
    name: "Alessandro Rossi",
    rating: 5,
    text: "Siamo clienti da anni e non ci hanno mai deluso. Il forno a legna fa la differenza. Provate la Capricciosa, è eccezionale! Un pezzo di Napoli a Rovigo.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={20}
          className={index < rating ? "fill-[#e8b84b] text-[#e8b84b]" : "text-[#ddd]"}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="recensioni" className="py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Cosa Dicono di Noi
          </h2>
          <p className="text-[#666666] text-lg">
            Le recensioni dei nostri clienti soddisfatti
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-[#e5e5e5] hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="text-[#e8b84b] text-5xl font-serif mb-4">&quot;</div>
              
              {/* Review Text */}
              <p className="text-[#666666] leading-relaxed mb-6 italic">
                {review.text}
              </p>
              
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={review.rating} />
              </div>
              
              {/* Name */}
              <div className="font-semibold text-[#1a1a1a]">
                {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
