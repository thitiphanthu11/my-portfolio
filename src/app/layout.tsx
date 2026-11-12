import type { Metadata } from "next";
import { getPortfolio } from "@/data/portfolio";
import { getLocale } from "@/lib/locale";
import "./globals.css";
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const portfolio = getPortfolio(locale);
  return {
  metadataBase: new URL(portfolio.siteUrl ?? "http://localhost:3000"),
  ...(portfolio.siteUrl ? { alternates: { canonical: "/" } } : {}),
  title: `${portfolio.name} | ${portfolio.role}`,
  description: portfolio.description,
  openGraph: { title: `${portfolio.name} | ${portfolio.role}`, description: portfolio.description, type: "website", locale: locale === "th" ? "th_TH" : "en_US" },
  twitter: { card: "summary_large_image", title: `${portfolio.name} | ${portfolio.role}`, description: portfolio.description },
  };
}
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  return <html lang={locale}><body>{children}</body></html>;
}
