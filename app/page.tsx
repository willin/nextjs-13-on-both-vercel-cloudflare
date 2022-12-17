import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { supportedLanguages, fallbackLng } from '@/shared/config';

export default function HomeRedirect() {
  const accepts = headers().get('accept-language') || '';
  const detected = accepts.split(',')[0].split('-')[0];
  const validLocale = supportedLanguages.includes(detected) ? detected : fallbackLng;
  redirect(`/${validLocale}`);
  return <div>&nbsp;</div>;
}
