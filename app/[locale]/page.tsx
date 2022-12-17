import { notFound } from 'next/navigation';
import { supportedLanguages } from '@/shared/config';

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  if (locale !== undefined && !supportedLanguages.includes(locale)) {
    notFound();
  }

  return (
    <div>
      <h1>Hello World</h1>
      <p>Home</p>
    </div>
  );
}
