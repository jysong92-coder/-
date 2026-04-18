"use client"

import { Building2 } from "lucide-react"

interface CompanyLogoProps {
  name: string
  className?: string
}

// Company brand colors mapping
const brandColors: Record<string, { bg: string; text: string }> = {
  "삼성": { bg: "bg-[#1428a0]", text: "text-white" },
  "LG": { bg: "bg-[#a50034]", text: "text-white" },
  "Apple": { bg: "bg-[#000000]", text: "text-white" },
  "소니": { bg: "bg-[#000000]", text: "text-white" },
  "다이슨": { bg: "bg-[#6B3FA0]", text: "text-white" },
  "SK": { bg: "bg-[#ea002c]", text: "text-white" },
  "KT": { bg: "bg-[#eb0029]", text: "text-white" },
  "현대": { bg: "bg-[#002c5f]", text: "text-white" },
  "기아": { bg: "bg-[#05141f]", text: "text-white" },
  "BMW": { bg: "bg-[#0066b1]", text: "text-white" },
  "메르세데스": { bg: "bg-[#000000]", text: "text-white" },
  "KB": { bg: "bg-[#FFBC00]", text: "text-black" },
  "신한": { bg: "bg-[#0046ff]", text: "text-white" },
  "쿠팡": { bg: "bg-[#f96701]", text: "text-white" },
  "네이버": { bg: "bg-[#03c75a]", text: "text-white" },
  "CJ": { bg: "bg-[#f96400]", text: "text-white" },
  "스타벅스": { bg: "bg-[#00704a]", text: "text-white" },
  "맥도날드": { bg: "bg-[#FFC72C]", text: "text-[#DA291C]" },
  "배달의민족": { bg: "bg-[#2AC1BC]", text: "text-white" },
  "대한항공": { bg: "bg-[#0c4da2]", text: "text-white" },
  "아시아나": { bg: "bg-[#c3002f]", text: "text-white" },
  "야놀자": { bg: "bg-[#ff3478]", text: "text-white" },
  "서울도시가스": { bg: "bg-[#0066cc]", text: "text-white" },
  "한국전력": { bg: "bg-[#ff6600]", text: "text-white" },
  "서울시": { bg: "bg-[#0078d7]", text: "text-white" },
  "국민건강보험": { bg: "bg-[#00a651]", text: "text-white" },
  "국민연금": { bg: "bg-[#004ea2]", text: "text-white" },
  "국세청": { bg: "bg-[#0054a6]", text: "text-white" },
  "서울아산": { bg: "bg-[#003d79]", text: "text-white" },
}

function getInitials(name: string): string {
  // Extract key brand name
  const brandKeywords = Object.keys(brandColors)
  for (const keyword of brandKeywords) {
    if (name.includes(keyword)) {
      if (keyword === "삼성") return "S"
      if (keyword === "LG") return "LG"
      if (keyword === "Apple") return ""
      if (keyword === "소니") return "SONY"
      if (keyword === "다이슨") return "D"
      if (keyword === "SK") return "SK"
      if (keyword === "KT") return "KT"
      if (keyword === "현대") return "H"
      if (keyword === "기아") return "KIA"
      if (keyword === "BMW") return "BMW"
      if (keyword === "메르세데스") return "MB"
      if (keyword === "KB") return "KB"
      if (keyword === "신한") return "S"
      if (keyword === "쿠팡") return "C"
      if (keyword === "네이버") return "N"
      if (keyword === "CJ") return "CJ"
      if (keyword === "스타벅스") return "SB"
      if (keyword === "맥도날드") return "M"
      if (keyword === "배달의민족") return "B"
      if (keyword === "대한항공") return "KE"
      if (keyword === "아시아나") return "OZ"
      if (keyword === "야놀자") return "Y"
      if (keyword === "서울도시가스") return "SG"
      if (keyword === "한국전력") return "KE"
      if (keyword === "서울시") return "서울"
      if (keyword === "국민건강보험") return "건보"
      if (keyword === "국민연금") return "NPS"
      if (keyword === "국세청") return "NTS"
      if (keyword === "서울아산") return "AMC"
    }
  }
  
  // Default: first character
  return name.charAt(0)
}

function getBrandStyle(name: string): { bg: string; text: string } {
  for (const [keyword, style] of Object.entries(brandColors)) {
    if (name.includes(keyword)) {
      return style
    }
  }
  return { bg: "bg-muted", text: "text-muted-foreground" }
}

export function CompanyLogo({ name, className = "" }: CompanyLogoProps) {
  const initials = getInitials(name)
  const style = getBrandStyle(name)

  return (
    <div 
      className={`
        ${style.bg} ${style.text}
        rounded-xl flex items-center justify-center font-bold
        ${className}
      `}
    >
      {initials ? (
        <span className="text-lg">{initials}</span>
      ) : (
        <Building2 className="w-6 h-6" />
      )}
    </div>
  )
}
