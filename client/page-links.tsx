'use client';
import clsx from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function PageLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href='/'
        className={clsx('btn btn-ghost btn-sm relative', {
          'btn-outline': pathname === '/'
        })}>
        Home
        {pathname === '/' ? <motion.div className='underline' layoutId='underline' /> : null}
      </Link>
      <Link
        href='/demo'
        className={clsx('btn btn-ghost btn-sm relative', {
          'btn-outline': pathname === '/demo'
        })}>
        Demo
        {pathname === '/demo' ? <motion.div className='underline' layoutId='underline' /> : null}
      </Link>
    </nav>
  );
}
