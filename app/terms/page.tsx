import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "이용약관 | 고객센터 114",
  description: "고객센터 114 서비스 이용약관 안내 페이지입니다.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            이용약관
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground">
            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제1조 (목적)
            </h2>
            <p className="mb-6 leading-relaxed">
              이 약관은 고객센터 114(이하 &quot;회사&quot;)가 제공하는 웹사이트 서비스(이하 &quot;서비스&quot;)의 
              이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제2조 (정의)
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">&quot;서비스&quot;란 회사가 제공하는 고객센터 정보 안내 서비스를 말합니다.</li>
              <li className="mb-2">&quot;이용자&quot;란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
              <li>&quot;콘텐츠&quot;란 회사가 서비스를 통해 제공하는 각종 정보를 말합니다.</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제3조 (약관의 효력 및 변경)
            </h2>
            <p className="mb-6 leading-relaxed">
              본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다. 
              회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 
              공지함으로써 효력이 발생합니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제4조 (서비스의 내용)
            </h2>
            <p className="mb-4 leading-relaxed">
              회사가 제공하는 서비스의 내용은 다음과 같습니다:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>각 기업의 고객센터, 서비스센터, AS센터 전화번호 안내</li>
              <li>운영시간 및 위치 정보 안내</li>
              <li>공식 홈페이지 링크 제공</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제5조 (서비스 이용)
            </h2>
            <p className="mb-6 leading-relaxed">
              서비스는 회원가입 없이 누구나 무료로 이용할 수 있습니다. 
              단, 일부 서비스는 회사의 정책에 따라 제한될 수 있습니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제6조 (이용자의 의무)
            </h2>
            <p className="mb-4 leading-relaxed">
              이용자는 다음 각 호의 행위를 하여서는 안 됩니다:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>타인의 정보를 도용하는 행위</li>
              <li>회사의 서비스를 이용하여 얻은 정보를 무단으로 복제, 배포하는 행위</li>
              <li>회사의 저작권, 제3자의 저작권 등 기타 권리를 침해하는 행위</li>
              <li>공공질서 및 미풍양속에 위반되는 행위</li>
              <li>기타 관련 법령에 위배되는 행위</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제7조 (면책조항)
            </h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                회사는 서비스에서 제공하는 정보의 정확성, 완전성, 적시성을 보장하지 않습니다. 
                제공되는 정보는 참고용이며, 실제 정보는 각 기업의 공식 채널에서 확인하시기 바랍니다.
              </li>
              <li className="mb-2">
                회사는 이용자가 서비스를 통해 얻은 정보로 인해 발생한 손해에 대하여 책임을 지지 않습니다.
              </li>
              <li>
                회사는 천재지변, 시스템 장애 등 불가항력적인 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제8조 (저작권)
            </h2>
            <p className="mb-6 leading-relaxed">
              서비스 내의 모든 콘텐츠에 대한 저작권은 회사에 귀속됩니다. 
              이용자는 회사의 사전 동의 없이 콘텐츠를 상업적 목적으로 이용하거나 
              제3자에게 제공할 수 없습니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제9조 (분쟁해결)
            </h2>
            <p className="mb-6 leading-relaxed">
              서비스 이용과 관련하여 분쟁이 발생한 경우, 회사와 이용자는 상호 협의하여 해결하도록 노력합니다. 
              협의가 이루어지지 않을 경우 관련 법령에 따라 해결합니다.
            </p>

            <p className="text-sm text-muted-foreground mt-12">
              시행일자: 2024년 1월 1일
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
