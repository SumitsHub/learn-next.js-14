import { NextResponse } from "next/server";

export function middleware(req) {
  console.log("inside middleware", new URL("/", req.url));
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: ["/about/:path*"],
};
