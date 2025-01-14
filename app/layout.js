import Header from '@/app/components/header/Header'

import './globals.css';

export const metadata = {
  title: 'Akquinet Beeferando',
  description: 'Order meals, NOW!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
