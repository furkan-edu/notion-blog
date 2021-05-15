import React, { useRef } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

function HeroRight() {
  const ref = useRef(null);

  return (
    <div className='md:col-span-3 col-span-12  relative flex'>
      <div className='flex flex-col items-center justify-end text-center  flex-grow-1 px-12 pt-4 pb-24 bg-white shadow-lg sm:rounded-3xl bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <div className='bg-gradient-to-r from-teal-200 to-lime-200 rounded '>
          <Player
            autoplay
            loop
            mode='normal'
            src='https://assets6.lottiefiles.com/animated_stickers/lf_tgs_pdiwfsem.json'
            style={{ height: '128px', width: '128px', margin: '-8px' }}
          >
            <Controls
              visible={false}
              buttons={['play', 'repeat', 'frame', 'debug']}
            />
          </Player>
        </div>
        <div className='flex flex-col  w-full mt-5 mb-2'>
          <motion.h1
            className='text-xl font-bold text-gray-800'
            initial={{ rotate: -10, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 250,
              dumping: 12,
              delay: 0.2,
            }}
          >
            Kağan - Developer
          </motion.h1>
        </div>
        <div className='mt-5'>
          <div className='w-full flex h-0.5 mb-1 bg-yellow-700 bg-opacity-10'></div>

          <p className='font-light'>
            “If you don’t like the hand that fate’s dealt you with, fight for a
            new one.” ❤️
          </p>
        </div>
        <div className='flex flex-col w-full'>
          <div className='w-full flex h-0.5 mt-1 bg-yellow-700 bg-opacity-10'></div>
        </div>

        <div className='mt-8'>
          <ul className='flex space-x-6'>
            <li className='flex flex-col items-center space-y-1 '>
              <div className='bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full '>
                <a
                  href='#'
                  className='block bg-white p-1 rounded-full transform transition hover:-rotate-6'
                >
                  <Player
                    autoplay
                    loop
                    mode='normal'
                    src='https://assets2.lottiefiles.com/packages/lf20_4VvdIQ.json'
                    style={{ height: '75px', width: '75px' }}
                  >
                    <Controls
                      visible={false}
                      buttons={['play', 'repeat', 'frame', 'debug']}
                    />
                  </Player>
                </a>
              </div>

              <a href='#'>Projects</a>
            </li>

            <li className='flex flex-col items-center space-y-1 '>
              <div className='bg-gradient-to-tr from-yellow-400 to-purple-600 p-1 rounded-full'>
                <a
                  href='#'
                  className='block bg-white p-1 rounded-full transform transition hover:-rotate-6'
                >
                  <Player
                    autoplay
                    loop
                    mode='normal'
                    src='https://assets2.lottiefiles.com/datafiles/5FFwoVNq8EcKMH4/data.json'
                    style={{ height: '75px', width: '75px' }}
                  >
                    <Controls
                      visible={false}
                      buttons={['play', 'repeat', 'frame', 'debug']}
                    />
                  </Player>
                </a>
              </div>

              <a href='#'>Tutorials</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroRight;
