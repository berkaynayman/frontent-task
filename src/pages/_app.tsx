import React, { FC } from "react";
import '../styles/globals.css';  // globals.css dosyasını dahil edin

interface pageProps {
  Component ?: any;
  pageProps ?: any;
}


const MyApp: FC<pageProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
