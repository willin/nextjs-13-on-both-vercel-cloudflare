import { PageLinks } from '@/client/page-links';
import { PageTransition } from '@/client/transition';
import { supportedLanguages, fallbackLng } from '@/shared/config';
import '../../styles/globals.css';

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale = 'zh' } = params || {};
  const lang = supportedLanguages.includes(locale) ? locale : fallbackLng;

  return (
    <html lang={lang}>
      <head />
      <body>
        <div>
          <h3>Nav</h3>
          <PageLinks />
        </div>
        <PageTransition>{children}</PageTransition>
        <p>Locale: {lang}</p>
      </body>
    </html>
  );
}

export const revalidate = 7200;
