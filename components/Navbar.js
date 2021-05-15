import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const navigation = [
  { name: 'Projects', href: '#', current: true },
  { name: 'Tutorials', href: '#', current: false },
  { name: 'CV', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure
      as='nav'
      className='md:col-start-4 mb-2  justify-end text-center bg-white shadow-lg sm:rounded-3xl bg-opacity-50 backdrop-filter backdrop-blur-lg'
    >
      {({ open }) => (
        <>
          <div className='max-w-3xl mx-auto px-2 sm:px-6 lg:px-10'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-4 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-8 w-8' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-8 w-8' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='ml-12 justify-end'>
                  <Player
                    autoplay
                    loop
                    mode='normal'
                    src='https://assets8.lottiefiles.com/packages/lf20_5tW8p4.json'
                    style={{ height: '64px', width: '64px' }}
                  >
                    <Controls
                      visible={false}
                      buttons={['play', 'repeat', 'frame', 'debug']}
                    />
                  </Player>
                </div>
                <div className='hidden sm:block sm:ml-6 '>
                  <div className='flex space-x-6 mt-4 ml-2 mr-12 '>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-black'
                            : 'text-sunset-800 hover:bg-purple-500 hover:text-purple-800',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'text-black'
                      : 'text-sunset-800 hover:bg-olive-700 hover:text-purple-800',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
