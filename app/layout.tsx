import type { ReactNode } from 'react';
import '@styles/globals.scss';

export const metadata = {
  title: 'Frederick Velasco',
  description: `Hello, I'm Frederick Velasco, a UX/UI Designer.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}