"use client"

import Script from "next/script"

export default function Google() {
  return (
    <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=G-425GKDVGG4`}
  />
    <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-425GKDVGG4');
            `,
        }}
    />
  </>
)
}