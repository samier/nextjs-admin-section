import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import moment from "moment";

async function refreshAccessToken(tokenObject: JWT) {
  try {
    return tokenObject;
  } catch (error) {
    console.error("[refreshAccessToken] Error refreshing token:", error);
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          !credentials ||
          typeof credentials.email !== "string" ||
          typeof credentials.password !== "string"
        ) {
          throw new Error("Invalid credentials");
        }

        const { email, password } = credentials;

        if (email === "john@gmail.com" && password === "123") {
          return {
            id: "1",
            name: "John Doe",
            email: "john@gmail.com",
            access: "static-access-token",
            refresh: "static-refresh-token",
            accessTokenExpiry: moment().add(1, "hour").toISOString(),
          };
        } else {
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token = {
          id: user.id,
          name: user.name,
          email: user.email,
          access: user.access,
          refresh: user.refresh,
          accessTokenExpiry: user.accessTokenExpiry,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
        access: token.access,
        refresh: token.refresh,
        accessTokenExpiry: token.accessTokenExpiry,
      };
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
