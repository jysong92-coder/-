"use client"

interface AdBannerProps {
  slot?: string
  format?: "auto" | "horizontal" | "vertical" | "rectangle"
  className?: string
}

export function AdBanner({ slot = "xxxxxxxxxx", format = "auto", className = "" }: AdBannerProps) {
  // Placeholder for Google AdSense
  // Replace with actual AdSense code after approval
  return (
    <div className={`ad-container ${className}`}>
      <div className="bg-muted border border-border rounded-lg p-4 text-center min-h-[100px] flex items-center justify-center">
        <div className="text-muted-foreground text-sm">
          {/* 
            Google AdSense Code Placeholder
            
            After AdSense approval, replace this with:
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
              data-ad-slot={slot}
              data-ad-format={format}
              data-full-width-responsive="true"
            />
            
            And add the AdSense script to your layout:
            <Script 
              async 
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
              crossOrigin="anonymous"
            />
          */}
          <span className="opacity-50">광고 영역</span>
        </div>
      </div>
    </div>
  )
}
