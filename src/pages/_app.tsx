import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <ClerkProvider>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <Layout>
        <Component {...pageProps} /> 
      </Layout>
    </ClerkProvider>
  );
}
