import "../global.css";
import { Space_Grotesk } from "next/font/google"
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://cubeyond.net'),
  title: {
    default: "cubeyond.net",
    template: "%s | cubeyond.net",
  },
  description: "Developer / Cyber Security enthusiast",
  openGraph: {
    title: "cubeyond.net",
    description:
      "Developer / Cyber Security enthusiast",
    url: "https://cubeyond.net",
    siteName: "cubeyond.net",
    images: [
      {
        url: "https://cubeyond.net/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "CuB3y0nd",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${space_grotesk.variable}`}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
