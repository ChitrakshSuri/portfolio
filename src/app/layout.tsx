import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chitraksh Suri | AI Engineer",
  description:
    "Chitraksh Suri builds AI agents, RAG systems and voice agents. Software engineer at Prismberry, based in Noida.",
  openGraph: {
    title: "Chitraksh Suri | AI Engineer",
    description: "AI agents, RAG, voice agents and the backends behind them.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
