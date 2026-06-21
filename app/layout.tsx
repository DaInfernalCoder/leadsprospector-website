import type { Metadata } from "next";
import { Cormorant, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const title = "Caldenmoore | Qualified introductions to your ideal clients";
const description =
  "Caldenmoore is an advisory and research firm that identifies, vets, and introduces qualified prospects to B2B companies across industries. We handle the research and outreach. You receive warm introductions to clients ready to engage.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable} antialiased`}>
        <Script id="datamoon-pixel" strategy="afterInteractive">
          {`(function(s, p, i, c, e) {
    s[e] = s[e] || function() { (s[e].a = s[e].a || []).push(arguments); };
    s[e].l = 1 * new Date();
    var t = new Date().getTime();
    var k = c.createElement("script"), a = c.getElementsByTagName("script")[0];
    k.async = 1, k.src = p + "?request_id=" + i + "&t=" + t, a.parentNode.insertBefore(k, a);
    s.pixelClientId = i;
})(window, "https://app.datamoon.com/script", "calden-moore", document, "script");`}
        </Script>
        {children}
      </body>
    </html>
  );
}
