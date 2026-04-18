import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCenterCard } from "@/components/service-center-card"
import { AdBanner } from "@/components/ad-banner"
import { categories, getServiceCentersByCategory } from "@/lib/service-centers"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = categories.find(c => c.id === slug)
  
  if (!category) {
    return {
      title: "카테고리를 찾을 수 없습니다 | 고객센터 114"
    }
  }

  return {
    title: `${category.name} 고객센터·서비스센터 안내 | 고객센터 114`,
    description: `${category.name} 분야의 모든 고객센터, 서비스센터, AS센터 전화번호, 위치, 운영시간 정보를 확인하세요.`,
    keywords: `${category.name}, 고객센터, 서비스센터, AS센터, 전화번호, 위치`,
  }
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }))
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = categories.find(c => c.id === slug)

  if (!category) {
    notFound()
  }

  const centers = getServiceCentersByCategory(slug)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb & Header */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground mb-4 text-sm transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              전체 카테고리
            </Link>
            
            <div className="flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">
                  {category.name} 고객센터
                </h1>
                <p className="text-primary-foreground/80">
                  {centers.length}개의 고객센터·서비스센터 정보
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <AdBanner format="horizontal" />
        </div>

        {/* Service Centers List */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {centers.map((center, index) => (
                <>
                  <ServiceCenterCard key={center.id} center={center} />
                  {/* Insert ad after every 6 cards */}
                  {(index + 1) % 6 === 0 && index !== centers.length - 1 && (
                    <div key={`ad-${index}`} className="col-span-full">
                      <AdBanner format="horizontal" />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </section>

        {/* Category Description for SEO */}
        <section className="py-12 bg-secondary">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-4">
              {category.name} 분야 고객센터 이용 안내
            </h2>
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <CategoryDescription categoryId={slug} />
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <AdBanner format="horizontal" />
        </div>

        {/* Other Categories */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-6">
              다른 카테고리 둘러보기
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categories
                .filter(c => c.id !== slug)
                .slice(0, 5)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className="bg-card border border-border rounded-xl p-4 text-center hover:border-muted-foreground/30 hover:shadow-md transition-all"
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <p className="text-sm font-medium text-foreground mt-2">{cat.name}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function CategoryDescription({ categoryId }: { categoryId: string }) {
  const descriptions: Record<string, React.ReactNode> = {
    electronics: (
      <>
        <p className="mb-4 leading-relaxed">
          전자제품 분야의 고객센터와 서비스센터는 스마트폰, TV, 냉장고, 세탁기, 에어컨 등 
          다양한 전자제품의 수리, 점검, 상담 서비스를 제공합니다. 삼성전자, LG전자, 애플, 소니, 다이슨 등 
          주요 전자제품 브랜드의 공식 서비스센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          제품 구매 후 보증 기간 내 무상 수리, 보증 기간 이후 유상 수리 서비스를 이용하실 수 있으며, 
          출장 수리, 택배 수리, 방문 수리 등 다양한 수리 방식을 선택하실 수 있습니다. 
          수리 접수 전 모델명과 증상을 미리 정리해두시면 빠른 상담이 가능합니다.
        </p>
      </>
    ),
    telecom: (
      <>
        <p className="mb-4 leading-relaxed">
          통신사 고객센터는 이동통신, 인터넷, IPTV, 유선전화 등 통신 서비스에 대한 종합 상담을 제공합니다. 
          SK텔레콤, KT, LG유플러스 등 국내 주요 통신사의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          요금제 변경, 부가서비스 신청, 로밍 서비스, 분실 신고, 명의변경 등 다양한 서비스를 이용하실 수 있습니다. 
          대부분의 통신사 고객센터는 114로 연결되며, 24시간 ARS 서비스를 통해 간단한 업무 처리가 가능합니다.
        </p>
      </>
    ),
    automotive: (
      <>
        <p className="mb-4 leading-relaxed">
          자동차 분야의 고객센터와 서비스센터는 차량 정비, 긴급출동, 보증 수리, 부품 구매 등의 서비스를 제공합니다. 
          현대자동차, 기아자동차, BMW, 메르세데스-벤츠 등 국내외 주요 자동차 브랜드의 서비스센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          정기 점검, 오일 교환, 타이어 교체 등 정비 서비스와 사고 수리, 도장, 판금 등 종합 수리 서비스를 이용하실 수 있습니다. 
          긴급출동 서비스는 24시간 운영되며, 배터리 방전, 타이어 펑크, 잠금 해제 등의 서비스를 받으실 수 있습니다.
        </p>
      </>
    ),
    finance: (
      <>
        <p className="mb-4 leading-relaxed">
          금융·보험 분야의 고객센터는 은행, 카드, 보험, 증권 등 금융 서비스에 대한 종합 상담을 제공합니다. 
          KB국민은행, 신한은행, 삼성카드, 삼성화재 등 국내 주요 금융기관의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          계좌 조회, 이체 서비스, 대출 상담, 카드 분실 신고, 보험금 청구 등 다양한 금융 서비스를 이용하실 수 있습니다. 
          대부분의 금융 고객센터는 24시간 ARS 서비스를 제공하며, 분실 신고 등 긴급 업무는 즉시 처리됩니다.
        </p>
      </>
    ),
    shopping: (
      <>
        <p className="mb-4 leading-relaxed">
          쇼핑·배송 분야의 고객센터는 온라인 쇼핑, 택배, 배송 서비스에 대한 상담을 제공합니다. 
          쿠팡, 네이버, CJ대한통운 등 국내 주요 쇼핑·물류 기업의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          주문 조회, 배송 추적, 반품/교환, 환불 요청 등의 서비스를 이용하실 수 있습니다. 
          대부분의 쇼핑몰은 앱 내 채팅 상담을 통해 빠른 문의 처리가 가능합니다.
        </p>
      </>
    ),
    food: (
      <>
        <p className="mb-4 leading-relaxed">
          식품·음료 분야의 고객센터는 레스토랑, 카페, 배달 서비스에 대한 상담을 제공합니다. 
          스타벅스, 맥도날드, 배달의민족 등 국내 주요 외식 브랜드의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          매장 안내, 멤버십 문의, 주문 관련 문의, 음료/메뉴 상담 등의 서비스를 이용하실 수 있습니다. 
          배달 서비스의 경우 주문 취소, 환불, 배달 지연 등의 문의에 24시간 대응합니다.
        </p>
      </>
    ),
    travel: (
      <>
        <p className="mb-4 leading-relaxed">
          여행·항공 분야의 고객센터는 항공권 예약, 숙박 예약, 여행 서비스에 대한 상담을 제공합니다. 
          대한항공, 아시아나항공, 야놀자 등 국내 주요 여행 관련 기업의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          항공권 예약/변경/취소, 마일리지 문의, 숙박 예약 관련 문의 등의 서비스를 이용하실 수 있습니다. 
          항공사 고객센터는 24시간 운영되며, 긴급한 예약 변경이나 취소에 즉시 대응합니다.
        </p>
      </>
    ),
    life: (
      <>
        <p className="mb-4 leading-relaxed">
          생활서비스 분야의 고객센터는 전기, 가스, 수도 등 생활에 필수적인 서비스에 대한 상담을 제공합니다. 
          한국전력공사, 서울도시가스, 서울시 상수도 등 주요 공공 서비스 기관의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          요금 조회, 납부, 계약 변경, 긴급 신고 등의 서비스를 이용하실 수 있습니다. 
          가스 누출, 정전 등 안전 관련 긴급 신고는 24시간 대응합니다.
        </p>
      </>
    ),
    government: (
      <>
        <p className="mb-4 leading-relaxed">
          공공기관 분야의 고객센터는 건강보험, 연금, 세금 등 공공 서비스에 대한 상담을 제공합니다. 
          국민건강보험공단, 국민연금공단, 국세청 등 주요 공공기관의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          보험료/연금 조회, 자격 확인, 증명서 발급, 세금 신고 관련 문의 등의 서비스를 이용하실 수 있습니다. 
          평일 09:00~18:00에 상담원 연결이 가능하며, 각 기관의 모바일 앱을 통해 다양한 서비스를 이용하실 수 있습니다.
        </p>
      </>
    ),
    healthcare: (
      <>
        <p className="mb-4 leading-relaxed">
          의료·건강 분야의 고객센터는 병원 예약, 건강검진, 의료 서비스에 대한 상담을 제공합니다. 
          삼성서울병원, 서울아산병원 등 국내 주요 의료기관의 고객센터 정보를 확인하실 수 있습니다.
        </p>
        <p className="leading-relaxed">
          진료 예약, 건강검진 예약, 진료비 수납, 제증명 발급 등의 서비스를 이용하실 수 있습니다. 
          대형 병원의 경우 모바일 앱을 통해 예약, 검사 결과 확인, 진료비 결제 등이 가능합니다.
        </p>
      </>
    ),
  }

  return descriptions[categoryId] || (
    <p className="leading-relaxed">
      해당 카테고리의 고객센터, 서비스센터, AS센터 정보를 확인하실 수 있습니다. 
      전화번호를 클릭하면 바로 연결되며, 위치 찾기 버튼을 통해 가까운 센터를 검색하실 수 있습니다.
    </p>
  )
}
