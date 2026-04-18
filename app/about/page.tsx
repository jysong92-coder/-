import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Users, Target, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "사이트 소개 | 고객센터 114 - 대한민국 모든 고객센터 안내",
  description: "고객센터 114는 대한민국 모든 기업의 고객센터, 서비스센터, AS센터 정보를 한곳에서 제공하는 종합 안내 서비스입니다.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              고객센터 114 소개
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              대한민국 모든 기업의 고객센터 정보를 한눈에
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                고객센터 114란?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                고객센터 114는 대한민국에서 운영되는 모든 기업의 고객센터, 서비스센터, AS센터 정보를 
                한곳에서 쉽게 찾아볼 수 있도록 만든 종합 안내 서비스입니다. 삼성, LG, SK, KT, 현대, 기아 등 
                국내 주요 기업부터 애플, BMW, 메르세데스-벤츠 등 글로벌 기업까지, 다양한 분야의 
                고객센터 정보를 정확하고 신속하게 제공합니다.
              </p>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">
                서비스 목적
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                현대 사회에서 기업의 고객센터는 소비자와 기업을 연결하는 중요한 창구입니다. 
                그러나 수많은 기업의 고객센터 정보를 일일이 검색하는 것은 번거롭고 시간이 많이 소요됩니다. 
                고객센터 114는 이러한 불편함을 해소하고, 누구나 쉽게 원하는 고객센터 정보를 찾을 수 있도록 
                돕기 위해 만들어졌습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Shield className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-foreground mb-2">신뢰할 수 있는 정보</h3>
                  <p className="text-sm text-muted-foreground">
                    모든 정보는 각 기업의 공식 웹사이트를 통해 확인된 정보입니다. 
                    정확한 전화번호와 운영시간 정보를 제공합니다.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Users className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-foreground mb-2">사용자 중심 설계</h3>
                  <p className="text-sm text-muted-foreground">
                    직관적인 인터페이스로 누구나 쉽게 원하는 정보를 찾을 수 있습니다. 
                    모바일 환경에서도 최적화된 경험을 제공합니다.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Target className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-foreground mb-2">빠른 연결</h3>
                  <p className="text-sm text-muted-foreground">
                    전화번호를 클릭하면 바로 고객센터로 연결됩니다. 
                    번호 입력 없이 원클릭으로 상담을 시작할 수 있습니다.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Heart className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-bold text-foreground mb-2">무료 서비스</h3>
                  <p className="text-sm text-muted-foreground">
                    고객센터 114의 모든 정보는 무료로 이용하실 수 있습니다. 
                    별도의 회원가입 없이 바로 이용 가능합니다.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">
                제공 정보
              </h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 leading-relaxed">
                <li className="mb-2"><strong>대표 전화번호:</strong> 각 기업의 공식 고객센터 전화번호</li>
                <li className="mb-2"><strong>운영시간:</strong> 평일, 주말, 공휴일 운영시간 안내</li>
                <li className="mb-2"><strong>위치 찾기:</strong> 가까운 서비스센터/AS센터 위치 검색 링크</li>
                <li className="mb-2"><strong>홈페이지:</strong> 각 기업의 공식 웹사이트 바로가기</li>
                <li className="mb-2"><strong>제공 서비스:</strong> 수리, 상담, AS 등 이용 가능한 서비스 안내</li>
                <li><strong>상세 설명:</strong> 각 고객센터에 대한 자세한 안내</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">
                카테고리 안내
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                고객센터 114는 다양한 분야의 고객센터 정보를 카테고리별로 정리하여 제공합니다:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 leading-relaxed">
                <li className="mb-2"><strong>전자제품:</strong> 삼성전자, LG전자, 애플, 소니, 다이슨 등</li>
                <li className="mb-2"><strong>통신사:</strong> SK텔레콤, KT, LG유플러스 등</li>
                <li className="mb-2"><strong>자동차:</strong> 현대자동차, 기아자동차, BMW, 벤츠 등</li>
                <li className="mb-2"><strong>금융·보험:</strong> KB국민은행, 신한은행, 삼성카드, 삼성화재 등</li>
                <li className="mb-2"><strong>쇼핑·배송:</strong> 쿠팡, 네이버, CJ대한통운 등</li>
                <li className="mb-2"><strong>식품·음료:</strong> 스타벅스, 맥도날드, 배달의민족 등</li>
                <li className="mb-2"><strong>여행·항공:</strong> 대한항공, 아시아나항공, 야놀자 등</li>
                <li className="mb-2"><strong>생활서비스:</strong> 한국전력, 서울도시가스, 서울시 상수도 등</li>
                <li className="mb-2"><strong>공공기관:</strong> 국민건강보험, 국민연금, 국세청 등</li>
                <li><strong>의료·건강:</strong> 삼성서울병원, 서울아산병원 등</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mb-4 mt-12">
                면책 조항
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                고객센터 114에서 제공하는 정보는 참고용이며, 실제 정보는 각 기업의 공식 웹사이트에서 
                확인하시기 바랍니다. 운영시간, 전화번호 등은 각 기업의 사정에 따라 변경될 수 있으며, 
                이로 인한 불편에 대해 고객센터 114는 책임지지 않습니다.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
