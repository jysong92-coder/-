"use client"

import { Phone, MapPin, ExternalLink, Clock, Info } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { ServiceCenter } from "@/lib/service-centers"
import { CompanyLogo } from "./company-logo"

interface ServiceCenterCardProps {
  center: ServiceCenter
  featured?: boolean
}

export function ServiceCenterCard({ center, featured = false }: ServiceCenterCardProps) {
  return (
    <article 
      className={`
        bg-card border border-border rounded-xl overflow-hidden
        hover:border-muted-foreground/30 hover:shadow-lg transition-all duration-300
        ${featured ? 'ring-2 ring-accent' : ''}
      `}
    >
      <div className="p-6">
        {/* Header with Logo linking to Detail page */}
        <Link href={`/center/${center.id}`} className="flex items-start gap-4 mb-4 group/header">
          <CompanyLogo name={center.name} className="w-16 h-16 flex-shrink-0 group-hover/header:scale-[1.03] transition-transform duration-300" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-lg text-foreground truncate group-hover/header:text-accent transition-colors">
                {center.name}
              </h3>
              {featured && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
                  인기
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{center.subCategory}</p>
          </div>
        </Link>

        {/* Phone Number */}
        <div className="flex items-center gap-3 mb-3 p-3 bg-secondary rounded-lg">
          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
          <div>
            <a 
              href={`tel:${center.phone}`}
              className="font-bold text-xl text-foreground hover:text-accent transition-colors"
            >
              {center.phone}
            </a>
            {center.altPhone && (
              <span className="text-sm text-muted-foreground ml-2">
                (또는 {center.altPhone})
              </span>
            )}
          </div>
        </div>

        {/* Operating Hours */}
        <div className="flex items-start gap-2 mb-3 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span className="truncate">{center.operatingHours}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {center.description}
        </p>

        {/* Services */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {center.services.slice(0, 4).map((service) => (
            <Badge key={service} variant="outline" className="text-xs">
              {service}
            </Badge>
          ))}
          {center.services.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{center.services.length - 4}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Primary View Details Button */}
          <Link href={`/center/${center.id}`} className="flex-1 min-w-[120px]">
            <Button className="w-full gap-2" size="sm">
              <Info className="w-4 h-4" />
              상세보기
            </Button>
          </Link>

          {/* Secondary Phone Call Button */}
          <a href={`tel:${center.phone}`} className="flex-1 min-w-[120px]">
            <Button variant="outline" className="w-full gap-2" size="sm">
              <Phone className="w-4 h-4" />
              전화하기
            </Button>
          </a>

          {/* Fallback Third Option: Location or Website */}
          {center.locationUrl ? (
            <a 
              href={center.locationUrl} 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="flex-1 min-w-[120px]"
            >
              <Button variant="outline" className="w-full gap-2" size="sm">
                <MapPin className="w-4 h-4" />
                위치 찾기
              </Button>
            </a>
          ) : (
            <a 
              href={center.website} 
              target="_blank" 
              rel="nofollow noopener noreferrer" 
              className="flex-1 min-w-[120px]"
            >
              <Button variant="outline" className="w-full gap-2" size="sm">
                <ExternalLink className="w-4 h-4" />
                홈페이지
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

