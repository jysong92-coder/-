import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { PopularCentersSection } from "@/components/popular-centers-section"
import { SearchSection } from "@/components/search-section"
import { AdBanner } from "@/components/ad-banner"
import { InfoSection } from "@/components/info-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        
        {/* Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <AdBanner format="horizontal" />
        </div>

        <CategoriesSection />
        
        {/* Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <AdBanner format="horizontal" />
        </div>

        <PopularCentersSection />
        
        <SearchSection />
        
        {/* Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <AdBanner format="horizontal" />
        </div>

        <InfoSection />
      </main>

      <Footer />
    </div>
  )
}
