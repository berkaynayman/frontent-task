// src/pages/_app.tsx
import '../styles/globals.css';  // globals.css dosyasını dahil edin

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
