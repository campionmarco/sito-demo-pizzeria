"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    alt: "Pizza margherita appena sfornata",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Interno accogliente del ristorante",
  },
  {
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80",
    alt: "Forno a legna tradizionale",
  },
  {
    src: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=800&q=80",
    alt: "Pizza con ingredienti freschi",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Sala ristorante elegante",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Pizza gourmet con prosciutto",
  },
]

export function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const openLightbox = (src: string) => {
    setLightboxImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="galleria" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#fafaf8] mb-4">
            La Nostra Galleria
          </h2>
          <p className="text-[#fafaf8]/70 text-lg">
            Scopri l&apos;atmosfera e i sapori di Pizzeria Da Marco
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden cursor-pointer gallery-image"
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#e8b84b] transition-colors"
            onClick={closeLightbox}
            aria-label="Chiudi immagine"
          >
            <X size={40} />
          </button>
          <img
            src={lightboxImage}
            alt="Immagine ingrandita"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
