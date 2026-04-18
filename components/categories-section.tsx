import Link from "next/link"
import { categories, serviceCenters } from "@/lib/service-centers"
import { 
  Tv, 
  Smartphone, 
  Car, 
  Landmark, 
  ShoppingBag, 
  Coffee, 
  Plane, 
  Home, 
  Building2, 
  Heart, 
  Gamepad2, 
  Laptop,
  type LucideIcon
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Tv,
  Smartphone,
  Car,
  Landmark,
  ShoppingBag,
  Coffee,
  Plane,
  Home,
  Building2,
  Heart,
  Gamepad2,
  Laptop,
}

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            카테고리별 고객센터
          </h2>
          <p className="text-muted-foreground">
            원하는 분야를 선택하여 관련 고객센터를 찾아보세요
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const count = serviceCenters.filter(c => c.category === category.id).length
            const IconComponent = iconMap[category.icon]
            return (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group"
              >
                <div className="bg-card border border-border rounded-xl p-5 text-center hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-3">
                    {IconComponent && <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{count}개</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
