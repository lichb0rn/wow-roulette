import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const lifeCraft = localFont({
  src: './LifeCraft_Font.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WoW Roulette',
  description: 'Choose your next character by random generator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lifeCraft.className}>{children}</body>
    </html>
  );
}
