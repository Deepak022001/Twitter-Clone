import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Quicksand } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { GoogleOAuthProvider } from '@react-oauth/google';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId='795459890942-9ksajl0ko9gumkb7jhc9g47s25oltdmh.apps.googleusercontent.com'>
      <div className={inter.className}>
        <Component {...pageProps} />;
      </div>
    </GoogleOAuthProvider>
  );
}
