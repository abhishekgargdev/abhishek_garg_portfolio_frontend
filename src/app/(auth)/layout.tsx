import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Portfolio CMS',
    default: 'Portfolio CMS',
  },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
