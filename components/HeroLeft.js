import React from 'react';
import Subscribe from './Subscribe';

function HeroLeft() {
  return (
    <>
      <div className="md:col-start-4 md:col-span-3 col-span-12 space-y-12 py-6 flex flex-col  items-center justify-end text-center  flex-grow-1 px-12 pb-10 bg-white shadow-lg sm:rounded-3xl bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col">
          <h3 className="font-bold text-xs text-gray-600 text-opacity-50 mb-3">
            POST HEADER
          </h3>
          <a href="#" className="font-medium hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </a>
          <p className="text-gray-600 text-opacity-40 text-xs mt-3.5 font-sans">
            ? minutes ago by
            <a href="#" className="text-blue-400 hover:underline">
              -Admin
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-xs text-gray-600 text-opacity-50 mb-3">
            POST HEADER
          </h3>
          <a href="#" className="font-medium hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </a>
          <p className="text-gray-600 text-opacity-40 text-xs mt-3.5 font-sans">
            ? minutes ago by
            <a href="#" className="text-blue-400 hover:underline">
              -Admin
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-xs text-gray-600 text-opacity-50 mb-3">
            POST HEADER
          </h3>
          <a href="#" className="font-medium hover:underline">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </a>
          <p className="text-gray-600 text-opacity-40 text-xs mt-3.5 font-sans">
            ? minutes ago by{' '}
            <a href="#" className="text-blue-400 hover:underline">
              -Admin
            </a>
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full flex h-0.5 bg-yellow-700 bg-opacity-10">
            <div className="w-1/2 bg-red-500 h-full"></div>
          </div>
          <Subscribe />
        </div>
      </div>
    </>
  );
}

export default HeroLeft;
