import './globals.css';

import { setupMocks } from '../mocks';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  setupMocks();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}