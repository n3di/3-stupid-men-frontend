import Link from 'next/link';

import { Suspense } from 'react';
import FooterMenu from './FooterMenu';

const { COMPANY_NAME, SITE_NAME } = process.env;

export async function getMenu() {
  // Generowanie listy linków do stałych stron informacyjnych
  return [
    {
      title: 'Terms & Conditions',
      path: '/terms-conditions',
    },
    {
      title: 'Shipping & Returns Policy',
      path: '/shipping-return-policy',
    },
    {
      title: 'Privacy Policy',
      path: '/privacy-policy',
    },
    {
      title: 'FAQ',
      path: '/frequently-asked-questions',
    },
  ];
}

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-700';
  const menu = await getMenu();
  const copyrightName = COMPANY_NAME || SITE_NAME || '';

  return (
    <footer className="text-sm text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 border-neutral-700">
        <div>
          <Link className="flex items-center gap-2 md:pt-1 text-white" href="/">
            <span className="uppercase">{SITE_NAME}</span>
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[188px] w-[200px] flex-col gap-2">
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
              <div className={skeleton} />
            </div>
          }
        >
          <FooterMenu menu={menu} />
        </Suspense>
        <div className="md:ml-auto">
          <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border text-xs border-neutral-700 bg-black text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-rborder-neutral-700" />
            <span className="px-3">Deploy</span>
          </a>
        </div>
      </div>
      <div className="border-t py-6 text-sm border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.')
              ? '.'
              : ''}{' '}
            All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>
            <a href="https://github.com/n3di/3-stupid-men-frontend">
              View the source
            </a>
          </p>
          <p className="md:ml-auto">
            <a href="https://nedi.me" className="text-white">
              Created by Michał Szwindowski
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
