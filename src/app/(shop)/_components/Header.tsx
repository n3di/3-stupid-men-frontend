import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Icons } from '@/components/ui/icons';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Navigation items={siteConfig.shop.navigation} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.securityRoot}>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.securityRoot className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </div>
            </Link>
            <Link href={siteConfig.auth.signIn}>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.login className="h-5 w-5" />
                <span className="sr-only">Sign In</span>
              </div>
            </Link>
            <Link href={siteConfig.shoppingCart}>
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.shoppingCart className="h-4 w-4 fill-current" />
                <span className="sr-only">Shopping Cart</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
