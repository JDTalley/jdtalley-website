import type { Metadata } from 'next';
import { Ubuntu_Mono } from 'next/font/google';
import './globals.css';

const ubuntu_mono = Ubuntu_Mono({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dakota Talley',
  description: 'Personal Website for Dakota Talley',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ubuntu_mono.className}>{children}</body>
    </html>
  );
}
