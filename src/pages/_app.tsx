import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <SessionProvider session={pageProps.session}>
      <Layout>
              <Component {...pageProps} /> 
      </Layout>
   </SessionProvider>
  );
}
