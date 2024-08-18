'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MenuItem {
  title: string;
  path: string;
}

interface FooterMenuProps {
  menu: MenuItem[];
}

export function FooterMenuItem({ item }: { item: MenuItem }) {
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

export default function FooterMenu({ menu }: FooterMenuProps) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul>
        {menu.map((item) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}
