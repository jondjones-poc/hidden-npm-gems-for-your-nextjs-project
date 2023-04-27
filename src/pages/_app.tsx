import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "nprogress/nprogress.css";
import * as React from "react";
import NProgress from "nprogress"

export default function App({ Component, pageProps, router  }: AppProps) {

  React.useEffect(() => {

    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return <Component {...pageProps} />
}
