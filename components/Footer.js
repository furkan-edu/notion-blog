import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className='md:col-start-4 md:col-span-6 col-span-12 flex flex-col bg-white shadow-lg sm:rounded-3xl bg-opacity-50  backdrop-filter backdrop-blur-lg'>
      <footer id='footer' className='relative z-50'>
        <div className='py-8 flex flex-col items-center'>
          <div className='flex mb-3'>
            <a href='https://github.com/kaganmert'>
              <div className='text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand '>
                <Image src='/github.svg' alt='logo' width={24} height={24} />
              </div>
            </a>
            <a href='https://twitter.com/kagan.dev'>
              <div className='pl-4'>
                <Image src='/twitter.svg' alt='logo' width={24} height={24} />
              </div>
            </a>
            <a href='https://codesandbox.io/u/kn'>
              <div className='pl-4'>
                <Image
                  src='/codesandbox.svg'
                  alt='logo'
                  width={24}
                  height={24}
                />
              </div>
            </a>
            <a href='https://www.linkedin.com/in/kaganmert/'>
              <div className='pl-4'>
                <Image src='/linkedin.svg' alt='logo' width={24} height={24} />
              </div>
            </a>
          </div>
          <motion.h1
            className='text-l font-bold text-gray-800'
            initial={{ rotate: -10, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 250,
              dumping: 12,
              delay: 0.2,
            }}
          >
            Created With ❤️ 2021.{' '}
          </motion.h1>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
