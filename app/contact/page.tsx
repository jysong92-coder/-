"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, AlertCircle, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormState("success")
    setFormData({ email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              문의하기
            </h1>
            <p className="text-muted-foreground">
              고객센터 114에 대한 문의사항이나 정보 수정 요청을 보내주세요
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <Mail className="w-10 h-10 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold text-foreground mb-1">이메일 문의</h3>
              <p className="text-sm text-muted-foreground">
                contact@customercenter114.kr
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 text-accent" />
              <h3 className="font-semibold text-foreground mb-1">문의 양식</h3>
              <p className="text-sm text-muted-foreground">
                아래 양식을 통해 문의해주세요
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              문의 양식
            </h2>

            {formState === "success" ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  문의가 접수되었습니다
                </h3>
                <p className="text-muted-foreground mb-6">
                  빠른 시일 내에 답변 드리겠습니다.
                </p>
                <Button onClick={() => setFormState("idle")}>
                  새 문의하기
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">제목 *</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="문의 제목을 입력해주세요"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">문의 내용 *</Label>
                  <Textarea
                    id="message"
                    placeholder="문의하실 내용을 상세히 적어주세요"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    disabled={formState === "submitting"}
                  />
                </div>

                <div className="bg-secondary rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-1">문의 유형 안내:</p>
                    <ul className="list-disc pl-4">
                      <li>정보 수정 요청: 잘못된 전화번호, 운영시간 등의 수정</li>
                      <li>새 고객센터 등록 요청: 등록되지 않은 기업 정보 추가</li>
                      <li>기타 문의: 서비스 이용 관련 문의</li>
                    </ul>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={formState === "submitting"}
                >
                  {formState === "submitting" ? "전송 중..." : "문의 보내기"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
