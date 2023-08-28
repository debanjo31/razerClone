export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/account', '/checkout'],

  // matcher: ["/((?!register|api|login).*)"],
};
