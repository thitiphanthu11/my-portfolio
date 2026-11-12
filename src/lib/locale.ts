import { cache } from "react";
import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, type Locale } from "@/data/portfolio";

// Resolve once per request so the page, metadata, and HTML language agree.
export const getLocale = cache(async (): Promise<Locale> => {
  const preference = (await cookies()).get(LANGUAGE_COOKIE)?.value;
  return preference === "th" ? "th" : "en";
});
