"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">고객센터 114</span>
              <p className="text-xs text-muted-foreground">대한민국 모든 고객센터 안내</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              카테고리
            </Link>
            <Link href="/#popular" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              인기 고객센터
            </Link>
            <Link href="/#search" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              검색
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              사이트 소개
            </Link>
          </nav>

          {/* Search Button */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/#search">
              <Button variant="outline" size="sm" className="gap-2">
                <Search className="w-4 h-4" />
                고객센터 검색
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link 
                href="/#categories" 
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                카테고리
              </Link>
              <Link 
                href="/#popular" 
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                인기 고객센터
              </Link>
              <Link 
                href="/#search" 
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                검색
              </Link>
              <Link 
                href="/about" 
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                사이트 소개
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
