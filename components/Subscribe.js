import * as React from 'react';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function Subscribe() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <button
        className="px-4 py-2 rounded bg-white-500 mt-2 text-purple shadow-md bg-opacity-70 bg-clip-padding backdrop-filter backdrop-blur-lg"
        onClick={() => setIsOpen(true)}
      >
        Subscribe Now
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 ml-auto text-red-500 inline-block"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
      <Transition
        show={isOpen}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-50 overflow-y-auto"
        tabIndex={0}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 text-center font-medium text-chocolate-900"
                      id="modal-headline"
                    >
                      Newsletter
                    </h3>

                    <motion.h2
                      className="mt-2 text-sm font-bold text-gray-800 text-center"
                      initial={{ rotate: -10, scale: 0.5, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 250,
                        dumping: 12,
                        delay: 0.2,
                      }}
                    >
                      You can be informed about our news for free. ❤️
                    </motion.h2>

                    <div className="mt-2 relative text-gray-700">
                      <input
                        className="w-full h-10 pl-8 pr-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                        type="text"
                        placeholder="         your@email.com"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setIsOpen(false)}
                  >
                    Submit
                  </button>
                </span>
                <span className="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </React.Fragment>
  );
}
