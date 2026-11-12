import { ArrowUp } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { PortfolioSections } from "@/components/portfolio-sections";
import { PageEffects } from "@/components/page-effects";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getPortfolio, getNavigation, uiText } from "@/data/portfolio";
import { getLocale } from "@/lib/locale";

export default async function Home() {
  const locale = await getLocale();
  const portfolio = getPortfolio(locale);
  const copy = uiText[locale];
  return <>
    <a href="#main-content" className="skip-link">{copy.skipToContent}</a>
    <LanguageSwitcher locale={locale} copy={copy} />
    <PageEffects locale={locale} />
    <div className="site-shell">
      <Sidebar portfolio={portfolio} copy={copy} navigation={getNavigation(locale)} />
      <main id="main-content" tabIndex={-1} className="main-content">
        <PortfolioSections portfolio={portfolio} copy={copy} />
        <footer className="page-footer">
          <a href="#about" className="back-to-top" aria-label={copy.backToTop}><ArrowUp size={18} aria-hidden="true" /></a>
        </footer>
      </main>
    </div>
  </>;
}
