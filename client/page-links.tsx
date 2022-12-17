'use client';
import clsx from 'classnames';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href='/zh'
        className={clsx('btn btn-ghost btn-sm relative', {
          'btn-outline': pathname === '/zh'
        })}>
        主页
        {pathname === '/zh' ? <motion.div className='underline' layoutId='underline' /> : null}
      </Link>
      <Link
        href='/zh/demo'
        className={clsx('btn btn-ghost btn-sm relative', {
          'btn-outline': pathname === '/zh/demo'
        })}>
        示例
        {pathname === '/zh/demo' ? <motion.div className='underline' layoutId='underline' /> : null}
      </Link>
      <Link
        href='/en'
        className={clsx('btn btn-ghost btn-sm relative', {
          'btn-outline': pathname === '/en'
        })}>
        Home
        {pathname === '/en' ? <motion.div className='underline' layoutId='underline' /> : null}
      </Link>
      <Link
        href='/en/demo'
        className={clsx('btn btn-ghost btn-sm relative', {
          'btn-outline': pathname === '/en/demo'
        })}>
        Demo
        {pathname === '/en/demo' ? <motion.div className='underline' layoutId='underline' /> : null}
      </Link>
    </nav>
  );
}
