import { siteConfig } from '@/config/site';
import { HeaderMenu } from './HeaderMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-center sm:space-x-0">
        <HeaderMenu menu={siteConfig.dashboard.sideMenu} />
      </div>
    </header>
  );
}
