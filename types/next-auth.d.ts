import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {

  interface Session {
    user: {
      id: string,
      name: string,
      access: string,
      refresh: string,
      accessTokenExpiry: string,
    } & DefaultSession["user"]
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    id: string,
    name: string,
    access: string,
    refresh: string,
    accessTokenExpiry: string,
  }
}