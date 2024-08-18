import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  manifest: 'https://3stupidmen.com/manifest.json',
  title: '3 Stupid Man Online Store',
  description:
    '3 Stupid Men to nowatorska marka odzieżowa, która z impetem wkracza na scenę mody, łamiąc konwencje i celebrując ducha indywidualizmu. Z misją wywrócenia przemysłu modowego do góry nogami, 3 Stupid Men zdobywa uwagę entuzjastów mody dzięki swoim odważnym projektom i innowacyjnemu podejściu. Marka ta nie boi się prowokować, łącząc humor, ironię i dystans w unikalnych kolekcjach, które zachwycają oryginalnością i jakością. 3 Stupid Men to wybór dla tych, którzy chcą wyrazić siebie poprzez modę i cenią ubrania, które nie tylko wyglądają dobrze, ale także wywołują uśmiech na twarzy.',
  icons: {
    shortcut: 'https://3stupidmen.com/images/icons/icon-600x600.webp',
  },
  openGraph: {
    title: '3 Stupid Man Online Store',
    description:
      '3 Stupid Men to nowatorska marka odzieżowa, która z impetem wkracza na scenę mody, łamiąc konwencje i celebrując ducha indywidualizmu. Z misją wywrócenia przemysłu modowego do góry nogami, 3 Stupid Men zdobywa uwagę entuzjastów mody dzięki swoim odważnym projektom i innowacyjnemu podejściu. Marka ta nie boi się prowokować, łącząc humor, ironię i dystans w unikalnych kolekcjach, które zachwycają oryginalnością i jakością. 3 Stupid Men to wybór dla tych, którzy chcą wyrazić siebie poprzez modę i cenią ubrania, które nie tylko wyglądają dobrze, ale także wywołują uśmiech na twarzy.',
    url: 'https://3stupidmen.com/',
    siteName: '3stupidmen.com',
    images: [
      {
        url: 'https://3stupidmen.com/images/icons/icon-600x600.webp', // Must be an absolute URL
        width: 600,
        height: 600,
      },
    ],
    locale: 'PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Stupid Man Online Store Online Store',
    description:
      '3 Stupid Men to nowatorska marka odzieżowa, która z impetem wkracza na scenę mody, łamiąc konwencje i celebrując ducha indywidualizmu. Z misją wywrócenia przemysłu modowego do góry nogami, 3 Stupid Men zdobywa uwagę entuzjastów mody dzięki swoim odważnym projektom i innowacyjnemu podejściu. Marka ta nie boi się prowokować, łącząc humor, ironię i dystans w unikalnych kolekcjach, które zachwycają oryginalnością i jakością. 3 Stupid Men to wybór dla tych, którzy chcą wyrazić siebie poprzez modę i cenią ubrania, które nie tylko wyglądają dobrze, ale także wywołują uśmiech na twarzy.',
    creator: '@3StupidMen',
    images: ['https://3stupidmen.com/images/icons/icon-600x600.webp'], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={cn(inter.className, 'flex flex-col')}>{children}</body>
    </html>
  );
}
