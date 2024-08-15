export type SiteConfig = ReturnType<typeof createSiteConfig>;

export const createSiteConfig = () => {
  const securityRoot = '/dashboard';

  return {
    name: '3 Stupid Man',
    description: '3 Stupid Man create shop for you.',
    shop: {
      name: '3 Stupid Man',
      navigation: [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Collections',
          href: '/collections',
        },
        {
          title: 'Categories',
          href: '/categories',
        },
      ],
      shoppingCart: '/cart',
    },
    securityRoot,
    dashboard: {
      navigation: [
        {
          title: 'Overview',
          href: `${securityRoot}`,
        },
        {
          title: 'Products',
          href: `${securityRoot}/products`,
        },
        {
          title: 'Orders',
          href: `${securityRoot}/orders`,
        },
        {
          title: 'Customers',
          href: `${securityRoot}/customers`,
        },
        {
          title: 'Analytics',
          href: `${securityRoot}/analytics`,
        },
        {
          title: 'Promotions',
          href: `${securityRoot}/promotions`,
        },
        {
          title: 'Reviews',
          href: `${securityRoot}/reviews`,
        },
      ],
    },
    auth: {
      signIn: '/sign-in',
      signUp: '/sign-up',
      logOut: '/logout',
    },
    links: {
      instagram: 'https://instagram.com/3StupidMen',
      facebook: 'https://facebook.com/3StupidMen',
      x: 'https://x.com/3StupidMen',
    },
  };
};

// Teraz musisz odwołać się do siteConfig jako do funkcji
export const siteConfig = createSiteConfig();
