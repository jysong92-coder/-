import Link from "next/link"
import { Phone } from "lucide-react"
import { categories } from "@/lib/service-centers"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg">고객센터 114</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed max-w-md">
              대한민국 모든 기업의 고객센터, 서비스센터, AS센터 정보를 한눈에 확인하세요. 
              전화번호, 위치, 운영시간 등 필요한 모든 정보를 빠르고 정확하게 제공합니다.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">카테고리</h3>
            <ul className="flex flex-col gap-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link 
                    href={`/category/${category.id}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {category.icon} {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">바로가기</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  사이트 소개
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 고객센터 114. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50">
              본 사이트의 정보는 참고용이며, 실제 정보는 각 기업 공식 사이트에서 확인하시기 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
