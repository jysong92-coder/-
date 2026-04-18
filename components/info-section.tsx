import { Shield, Clock, Phone, HelpCircle } from "lucide-react"

export function InfoSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            고객센터 114를 이용해야 하는 이유
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            대한민국 대표 고객센터 정보 포털로서 정확하고 신뢰할 수 있는 정보를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-xl p-6">
            <Shield className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              검증된 공식 정보
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              모든 고객센터 정보는 각 기업의 공식 웹사이트와 대표 연락처를 통해 확인된 정보입니다. 
              허위 정보나 사칭 번호로 인한 피해를 예방하고, 정확한 고객센터 연결을 도와드립니다.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <Clock className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              실시간 운영정보 제공
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              평일, 주말, 공휴일 운영시간과 24시간 운영 여부 등 상세한 운영 정보를 제공합니다. 
              방문 전 운영시간을 확인하여 헛걸음을 방지하고 효율적인 상담을 받으실 수 있습니다.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <Phone className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              원클릭 전화 연결
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              스마트폰에서 전화번호를 클릭하면 바로 고객센터로 연결됩니다. 
              번호를 일일이 입력할 필요 없이 빠르게 상담원과 통화하실 수 있습니다.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <HelpCircle className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">
              다양한 서비스 안내
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              각 고객센터에서 제공하는 주요 서비스와 상담 가능 항목을 미리 확인할 수 있습니다. 
              수리, AS, 반품, 환불, 계약 변경 등 필요한 서비스를 정확히 안내받으세요.
            </p>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">
            고객센터·서비스센터·AS센터 이용 가이드
          </h2>
          
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              고객센터란?
            </h3>
            <p className="mb-4 leading-relaxed">
              고객센터는 기업이 고객에게 제품이나 서비스에 대한 문의, 불만 처리, 정보 제공 등의 서비스를 제공하는 창구입니다. 
              전화, 채팅, 이메일 등 다양한 채널을 통해 고객 상담을 진행하며, 대부분의 기업은 대표 전화번호(1588, 1544, 080 등)를 
              통해 고객센터 서비스를 운영하고 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              서비스센터와 AS센터의 차이점
            </h3>
            <p className="mb-4 leading-relaxed">
              서비스센터는 제품의 수리, 점검, 부품 교체 등 기술적인 서비스를 제공하는 곳입니다. 
              삼성전자, LG전자 등 전자제품 기업이나 현대자동차, 기아자동차 등 자동차 기업에서 운영합니다. 
              AS센터(After Service Center)는 서비스센터와 유사하지만, 주로 보증 기간 내 무상 수리나 
              보증 기간 이후 유상 수리 서비스에 초점을 맞추고 있습니다.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              효율적인 고객센터 이용 팁
            </h3>
            <ul className="list-disc pl-5 mb-4 leading-relaxed">
              <li className="mb-2">
                <strong>운영시간 확인:</strong> 전화하기 전 운영시간을 확인하세요. 대부분 평일 09:00~18:00에 운영됩니다.
              </li>
              <li className="mb-2">
                <strong>필요 정보 준비:</strong> 제품 모델명, 구매일, 고객번호 등을 미리 준비하면 상담이 빠릅니다.
              </li>
              <li className="mb-2">
                <strong>ARS 단축번호 활용:</strong> 자주 사용하는 서비스의 ARS 번호를 기억해두면 편리합니다.
              </li>
              <li className="mb-2">
                <strong>앱/웹 서비스 활용:</strong> 간단한 문의는 기업 앱이나 웹사이트의 채팅 상담을 이용하면 대기 시간을 줄일 수 있습니다.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
              자주 찾는 고객센터 안내
            </h3>
            <p className="leading-relaxed">
              삼성전자 서비스센터(1588-3366), LG전자 서비스센터(1544-7777), 애플 고객지원(080-333-4000), 
              SK텔레콤 고객센터(114), KT 고객센터(100), LG유플러스 고객센터(114), 
              현대자동차 고객센터(080-600-6000), 기아자동차 고객센터(080-200-2000), 
              쿠팡 고객센터(1577-7011), 배달의민족 고객센터(1600-0987) 등이 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
