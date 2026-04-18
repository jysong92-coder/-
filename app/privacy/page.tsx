import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "개인정보처리방침 | 고객센터 114",
  description: "고객센터 114 개인정보처리방침 안내 페이지입니다.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">
            개인정보처리방침
          </h1>

          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p className="mb-6 leading-relaxed">
              고객센터 114(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요시하며, 
              「개인정보 보호법」 등 관련 법령을 준수하고 있습니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제1조 (수집하는 개인정보 항목)
            </h2>
            <p className="mb-4 leading-relaxed">
              회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집할 수 있습니다:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>웹사이트 방문 기록, IP 주소, 쿠키, 방문 일시</li>
              <li>문의 시 제공되는 이메일 주소, 문의 내용</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제2조 (개인정보의 수집 및 이용 목적)
            </h2>
            <p className="mb-4 leading-relaxed">
              수집된 개인정보는 다음의 목적을 위해 이용됩니다:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>서비스 이용 통계 분석 및 개선</li>
              <li>이용자 문의에 대한 응대</li>
              <li>법령에 따른 의무 준수</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제3조 (개인정보의 보유 및 이용 기간)
            </h2>
            <p className="mb-6 leading-relaxed">
              회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 
              다만, 관련 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 보관합니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <p className="mb-6 leading-relaxed">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 
              다만, 아래의 경우에는 예외로 합니다:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 요구가 있는 경우</li>
            </ul>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제5조 (쿠키의 사용)
            </h2>
            <p className="mb-6 leading-relaxed">
              회사는 이용자에게 개인화된 서비스를 제공하기 위해 쿠키를 사용합니다. 
              이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나 거부할 수 있습니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제6조 (개인정보 보호책임자)
            </h2>
            <p className="mb-6 leading-relaxed">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
              개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 
              개인정보 보호책임자를 지정하고 있습니다.
            </p>

            <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
              제7조 (개인정보처리방침의 변경)
            </h2>
            <p className="mb-6 leading-relaxed">
              이 개인정보처리방침은 2024년 1월 1일부터 적용되며, 
              법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
              변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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
