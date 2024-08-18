export type SiteConfig = ReturnType<typeof createSiteConfig>;

export const createSiteConfig = () => {
  const securityRoot = '/dashboard';

  return {
    name: '3 Stupid Man',
    description: '3 Stupid Man create shop for you.',
    shop: {
      name: '3 Stupid Man',
      headerMenu: [
        {
          title: 'All',
          path: '/',
        },
        {
          title: 'Shirts',
          path: '/collections',
        },
        {
          title: 'Stickers',
          path: '/categories',
        },
      ],
      footerMenu: [
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
      ],
      shoppingCart: '/cart',
    },
    securityRoot,
    dashboard: {
      sideMenu: [
        {
          title: 'Overview',
          path: `${securityRoot}`,
        },
        {
          title: 'Products',
          path: `${securityRoot}/products`,
        },
        {
          title: 'Orders',
          path: `${securityRoot}/orders`,
        },
        {
          title: 'Customers',
          path: `${securityRoot}/customers`,
        },
        {
          title: 'Analytics',
          path: `${securityRoot}/analytics`,
        },
        {
          title: 'Promotions',
          path: `${securityRoot}/promotions`,
        },
        {
          title: 'Reviews',
          path: `${securityRoot}/reviews`,
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
