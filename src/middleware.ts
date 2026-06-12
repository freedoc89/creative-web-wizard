import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  const allowedLocales = ["hu", "en", "de"];

  if (pathname === "/") {
    const saved = request.cookies.get("NEXT_LOCALE")?.value || "hu";
    return NextResponse.redirect(new URL(`/${saved}`, request.url));
  }

  if (firstSegment.includes("-") || !allowedLocales.includes(firstSegment)) {
    const shortLang = firstSegment.split("-")[0].toLowerCase();

    if (allowedLocales.includes(shortLang)) {
      segments[1] = shortLang;
    } else {
      segments[1] = "hu";
    }

    const newPath = segments.join("/");
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"
  ]
};
