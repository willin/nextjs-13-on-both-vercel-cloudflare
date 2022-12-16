import { PageLinks } from '@/client/page-links';
import { PageTransition } from '@/client/transition';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='zh-CN'>
      <head />
      <body>
        <div>
          <h3>Nav</h3>
          <PageLinks />
        </div>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
