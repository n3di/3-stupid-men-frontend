'use client';

import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { buttonVariants } from '@/components/ui/button';

interface MenuItem {
  title: string;
  path: string;
}

interface HeaderMenuProps {
  menu: MenuItem[];
}

export function HeaderMenuItem({ item }: { item: MenuItem }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={cn(
          'block p-2 text-lg underline-offset-4 hover:underline md:inline-block md:text-sm hover:text-neutral-300',
          {
            'text-neutral-300': active,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

export function HeaderMenu({ menu }: HeaderMenuProps) {
  if (!menu?.length) return null;

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/">
        <div
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          <span>{siteConfig.name}</span>
        </div>
      </Link>
      <nav>
        <ul className="flex gap-3">
          {menu.map((item) => {
            return <HeaderMenuItem key={item.title} item={item} />;
          })}
        </ul>
      </nav>
    </div>
  );
}
