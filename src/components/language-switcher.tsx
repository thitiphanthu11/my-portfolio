"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Languages } from "lucide-react";
import { LANGUAGE_COOKIE, type Locale, type UiText } from "@/data/portfolio";

export function LanguageSwitcher({ locale, copy }: { locale: Locale; copy: Pick<UiText, "languageLabel" | "changingLanguage" | "activeLanguage"> }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const changeLanguage = (nextLocale: Locale) => {
    if (nextLocale === locale || isPending) return;
    document.cookie = `${LANGUAGE_COOKIE}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    startTransition(() => router.refresh());
  };

  return <div className="language-toolbar">
    <div className="language-switcher" role="group" aria-label={copy.languageLabel} aria-busy={isPending}>
      <Languages size={16} className="language-icon" aria-hidden="true" />
      <button type="button" lang="th" aria-label="เปลี่ยนเป็นภาษาไทย" aria-pressed={locale === "th"} aria-disabled={isPending} onClick={() => changeLanguage("th")}>ไทย</button>
      <button type="button" lang="en" aria-label="Switch to English" aria-pressed={locale === "en"} aria-disabled={isPending} onClick={() => changeLanguage("en")}>EN</button>
    </div>
    <span className="sr-only" role="status" aria-live="polite">{isPending ? copy.changingLanguage : copy.activeLanguage}</span>
  </div>;
}
