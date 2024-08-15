export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '3 Stupid Man',
  description: '3 Stupid Man create shop for you.',
  shop: {
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
  },
  dashboard: {
    navigation: [
      {
        title: 'Overview',
        href: '/dashboard',
      },
      {
        title: 'Products',
        href: '/dashboard/products',
      },
      {
        title: 'Orders',
        href: '/dashboard/orders',
      },
      {
        title: 'Customers',
        href: '/dashboard/customers',
      },
      {
        title: 'Analytics',
        href: '/dashboard/analytics',
      },
      {
        title: 'Promotions',
        href: '/dashboard/promotions',
      },
      {
        title: 'Reviews',
        href: '/dashboard/reviews',
      },
    ],
  },
  links: {
    instagram: 'https://instagram.com/3StupidMen',
    facebook: 'https://facebook.com/3StupidMen',
    x: 'https://x.com/3StupidMen',
  },
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    logOut: '/logout',
  },
  shoppingCart: '/cart',
  securityRoot: '/dashboard',
};
