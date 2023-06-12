import './globals.css';
import { Inter } from 'next/font/google';
import { TopBar } from '@/components';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <Head>
        <title>Rud</title>
        <meta name="og:title" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${inter.className} min-h-screen bg-white dark:bg-slate-800 text-black dark:text-white`}>
        <TopBar />
        {children}
      </body>
    </html>
  );
}
