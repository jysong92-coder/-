import { categories, serviceCenters } from '@/lib/service-centers'

const baseUrl = 'https://www.xn--i49alon81c06o.kr'

export async function GET() {
  const now = new Date().toUTCString()

  const categoryItems = categories.map((category) => {
    const count = serviceCenters.filter(sc => sc.category === category.id).length
    return `
    <item>
      <title>${category.name} 고객센터 목록 (${count}개)</title>
      <link>${baseUrl}/category/${category.id}</link>
      <description>${category.name} 분야의 고객센터, 서비스센터, AS센터 전화번호 및 운영시간 안내. 총 ${count}개의 고객센터 정보를 제공합니다.</description>
      <pubDate>${now}</pubDate>
      <guid>${baseUrl}/category/${category.id}</guid>
    </item>`
  }).join('')

  const popularItems = serviceCenters.slice(0, 10).map((center) => {
    return `
    <item>
      <title>${center.name} - ${center.phone}</title>
      <link>${baseUrl}/category/${center.category}</link>
      <description>${center.description.substring(0, 200)}</description>
      <pubDate>${now}</pubDate>
      <guid>${baseUrl}/center/${center.id}</guid>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>고객센터 114 - 대한민국 모든 고객센터 안내</title>
    <link>${baseUrl}</link>
    <description>삼성, LG, SK, KT, 현대, 기아 등 대한민국 모든 기업의 고객센터, 서비스센터, AS센터 전화번호, 위치, 운영시간을 한눈에 확인하세요.</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${baseUrl}/rss" rel="self" type="application/rss+xml"/>
${categoryItems}
${popularItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
