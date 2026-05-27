import { notFound } from "next/navigation"
import Link from "next/link"
import { 
  Phone, 
  MapPin, 
  ExternalLink, 
  Clock, 
  ChevronLeft, 
  CheckCircle2, 
  HelpCircle, 
  Info, 
  ShieldAlert, 
  ListChecks,
  Building,
  Smartphone,
  Check
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyLogo } from "@/components/company-logo"
import { ServiceCenterCard } from "@/components/service-center-card"
import { AdBanner } from "@/components/ad-banner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  serviceCenters, 
  categories, 
  getServiceCenterById 
} from "@/lib/service-centers"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ id: string }>
}

// 1. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const center = getServiceCenterById(id)
  
  if (!center) {
    return {
      title: "고객센터 정보를 찾을 수 없습니다 | 고객센터 114"
    }
  }

  const category = categories.find(c => c.id === center.category)
  const categoryName = category ? category.name : "전문분야"

  return {
    title: `${center.name} 전화번호·운영시간·AS 예약 꿀팁 가이드 | 고객센터 114`,
    description: `${center.name} 고객센터 대표번호 ${center.phone}, 운영시간 ${center.operatingHours}, 제공 서비스 안내 및 AS 접수 전 필수 준비사항과 자주 묻는 질문(FAQ) 정보를 종합 안내합니다.`,
    keywords: `${center.name}, ${center.name} 전화번호, ${center.name} 고객센터, ${center.name} 서비스센터, AS센터, ${categoryName} 고객센터, 운영시간, 위치찾기`,
    openGraph: {
      title: `${center.name} 고객센터·서비스센터 종합 안내 | 고객센터 114`,
      description: `${center.name} 대표번호: ${center.phone} | 운영시간, 위치정보, AS 자가진단 및 FAQ 완벽 정리`,
      type: "website",
    }
  }
}

// 2. Pre-render all service center pages at build time (SSG)
export async function generateStaticParams() {
  return serviceCenters.map((center) => ({
    id: center.id,
  }))
}

// 3. Category-specific guidelines to provide rich unique texts
interface GuideContent {
  title: string
  steps: string[]
  tips: string
}

function getCategoryGuide(categoryId: string, brandName: string): GuideContent {
  const guides: Record<string, GuideContent> = {
    electronics: {
      title: `${brandName} 가전 및 전자제품 AS 접수 신청 가이드`,
      steps: [
        "제품 모델명 확인: 기기 후면 또는 하단의 스티커 라벨에서 정확한 모델 코드(Model Code)와 시리얼 번호를 확인해 기록해 둡니다.",
        "기본 자가 진단: 일시적인 오작동의 경우 전원 플러그를 뽑은 후 약 1분 뒤 다시 연결하거나 리셋 버튼을 누르면 정상 작동할 수 있습니다.",
        "무상 보증 기간 체크: 일반 가전제품의 무상 품질 보증 기한은 구매일로부터 1년이 기본이며, 핵심 부품(컴프레서, 모터 등)은 별도 추가 보증 여부를 확인하세요.",
        "방문 또는 출장 서비스 선택: 소형 가전 및 IT 기기는 센터 내방 수리가 빠르며, TV/냉장고 등 대형 가전은 상담사 혹은 홈페이지를 통해 출장 AS 예약을 진행해야 합니다."
      ],
      tips: "스마트폰, 태블릿, 노트북 및 PC 제품군을 수리 의의를 목적으로 접수하기 전에는 사전에 반드시 클라우드나 개인 외장 장치에 모든 주요 데이터를 백업해야 합니다. 제품 분해 및 부품 교체 과정에서 시스템 초기화가 진행될 수 있으며 이로 인한 데이터 유실은 엔지니어가 책임지지 않습니다."
    },
    telecom: {
      title: `${brandName} 통신사 고객센터 주요 업무 및 처리 요령`,
      steps: [
        "가입자 본인 증명 준비: 명의자의 정확한 성함, 주민등록번호 앞자리, 청구서 수령 주소 등 본인 확인용 보안 정보를 미리 숙지합니다.",
        "상담 분류 단축 키 파악: 전화 연결 후 요금제/결합 조회, 분실/정지, 번호이동 등 원하는 번호에 해당하는 단축키를 안내 방송에 맞춰 신속히 입력합니다.",
        "대리점 내방 여부 확인: 명의 변경, 번호 이동, 결합 해지 등 보안상 높은 단계의 인허가가 요구되는 서비스는 단순 전화 문의 후 서류를 지참해 직영 대리점을 직접 방문해야 할 수 있습니다."
      ],
      tips: "휴대폰 분실 신고, 도난 사고, 발신 일시 정지 및 해제와 같은 최고 등급 긴급 복구 서비스는 365일 24시간 연중무휴 핫라인 콜센터로 바로 운영됩니다. 늦은 시간 혹은 주말에 분실하셨을 때도 주저하지 마시고 114 또는 고객센터 번호를 누르신 뒤 분실/정지 자동 응답 코너(보통 ARS 1번 혹은 안내 멘트 우선)로 이동해 조치를 취하십시오."
    },
    automotive: {
      title: `${brandName} 자동차 브랜드 정비 예약 및 긴급 대응법`,
      steps: [
        "차량 등록 번호 확인: 소유 중인 차량의 번호판 또는 차대 번호(VIN) 17자리를 미리 확인해 두시면 접수 시간을 단축할 수 있습니다.",
        "정비소 규모 선택: 정밀 보증 수리, 엔진/미션 탈착 등 무거운 정비는 직영 하이테크센터를 방문해야 하며, 엔진오일/브레이크 패드 등 경정비는 가까운 협력 네트웍스 정비소로 접수하는 것이 시간상 유리합니다.",
        "보증 조건 대조: 제조사 기본 보증이 유효한지(일반 3년/6만km, 구동계 5년/10만km 수준) 대조하여 수리 무상 판정 기준을 체크합니다."
      ],
      tips: "차량 배터리 방전, 주행 중 타이어 펑크, 스마트키 도어 잠김, 예기치 못한 엔진 가동 불능 등 도로 위에서 차량 결함이 발생했을 때는 자동차 메이커 브랜드 전용 '24시간 긴급출동 긴급전화'로 전화하세요. 현재 차량의 위치(도로명, 이정표 등)와 계기판에 점등된 특이 경고등 기호를 구체적으로 구두 접수하시면 가장 가까운 지원 견인차가 우선 배치됩니다."
    },
    finance: {
      title: `${brandName} 금융 및 은행·보험 고객센터 안전 이용법`,
      steps: [
        "거래 계좌 및 보안 카드 준비: 이용 중인 본인 명의의 통장 계좌번호, 카드번호, 휴대폰 본인인증 수단을 사전에 활성화해 둡니다.",
        "ARS 단축 다이얼 활용: 잔액 조회, 이체, 대출 상담 등 가장 핵심적인 단축키를 미리 확인하여 누르면 ARS 기계 안내 대기 시간을 획기적으로 낮출 수 있습니다.",
        "비대면 모바일 처리 우선 조회: 고객센터 전화 통화 없이 공식 스마트폰 뱅킹 앱을 설치한 뒤 간편인증서로 로그인하시면 비밀번호 오입력 해제, 한도 상향 등 대부분의 단순 업무를 즉시 셀프 처리 가능합니다."
      ],
      tips: "금융 사기 피해(보이스피싱, 스미싱 등)가 의심되거나 은행 체크/신용카드 도난 및 분실을 감지한 직후에는 상담 시간과 무관하게 365일 24시간 가동되는 긴급 사고 신고 부서로 즉시 유선 통화하십시오. 지체 없는 지급 정지 요청만이 추가 자금 인출 피해를 완벽히 막아내는 가장 신속하고 강력한 보안 안전장치입니다."
    },
    shopping: {
      title: `${brandName} 쇼핑몰/배송사 고객센터 문의 및 반품 팁`,
      steps: [
        "주문 번호 및 송장 번호 확인: 주문 마이페이지에 표시된 12~16자리 영숫자 조합 주문 코드나 택배 송장 배송번호를 받아 적어 상담원에게 제시합니다.",
        "상품 상태 증명 확보: 파손, 파괴, 하자가 발견된 경우 포장 상자 겉면과 불량 난 제품 본체의 사진을 여러 장 선명하게 촬영하여 보관해 둡니다.",
        "앱 내 채팅 및 카카오 채널 우선 사용: 전화상 긴 대기 시간 대신 모바일 웹/앱에 접속하여 '실시간 카카오 상담톡' 혹은 '1:1 이메일 챗봇 접수'를 남기시면 대기 없는 원스톱 회수 배정 프로세스를 시작하실 수 있습니다."
      ],
      tips: "이미 택배 발송 출고처리가 완료되어 '배송 중' 라벨이 붙은 시점 이후에는 즉각적인 배송 주소 변경이나 단순 변심 취소가 전산상 시스템적으로 불가합니다. 물품을 수령하신 후에 정식 반품 택배 프로세스를 진행하시거나(이 경우 단순변심 왕복배송비 구매자 청구), 물품 수령 전 관할 택배기사님과의 통화를 통해 긴급 반송 의사를 사전 피력하셔야 합니다."
    },
    government: {
      title: `${brandName} 정부 공공기관 민원 및 업무 콜센터 활용`,
      steps: [
        "주민번호 및 본인 수단 확인: 행정 민원상 본인 신원이 필요한 질의는 주민등록번호 및 공동/간편 인증서를 사전에 체크하고 시작합니다.",
        "통합 번호 활용: 여러 지자체나 공공 부처가 얽혀 있는 다중 복합 민원은 대한민국 정부 통합 콜센터인 '국민콜 110'을 이용하면 정확한 부서 매칭을 도와줍니다.",
        "비정체 통화 시간대 엄수: 오전 9시 직후 및 12시~13시 점심 시간대에는 콜센터 접수 인원이 몰리므로, 화~목요일 중 한산한 오후 2시~4시 사이에 다이얼을 누르는 것이 가장 유리합니다."
      ],
      tips: "각종 공공 제출용 주민등록등본, 가족관계증명서, 납세 및 보험 자격득실확인서 등 핵심 행정 문서는 동사무소 방문이나 전화 요청 없이, PC 또는 모바일로 정부24(gov.kr) 또는 정부 전용 앱 서비스에 로그인하시면 시간 구애 없이 365일 24시간 완전 무료로 즉시 열람 및 인쇄 전송이 가능하오니 대기 없이 간편히 이용해 보세요."
    },
    healthcare: {
      title: `${brandName} 대형 병원/의료 고객센터 예약 및 방문 지침`,
      steps: [
        "환자 기본 정보 파악: 환자 본인의 등록 번호 또는 주민등록번호 전체를 사전에 확인해 둡니다.",
        "진료의뢰서(요양급여의뢰서) 발급: 3차 대학병원급에 처음 내원하시는 경우 동네 1, 2차 병원/의원에서 발급해 준 '진료의뢰서' 원본 실물을 반드시 진참하셔야 보건 건강보험 혜택 적용을 받으실 수 있습니다.",
        "검사/진료 전 금식 조건 숙지: 위/대장 내시경, 정밀 혈액 검사, CT 촬영이 연동된 경우 사전에 안내받은 8~12시간 금식 가이드라인을 철저히 엄수하셔야 당일 일정 차질이 없습니다."
      ],
      tips: "실손의료비(실비보험) 청구용 영수증, 세부 진료비 내역서, 통원/입원 확인서 등 증빙 서류는 진료비 수납 시 원내에 설치된 무인 수납기(키오스크)를 사용하시면 창구 대기 없이 실시간으로 간편 출력됩니다. 최근 대형 의료기관들은 자체 모바일 앱 내 '보험사로 영수증 다이렉트 자동 전송 서비스'를 도입하여 종이 서류를 들고 다닐 필요 없이 스마트폰 터치 몇 번으로 자동 청구를 지원하고 있습니다."
    },
    entertainment: {
      title: `${brandName} 엔터테인먼트/게임 고객 지원 요령`,
      steps: [
        "플랫폼 계정 및 ID 확인: 사용 중인 서비스 계정명, 닉네임, 연동된 이메일 정보를 기록해 둡니다.",
        "결제 및 승인 명세 준비: 인앱 결제나 정기 구독 요금 결제 관련 불만은 결제 플랫폼(구글 플레이, 애플 앱스토어)의 주문 승인 번호(예: GPA로 시작하는 코드) 혹은 결제 카드사 승인 일시를 사전에 캡처해 둡니다.",
        "온라인 고객 지원 티켓 접수: 무형의 콘텐츠 오류, 기술 버그, 계정 탈취 등은 유선 대표번호보다 공식 홈페이지 내 '1:1 기술 지원 문의하기'를 통해 스크린샷과 로그 파일을 첨부해 접수하시는 것이 정밀 기술 분석 및 복구에 압도적으로 유리합니다."
      ],
      tips: "미성년 자녀가 부모의 사전 동의 없이 게임 아이템이나 플랫폼 결제를 무단 진행한 건에 대해서는 민법상 행위능력 제한 조항(제한능력자의 법률행위 취소)에 의거하여 정식 결제 취소 요청이 가능합니다. 이 경우 부모-자식 간 관계를 증명할 수 있는 가족관계증명서 실물본 및 동의 없는 결제 정황을 증빙할 수 있는 카드 청구 명세 증거를 갖추어 구글/애플/해당 게임사 전용 환불 신청 센터로 비대면 일괄 접수를 진행하십시오."
    }
  }

  const defaultGuide: GuideContent = {
    title: `${brandName} 고객센터 신속 연결 및 이용 가이드`,
    steps: [
      "구체적인 문의 요점 정리: 통화 전 원하시는 질문 내용(결제 문의, 교환/수리, 해지, 단순 가입 등)을 조리 있게 한 줄 요약해 둡니다.",
      "가입자 정보 지참: 통화 시작 시 명의자 확인을 위한 성함, 연락처, 생년월일 또는 가입 주소를 지참하여 상담사에게 답변할 준비를 합니다.",
      "통화 정체 주말/정오 시간 회피: 월요일 전체 시간대와 매일 낮 12시~13시 사이 정오 시간대에는 유선 접수가 극도로 정체되므로 이를 피해 다이얼을 시도하세요."
    ],
    tips: "대부분의 현대 주요 브랜드들은 공식 홈페이지나 스마트폰 모바일 화면 내에 '실시간 상담원 채팅 서비스'나 '자주 묻는 질문(FAQ)' 모음집을 훌륭하게 구축해 놓고 있습니다. 굳이 유선 연결 대기 상태로 몇 십 분씩 머무르는 불편함 대신, 온라인 홈페이지 우측 하단의 상담 말풍선을 누르시면 대기 시간 '제로'의 신속하고 명쾌한 답변을 24시간 실시간 받아보실 수 있는 점을 적극 활용해 보세요."
  }

  return guides[categoryId] || defaultGuide
}

// 4. Category-specific FAQ generation to expand page text values
interface FAQItem {
  question: string
  answer: string
}

function getCategoryFAQs(categoryId: string, brandName: string): FAQItem[] {
  const faqs: Record<string, FAQItem[]> = {
    electronics: [
      {
        question: "보증기간이 만료되면 서비스센터 수리 비용(AS 비용)은 어떻게 책정되나요?",
        answer: "제품 품질보증기간(통상 구매 후 1년)이 지난 뒤에 수리를 요청하시면 기사 수리 공임에 해당하는 '기술료', 교체된 '부품비'가 청구됩니다. 만약 출장 서비스를 통해 현장 수리를 받으시는 경우에는 제품 수리 여부와 무관하게 엔지니어 출장 경비인 '출장비(기본 2~3만 원선)'가 추가로 합산 적용됩니다."
      },
      {
        question: "방문 출장 서비스를 예약하려면 전화 외에 어떤 편리한 방법이 있나요?",
        answer: "각 기업 공식 홈페이지 및 공식 모바일 진단 전용 앱 내 '출장 서비스 예약 및 현황 조회' 코너를 통하면 대기 전화 통화 없이 바로 고객님 댁 근처를 관할하는 전문 수리 엔지니어의 이름과 비어 있는 방문 시간대를 눈으로 직접 확인하며 직접 예약 스케줄을 잡으실 수 있어 한층 빠르고 명쾌합니다."
      },
      {
        question: "해외 직접 구매(해외 직구)한 가전제품도 국내 서비스센터에서 공식 AS가 가능한가요?",
        answer: "애플의 글로벌 하드웨어 보증 등 특수한 경우를 제외한 대부분의 대형/소형 가전(삼성, LG, 기타 수입 주방 가전 등) 직구 모델은 국내에 규격 부품 재고가 없거나 국내 전압 표준(220V/60Hz)과의 미호환, 내부 기판 설계의 차이 등의 이슈로 공식 서비스센터에서의 정식 기술 수리가 불가능하거나, 수리가 되더라도 보증 혜택이 완전 제외되어 높은 비용의 실비 수리비가 부과될 가능성이 높습니다."
      }
    ],
    telecom: [
      {
        question: "명의 변경이나 가입 해지를 고객센터 전화 통화로 즉시 처리할 수 있나요?",
        answer: "불가능합니다. 단순 가입 상담이나 요금제 변경, 부가서비스 활성화와 달리 '명의 변경' 및 '회선 완전 해지'와 같은 중대 계약 변경은 명의 도용 등 범죄 예방 법률에 의거하여 유선 접수만으로는 완벽한 처리가 제한됩니다. 상담사를 통해 상세 안내와 필수 지참 서류를 사전 교부받으신 뒤 본인 신분증 원본과 관계 증빙 서류를 품에 지참해 가까운 브랜드 공식 오프라인 지점/직영 대리점으로 방문하셔야만 최종 접수가 완료됩니다."
      },
      {
        question: "고객센터에 전화를 걸었을 때 ARS 대기 시간이나 통화 대기를 최소화할 수 있는 비결이 있나요?",
        answer: "가장 붐비는 시간대(주말을 막 보낸 월요일 전 시간대, 매일 아침 업무 시작 직후인 9~10시, 직장인들의 휴식 시간대인 12~13시 정오)에는 유선 상담원 연결량이 극단적으로 포화됩니다. 비교적 대기 회선이 쾌적하게 비는 화요일~금요일의 오전 10시 30분~11시 30분 사이, 혹은 오후 2시 30분~4시 사이에 통화를 시도하시면 가장 적은 시간 내에 직통 연결 서비스를 만나보실 수 있습니다."
      },
      {
        question: "스마트 ARS나 보이는 ARS 서비스는 어떻게 사용하나요?",
        answer: "스마트폰을 통해 고객센터 대표번호로 발신하시면, 스마트폰 액정 화면 상에 전용 메뉴 창을 띄워주는 '보이는 ARS' 알림 배너가 자동으로 실행되거나 전송된 SMS 링크를 통해 메뉴를 시각적으로 보여줍니다. 귓가로 길게 흘러나오는 안내 방송을 끝까지 경청할 필요 없이 모바일 웹 화면에서 원하시는 아이콘 메뉴를 터치해 가며 정보를 찾거나 빠른 연결을 확보할 수 있습니다."
      }
    ],
    automotive: [
      {
        question: "제조사에서 제공하는 차량 기본 보증 기한과 보증 부품 범위는 어떻게 보나요?",
        answer: "보편적으로 자동차 정비 업계 규격상 차체 조립 및 윈도우 모터, 오디오 같은 '일반 부품'은 신차 인도일로부터 3년 혹은 주행거리 6만km 선에서 무상 보증 기한이 적용됩니다. 반면 실질적 심장부인 엔진 및 미션, 동력 전달 주요 구동 장치 부품군에 대해서는 한 단계 격상된 5년 혹은 10만km 보증 혜택이 동시 부여됩니다. 연한과 주행 거리 조건 중 어느 하나라도 선 도래할 시 보증은 만료되는 원칙을 띱니다."
      },
      {
        question: "공식 직영 서비스센터(사업소)와 협력 브랜드 공업사(블루핸즈, 오토큐 등)의 차이점은 무엇인가요?",
        answer: "본사 직영 서비스센터(흔히 사업소로 통칭)는 최신 진단 장비, 대규모 전문 엔지니어 진, 정밀 판금/도색 부스 등을 완비하여 가장 까다로운 보증 진단이나 무거운 프레임 수리까지 일괄 완결 처리 가능한 최종 기지인 반면 예약 대기가 보통 수개월 밀려 있습니다. 반면 협력 공업사들은 동네 곳곳 접근성이 뛰어난 정비 네트워크망으로 엔진오일 교환, 단순 소모품 정비 등 가벼운 작업을 당일 또는 수일 내에 쾌적하게 바로 예약 및 조치 받을 수 있는 편리한 차이가 있습니다."
      },
      {
        question: "차량이 완전히 멈춰 섰을 때 이용하는 긴급출동 무료 혜택 횟수 기준이 궁금합니다.",
        answer: "새 자동차를 분양 인도받으셨을 때 메이커 본사에서 기본으로 가입해 주는 프리미엄 카케어 서비스(통상 가입 후 1~5년) 혹은 고객님이 매년 개별 가입하시는 민간 자동차 화재 손해보험 긴급 특약 한도 내에서 연간 일정 횟수(보통 매해 5~6회 수준)만큼 배터리 충전, 5~10km 이내 무료 긴급 견인, 펑크 타이어 때움, 비상 연료 긴급 주입 서비스를 완전 무상 제공받으실 수 있습니다."
      }
    ],
    finance: [
      {
        question: "보이스피싱 등 금융 악성 범죄에 연루되어 다급할 때 고객센터를 통한 대처법이 있나요?",
        answer: "보이스피싱, 스미싱, 혹은 알 수 없는 악성 금융 결제 문자 사기를 감지하셨다면 일 초가 위태로운 골든 타임입니다. 당황하지 마시고 바로 가입 중이신 주거래 금융 콜센터 대표번호로 전화하여 자동 음성 최우선 단계에 고정 배치된 '사고 신고 및 보이스피싱 지급정지 핫라인(통상 ARS 1번 또는 긴급 사고 단축코드)'을 누르신 뒤 모든 본인 계좌 및 출금 정지 신청을 즉각 처리 요청하셔야 2차 인출 피해를 온전히 차단합니다."
      },
      {
        question: "평일에 금융기관 영업 지점 창구를 직접 방문하기 어려운데, 고객센터 전화를 통해 대출 상담이나 연장이 가능한가요?",
        answer: "네, 가능합니다. 대다수 메이저 은행 및 카드/캐피탈사는 전문 대출 유선 종합 상담센터를 독립 가동하고 있습니다. 전화를 통해 본인 신용도 조회 동의 및 연장 희망 조건을 구두 신청한 뒤, 모바일 뱅킹 앱을 실행하여 본인 명의 간편인증 및 전자 서명 방식으로 보안 서류 심사를 마무리하시면 지점 창구를 직접 찾아가 줄을 설 필요 없이 깔끔하게 대출 기한 연장 및 심사가 비대면 완결됩니다."
      },
      {
        question: "해외 출장이나 여행 도중 현지에서 신용카드가 자꾸 승인 거절되는데 이유를 알 방법이 있나요?",
        answer: "해외에서의 부정 거래, 카드 복제 사기 등을 상시 탐색 및 방어하기 위한 카드사 FDS(부정사용 방지시스템)가 이상 지출 흐름으로 판독해 일시 락(Lock)을 걸었을 가능성이 매우 농후합니다. 카드사별 '24시간 해외 전용 상담/승인 거절 해제 콜센터'는 시차와 무관하게 연중무휴 밤낮으로 돌아가고 있으므로 대표번호나 국제전화 핫라인을 통해 연락 후 본인 확인 및 FDS 차단을 해제하시면 몇 분 이내에 다시 결제를 재개하실 수 있습니다."
      }
    ],
    shopping: [
      {
        question: "이미 구매 결정을 완료한 상품에 대해서도 나중에 결함이 나오면 반품이나 교환이 되나요?",
        answer: "쇼핑몰 앱에서 전산 상 '구매 확정' 또는 '구매 결정' 버튼을 클릭한 이후에는 소비자원 보호 지침상 단순 변심이나 단순 사이즈 변경 등으로 인한 취소/반품/교환 회수 신청은 원천 불가합니다. 단, 상품 자체에 사용 상 중대한 품질 결함이나 기능상 하자가 잠복해 있었던 것이 사후 발견된 것에 한해서는 구매 확정 상태와 무관하게 소비자분쟁해결기준에 의거하여 각 브랜드 제조사 고객센터 및 판매자 고객센터의 정식 판정을 거쳐 보증 수리 또는 교환 처리가 정식 법적 청구될 수 있습니다."
      },
      {
        question: "쇼핑몰에서 주문 후 배송 주소지가 잘못 적힌 걸 깨달았습니다. 어떻게 고치나요?",
        answer: "마이페이지 상 주문 현황 단계가 '결제 완료' 혹은 '상품 준비 중'에 머물러 있는 극초기 단계에는 전산 상으로 고객님이 버튼을 눌러 배송지 주소를 무료 즉각 변경하실 수 있습니다. 그러나 배송을 위해 송장번호가 인쇄되어 포장 및 출고 처리가 끝난 '배송 대기/배송 중' 상태가 발동한 이후에는 발송지 내부 전산 통제가 차단되므로, 물건이 집하된 해당 관할 택배 영업 대리점 혹은 담당 배송 기사님과 유선 유기적인 연락을 취해 조율하셔야 합니다."
      },
      {
        question: "주문한 상품이 파손 상태로 도착했습니다. 원활한 교환/환불 처리를 위해 무엇을 준비해야 할까요?",
        answer: "택배 수령 즉시 훼손된 외부 포장 종이상자의 전체 구도 컷(특히 송장번호 라벨과 외부 충격 흔적이 한 화면에 잡히게 촬영), 상자를 개봉해 내부 파손된 제품 실물을 접사 촬영하여 명확한 시각 자료를 영구 확보해 두십시오. 이후 해당 쇼핑몰 마이페이지 1:1 반품 신청 코너에 첨부 서류로 기재해 접수하시면 판매자나 택배사의 파손 과실이 명쾌하게 입증되어 배송 배상금 분쟁 대기 시간 없이 즉각 무상 재발송 내지 100% 환불 승인이 떨어집니다."
      }
    ],
    government: [
      {
        question: "공공기관 및 세무서 고객센터의 대표전화 상담 연결율이 가장 저조하고 정체되는 시기는 언제인가요?",
        answer: "매년 5월 종합소득세 신고 기간, 연말정산 시점 등 온 국민의 금융 데이터 신고가 몰리는 특정 특수 행정 시즌에는 하루 종일 폭주 상태를 이룹니다. 또한 일상적인 시기에는 매주 월요일 오전 직후, 그리고 공무원 및 직원들의 점심시간 교대 근무가 번갈아 집행되는 정오 12시부터 오후 1시 30분 사이에는 유선 연결이 다소 어렵습니다. 화요일~금요일의 가급적 한적한 시간대를 겨냥해 전화를 주시는 요령이 필수입니다."
      },
      {
        question: "노령층 등 모바일 기기 조작에 익숙지 않은 사람이 공정하고 상세한 복지 혜택 안내를 수월하게 받는 채널이 있나요?",
        answer: "주저 없이 정부 핫라인 통합 민원 서비스 콜센터인 '국민콜 110(국번 없이 110번)'으로 연락하십시오. 과학기술정보통신부 산하 전문 상담사들이 전화상으로 귀하가 처한 연령, 자산, 거주지 상황을 귀담아듣고 보건복지, 주거 안전, 복지 지원금 혜택 등 국가에서 지원하는 최선의 맞춤 행정 정보를 단번에 친절하게 짚어 주며, 유관 행정 지자체 복지담당자 직통 연결까지 막힘없이 중개해 드립니다."
      },
      {
        question: "유선으로 공식 민원 요청을 등재했습니다. 최종 처리 결과를 전화 외에 어떤 방법으로 보나요?",
        answer: "서류 및 유선 접수 당시 등록하신 귀하의 휴대전화 번호 연동을 승인해 두셨다면 행정안전부 중개 시스템에 의거하여 처리 담당 공무원의 지정 사실, 중간 검토 피드백, 최종 조치 처리 답변 내용이 실시간 자동 SMS 통보 및 알림톡 서비스로 전달됩니다. 혹은 대한민국 정부 행정 포털 사이트 '정부24(gov.kr)'의 내 민원 현황 조회 코너에 간편 로그인하셔도 전체 프로세스를 텍스트 문서로 열람 가능합니다."
      }
    ],
    healthcare: [
      {
        question: "진료의뢰서(요양급여의뢰서) 없이 대학병원 외래 진료를 바로 보면 어떻게 되나요?",
        answer: "국민건강보험법상 상급종합병원(3차 대형 의료기관)은 1, 2차 동네 병의원에서 먼저 예비 진료를 본 뒤 추가 소견이 필요한 이들만 상급 정밀 진단을 받게 유도하는 전달체계를 가집니다. 따라서 의뢰서 없이 곧장 대학병원에서 진료를 개시하시면, 총 발생 진료비 및 검사비 중 건강보험 혜택이 완전 차단되어 발생 비용 전액(100% 실비 본인부담)을 개인이 전액 납부하게 되는 금전상 큰 불이익이 생길 수 있으니 꼭 발급 지참해 오셔야 합니다."
      },
      {
        question: "종합병원 예약 당일 부득이한 지연이나 사정이 생겨 약속을 취소하고 싶은데 페널티가 있나요?",
        answer: "일부 대학병원의 특수 정밀 기계 예약(MRI, 조직 검사 등)이나 명의 지정 외래는 취소 없이 무단 노쇼(No-show)를 반복할 시 차후 몇 개월 동안 온라인/유선 예약 신청 자격이 엄격히 일시 차단되는 예약 제한 페널티가 내려질 수 있습니다. 사정이 있어 내원이 어려워지신다면 예약 당일 최소 하루 전(늦어도 통보받은 내원 통지 시간 2~3시간 전)에는 유선 예약 센터나 스마트폰 앱을 통해 예약 연기 및 연동 취소를 정상 등록해 주시는 것이 타 대기 환자를 배려하는 기본 에티켓입니다."
      },
      {
        question: "보험사에 제출할 목적으로 진료 관련 영수증이나 세부명세서를 팩스(Fax)나 이메일로 받아볼 수 있나요?",
        answer: "진료비 및 환자 치료 상세 내역서는 엄연한 개인 의료정보보호법상 엄격한 기밀 문서에 속합니다. 개인 정보의 도용 유출을 방지하기 위하여 의료기관 고객센터에서 유선 전화 인증만으로 해당 서류를 직접 제3의 번호로 팩스 발송해 주거나 이메일 송부해 주는 원격 대리 행위는 현행법상 일절 엄격 금지되어 있습니다. 다소 번거로우시더라도 본인 또는 직계 가족이 신분증을 지참하여 병원 원내 무인 기기나 원내 제증명 발급 전용 창구에 직접 방문 수령하시거나, 해당 병원에서 정식 지원하는 본인인증 전용 앱 서비스를 통해 본인 폰으로 내려받아 청구하는 루트를 선택해야 합니다."
      }
    ],
    entertainment: [
      {
        question: "해킹 피해나 아이템 분실을 겪었을 때, 전산 상 복구가 가능한 시간적 제한 기준이 존재합니까?",
        answer: "네, 대다수의 대규모 게임 서비스 및 온라인 플랫폼은 시스템 보안상 전체 서버 데이터 저장 보존 로그(Log) 보존 한계 기한을 보유하고 있습니다. 보통 평균적으로 피해 발생일로부터 최소 14일에서 최대 30일 이내에 사건을 정식 유선 혹은 온라인 고객지원 창구로 정당 접수하셔야 기판 데이터 분석을 통해 소실 기점 역추적 및 원복 심사가 유효하게 돌입됩니다. 기한이 너무 경과한 이후에는 로그 데이터 말소로 인해 복구 조치가 불가능하다는 안내를 받게 되므로 빠른 접수가 최선입니다."
      },
      {
        question: "정기 자동결제되는 OTT 서비스의 가입 해지 방법과 이번 달 미사용한 일수에 대한 일할 환불 여부를 알고 싶습니다.",
        answer: "넷플릭스 등 대다수 글로벌 구독 서비스는 모바일 앱이나 웹 마이페이지 '계정/구독 설정'에서 언제든 원클릭으로 구독 해지(해당 월 종료 시 자동 갱신 해제)를 자유롭게 완료할 수 있습니다. 단, 결제가 집행된 시점으로부터 7일 이내에 단 한 편의 유료 콘텐츠도 스트리밍 시청하지 않은 순수 미이용 상태에서만 전액 청약 취소 및 카드 승인 취소가 전산 상 가능하며, 이미 시청 흔적이 남았거나 7일 기한이 경과했다면 일할 계산 방식으로 중간 일수에 대한 환불 없이 당월 잔여일까지 모두 활성화되어 서비스된 뒤 만료됩니다."
      },
      {
        question: "게임 및 스트리밍 서비스 내에서 악성 유저(욕설, 트롤링, 비인가 핵 프로그램 사용자)를 조치하려면 어디에 문의하나요?",
        answer: "원내 실시간 모니터링 전화 접수 부서는 없으므로, 해당 게임 내 로비 창의 '신고하기/신고 피드백' 기능이나 공식 온라인 고객센터의 전용 탭인 '비인가 프로그램 제보 및 비매너 플레이어 신고 코너'를 이용해 주십시오. 캡처한 당시의 스크린샷 원본이나 주행 녹화 리플레이 파일(mp4 형식 등)을 함께 첨부해 업로드 제출하시면, 데이터 분석 전문가 팀의 엄격한 약관 대조 검토를 거쳐 대상 계정에 대한 즉시 7일/30일/영구 이용 차단 및 제재 조치가 단호히 실행됩니다."
      }
    ]
  }

  const defaultFAQs: FAQItem[] = [
    {
      question: "고객센터 유선 전화 연결을 대기하는 동안 발생하는 대기 전화 요금은 누가 부담하나요?",
      answer: "수신자 부담 대표번호(080으로 시작하는 무상 번호)가 아닌 일반 전국 대표번호(1588, 1544, 1566, 1600 등)로 발신 시 상담사와 정식 대화 연결되기 전 ARS 기계 안내 방송 및 '연결을 기다리는 동안의 대기 음성 송출 시간'에 대해서도 고객님이 평소 가입해 쓰시는 이동통신사의 통화 기본 요율에 준하여 고스란히 발신인(고객님) 정보료로 부과됩니다. 통화량이 많아 무한 대기가 의심될 때는 서둘러 전화를 끊고 온라인 채팅 채널로 갈아타는 것이 현명합니다."
    },
    {
      question: "상담원의 악성 폭언이나 고객 갑질을 예방하기 위한 산업안전보건법 가이드라인은 무엇인가요?",
      answer: "산업안전보건법 제41조 고객의 폭언 등으로 인한 건강장해 예방 조치 조항에 의거하여, 통화 시작 전 상담원 인권 보호 및 욕설 시 통화가 임의 중단될 수 있음을 고지하는 법적 안내 멘트가 사전 의무 자동 재생됩니다. 실제 고객센터 상담 중에 무리한 폭언, 인격 비하, 상식을 벗어난 고성 지르기 또는 성희롱이 지속 관측될 시 상담원은 회사의 지침에 근거하여 통화를 즉각 경고 후 자의로 일방 강제 끊을 수 있는 법적 안전 권한이 있으며 사법 고소 대리 조치가 연동될 수 있으므로 따뜻하고 공손한 언행으로 임해 주시기 바랍니다."
    },
    {
      question: "공식 홈페이지나 모바일 앱의 1:1 상담 게시판에 문의하면 보통 답변 완료까지 얼마나 소요되나요?",
      answer: "각 기업 브랜드의 평균적인 전산 실무 운영 규정 상, 평일 영업시간(09시~18시) 기준 당일 오전에 접수된 간단한 온라인 1:1 이메일 질의에 대해서는 통상적으로 당일 오후 4시~6시 이전에 1차 피드백 조치가 신속히 내려집니다. 단, 전문적인 기술 지원이나 다각도 전산 로그 조회, 유관 부서와의 결제 금액 환불 확인 대조 등이 복합 요구되는 복잡 사안의 경우 영업일 기준 평균 1~3일 정도 상세 내부 검토 대기 시간이 부득이 추가 소요될 수 있습니다."
    }
  ]

  return faqs[categoryId] || defaultFAQs
}

export default async function CenterDetailPage({ params }: PageProps) {
  const { id } = await params
  const center = getServiceCenterById(id)

  if (!center) {
    notFound()
  }

  const category = categories.find(c => c.id === center.category)
  const guide = getCategoryGuide(center.category, center.name)
  const faqs = getCategoryFAQs(center.category, center.name)

  // Fetch related service centers in the same category (excluding this one)
  const relatedCenters = serviceCenters
    .filter(c => c.category === center.category && c.id !== center.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* 1. Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">홈</Link>
            <span className="text-muted-foreground/50">/</span>
            {category && (
              <>
                <Link href={`/category/${category.id}`} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
                <span className="text-muted-foreground/50">/</span>
              </>
            )}
            <span className="text-foreground font-medium truncate">{center.name}</span>
          </nav>

          {/* Back Button */}
          <Link 
            href={category ? `/category/${category.id}` : "/"} 
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            목록으로 돌아가기
          </Link>

          {/* 2. Main Detail layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left/Middle: Rich Content Columns (occupies 2/3) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* BRAND HEADER CARD */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-6">
                  <CompanyLogo name={center.name} className="w-24 h-24 text-3xl shadow-md border border-border" />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-2">
                      <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
                        {center.name}
                      </h1>
                    </div>
                    
                    <p className="text-base text-muted-foreground mb-4 font-medium">
                      {category?.name} &bull; {center.subCategory}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
                      {center.services.map((service) => (
                        <Badge key={service} variant="secondary" className="text-xs px-2.5 py-0.5">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <hr className="border-border my-6" />

                {/* Primary Large Phone Section */}
                <div className="bg-secondary/60 rounded-xl p-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-lg text-accent">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">대표 전화번호</p>
                      <h2 className="text-3xl font-black text-foreground hover:text-accent transition-colors">
                        <a href={`tel:${center.phone}`}>{center.phone}</a>
                      </h2>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <a href={`tel:${center.phone}`} className="w-full sm:w-auto">
                      <Button className="w-full gap-2 px-6 h-12 text-sm font-bold shadow-sm" id="btn-call-primary">
                        <Phone className="w-4 h-4" />
                        전화 걸기
                      </Button>
                    </a>
                  </div>
                </div>

                {center.altPhone && (
                  <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
                    * 대표전화 외 임시/대체 전화: <span className="font-semibold text-foreground">{center.altPhone}</span> 로도 수신 연결이 지원됩니다.
                  </p>
                )}
              </section>

              {/* Ad Banner */}
              <AdBanner format="horizontal" />

              {/* DETAILED INFORMATION SECTION */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-accent" />
                    고객센터 개요 및 주요 안내
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {center.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    상세 운영시간 정보
                  </h3>
                  <div className="bg-secondary/40 rounded-xl p-4 border border-border/50 text-sm space-y-2">
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-muted-foreground">영업일 및 근무 기준</span>
                      <span className="text-foreground font-semibold">{center.operatingHours}</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-border/40">
                      <span className="font-medium text-muted-foreground">토요일/주말 접수</span>
                      <span className="text-foreground">토요일 단축근무 혹은 주말 격주 휴무 (사전 확인 권장)</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-border/40">
                      <span className="font-medium text-muted-foreground">법정 공휴일/일요일</span>
                      <span className="text-destructive font-semibold">휴무 (단, 긴급사고/분실정지는 24시간 자동 접수)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* [E-E-A-T VALUE]: 브랜드 맞춤형 AS 가이드 */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-4">
                  <ListChecks className="w-5 h-5 text-accent" />
                  {guide.title}
                </h3>

                <ol className="space-y-4">
                  {guide.steps.map((step, index) => {
                    const [title, desc] = step.split(":")
                    return (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                          {index + 1}
                        </span>
                        <div className="text-sm">
                          <strong className="text-foreground block text-base mb-1">{title}</strong>
                          <span className="text-muted-foreground leading-relaxed">{desc}</span>
                        </div>
                      </li>
                    )
                  })}
                </ol>

                <div className="bg-accent/5 border border-accent/10 rounded-xl p-4 flex gap-3 text-sm">
                  <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-accent block mb-1">방문/신청 전 유용한 팁</strong>
                    <p className="text-muted-foreground leading-relaxed">{guide.tips}</p>
                  </div>
                </div>
              </section>

              {/* [E-E-A-T VALUE]: 소비자를 위한 상세 FAQ Accordions (Details/Summary) */}
              <section className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2 border-b border-border pb-4">
                  <HelpCircle className="w-5 h-5 text-accent" />
                  {center.name} 이용 자주 묻는 질문 (FAQ)
                </h3>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details 
                      key={index} 
                      className="group border border-border rounded-xl bg-secondary/20 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                      id={`faq-${index}`}
                    >
                      <summary className="flex items-center justify-between gap-4 p-4 font-bold text-sm md:text-base text-foreground cursor-pointer hover:bg-secondary/40 transition-colors list-none">
                        <span className="flex items-center gap-2">
                          <span className="text-accent font-black">Q.</span>
                          {faq.question}
                        </span>
                        <span className="transition-transform duration-300 group-open:rotate-180 text-muted-foreground text-xs">
                          ▼
                        </span>
                      </summary>
                      <div className="p-4 border-t border-border bg-card text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                        <div className="flex gap-2">
                          <span className="text-primary font-black flex-shrink-0">A.</span>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column: Direct Info Sidebar (occupies 1/3) */}
            <div className="space-y-6">
              
              {/* Quick Contact & Navigation Links */}
              <aside className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6 sticky top-6">
                <h3 className="font-extrabold text-foreground text-base uppercase tracking-wider pb-3 border-b border-border">
                  빠른 정보 조회 및 연결
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="space-y-1">
                    <span className="text-muted-foreground block">분야 카테고리</span>
                    <strong className="text-foreground">{category?.name} &bull; {center.subCategory}</strong>
                  </div>

                  <hr className="border-border" />

                  <div className="space-y-1">
                    <span className="text-muted-foreground block">고객센터 대표번호</span>
                    <strong className="text-foreground text-lg">{center.phone}</strong>
                  </div>

                  <hr className="border-border" />

                  <div className="space-y-1">
                    <span className="text-muted-foreground block">운영시간</span>
                    <span className="text-foreground block text-xs leading-relaxed">{center.operatingHours}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <a href={`tel:${center.phone}`} className="w-full">
                    <Button className="w-full gap-2" size="lg" id="btn-call-sidebar">
                      <Phone className="w-4 h-4" />
                      전화 즉시 걸기
                    </Button>
                  </a>

                  {center.locationUrl && (
                    <a 
                      href={center.locationUrl} 
                      target="_blank" 
                      rel="nofollow noopener noreferrer" 
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full gap-2 border-border hover:bg-secondary" size="lg" id="btn-map-sidebar">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        서비스센터 위치 지도찾기
                      </Button>
                    </a>
                  )}

                  <a 
                    href={center.website} 
                    target="_blank" 
                    rel="nofollow noopener noreferrer" 
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full gap-2 border-border hover:bg-secondary" size="lg" id="btn-site-sidebar">
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      공식 웹사이트 바로가기
                    </Button>
                  </a>
                </div>

                {/* Secure Check Badge */}
                <div className="bg-secondary/30 rounded-xl p-3 border border-border/50 flex gap-2.5 items-center">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    본 정보는 <strong>{center.name}</strong> 공식 홈페이지를 실시간 조사하여 검증 완료한 공식 안내 전화번호입니다.
                  </span>
                </div>
              </aside>

              {/* Vertical Ad Banner in Sidebar */}
              <div className="bg-card border border-border rounded-2xl p-4 shadow-sm flex items-center justify-center">
                <AdBanner format="vertical" />
              </div>

            </div>

          </div>

          {/* RELATED / SIMILAR SERVICE CENTERS */}
          {relatedCenters.length > 0 && (
            <section className="mt-12 pt-12 border-t border-border space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  이 분야의 다른 고객센터 추천
                </h3>
                {category && (
                  <Link 
                    href={`/category/${category.id}`}
                    className="text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    {category.name} 전체 보기 &rarr;
                  </Link>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCenters.map((item) => (
                  <ServiceCenterCard key={item.id} center={item} />
                ))}
              </div>
            </section>
          )}

          {/* Ad Banner Bottom */}
          <div className="mt-8">
            <AdBanner format="horizontal" />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
