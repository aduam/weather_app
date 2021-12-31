import { ReactChild } from 'react';

interface LayoutProps {
  children: ReactChild;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      { children }
    </main>
  );
}