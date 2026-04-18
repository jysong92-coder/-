import { Phone, Search, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-balance">
            대한민국 모든 고객센터
            <br />
            한눈에 확인하세요
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed text-pretty">
            삼성, LG, SK, KT, 현대, 기아 등 국내 주요 기업의 
            고객센터, 서비스센터, AS센터 정보를 빠르고 정확하게 제공합니다.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <Phone className="w-8 h-8 mx-auto mb-2 text-primary-foreground/90" />
              <h3 className="font-semibold text-sm mb-1">전화번호 안내</h3>
              <p className="text-xs text-primary-foreground/70">공식 대표번호 제공</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <MapPin className="w-8 h-8 mx-auto mb-2 text-primary-foreground/90" />
              <h3 className="font-semibold text-sm mb-1">위치 찾기</h3>
              <p className="text-xs text-primary-foreground/70">가까운 센터 검색</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <Clock className="w-8 h-8 mx-auto mb-2 text-primary-foreground/90" />
              <h3 className="font-semibold text-sm mb-1">운영시간 안내</h3>
              <p className="text-xs text-primary-foreground/70">정확한 운영정보</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4">
              <Search className="w-8 h-8 mx-auto mb-2 text-primary-foreground/90" />
              <h3 className="font-semibold text-sm mb-1">빠른 검색</h3>
              <p className="text-xs text-primary-foreground/70">원하는 정보 즉시 확인</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
