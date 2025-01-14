import GradientForLayout from './components/Gradient';
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
        <GradientForLayout></GradientForLayout>
        <Header />
        {children}
      </body>
    </html>
  );
}
