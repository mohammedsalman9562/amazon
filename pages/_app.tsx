import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RootLayout>
        <Component {...pageProps}/>
      </RootLayout>
  </div>
  )
}
