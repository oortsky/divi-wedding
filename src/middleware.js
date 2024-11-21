import { NextResponse } from "next/server";

const accessKey = process.env.ACCESS_KEY;

export function middleware(request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key");

  if (key !== accessKey) {
    url.pathname = "/403";
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"]
};
