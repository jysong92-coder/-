import { serviceCenters } from "@/lib/service-centers"
import { ServiceCenterCard } from "./service-center-card"

export function PopularCentersSection() {
  // Featured popular service centers
  const popularIds = [
    "samsung-electronics",
    "lg-electronics",
    "apple-korea",
    "skt",
    "kt",
    "hyundai-motor",
    "coupang",
    "baemin"
  ]

  const popularCenters = popularIds
    .map(id => serviceCenters.find(c => c.id === id))
    .filter(Boolean)

  return (
    <section id="popular" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            자주 찾는 고객센터
          </h2>
          <p className="text-muted-foreground">
            가장 많이 찾는 인기 고객센터를 빠르게 이용하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularCenters.map((center) => (
            center && <ServiceCenterCard key={center.id} center={center} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
