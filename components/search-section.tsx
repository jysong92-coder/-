"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { serviceCenters, searchServiceCenters } from "@/lib/service-centers"
import { ServiceCenterCard } from "./service-center-card"

export function SearchSection() {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchServiceCenters(query)
  }, [query])

  const popularSearches = ["삼성", "LG", "KT", "현대", "쿠팡", "배달의민족"]

  return (
    <section id="search" className="py-16 bg-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            고객센터 검색
          </h2>
          <p className="text-muted-foreground">
            찾으시는 기업명이나 서비스를 검색해보세요
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="기업명, 브랜드, 서비스 검색 (예: 삼성, LG, 쿠팡...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-12 pr-12 h-14 text-lg bg-card"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="검색어 지우기"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Popular Searches */}
        {!query && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-sm text-muted-foreground mr-2">인기 검색:</span>
            {popularSearches.map((term) => (
              <Button
                key={term}
                variant="outline"
                size="sm"
                onClick={() => setQuery(term)}
                className="text-sm"
              >
                {term}
              </Button>
            ))}
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="mt-8">
            {results.length > 0 ? (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  &quot;{query}&quot; 검색 결과: {results.length}개
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {results.map((center) => (
                    <ServiceCenterCard key={center.id} center={center} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">
                  &quot;{query}&quot;에 대한 검색 결과가 없습니다.
                </p>
                <p className="text-sm text-muted-foreground">
                  다른 검색어로 다시 시도해보세요.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
