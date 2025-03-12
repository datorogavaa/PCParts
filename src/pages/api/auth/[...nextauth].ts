import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import { compare } from "bcryptjs";
import { JWT } from "next-auth/jwt"; // Import JWT type
import { Session, User } from "next-auth"; // Import Session and User types
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null; // If no credentials provided, reject the login attempt
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (user && await compare(credentials.password, user.password)) {
            return { id: user.id, email: user.email }; // Return user object on successful login
          }

          return null; // If user not found or password does not match
        } catch (error) {
          console.error("Error in authorize callback:", error);
          return null; // Return null if any error occurs
        }
      }
    })
  ],
  pages: {
    error: '/auth/error', // Define custom error page if desired
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }) {
      if (user) {
        token.id = user.id as string; // Explicitly assert the type of 'user.id' as string
      }
      return token;
    },
    async session({ session, token }: { session: Session, token: JWT }) {
      if (token) {
        session.user.id = token.id as string; // Explicitly assert 'token.id' as string
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);
