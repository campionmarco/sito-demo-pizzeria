import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { ReservationSection } from "@/components/reservation-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <ReservationSection />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
