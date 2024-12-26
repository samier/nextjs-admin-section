import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const requireAuth = [
  "/dashboard",
  "/menu-1",
  "/menu-2",
  "/menu-3",
  "/menu-4",
  "/menu-5",
  "/menu-6",
  "/menu-7",
  "/menu-8",
  "/menu-9",
];
const publicAuth = ["/auth"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (requireAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", request.url));
    }
  } else if (publicAuth.some((path) => pathname.startsWith(path))) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
