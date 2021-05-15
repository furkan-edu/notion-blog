import React, { useRef } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Footer from '../components/Footer';
import HeroRight from '../components/HeroRight';
import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import { getDatabase } from '../helper/notion';

function Home({ posts }) {
  return (
    <>
      <Background>
        <Navbar />
        <Container>
          <div className='md:col-start-4 md:col-span-3 col-span-12 space-y-12 py-6 flex flex-col  items-center justify-end text-center  flex-grow-1 px-12 pb-10 bg-white shadow-lg sm:rounded-3xl bg-opacity-50 bg-clip-padding backdrop-filter backdrop-blur-lg'>
            <div className='flex flex-col'>
              {posts.map((post) => {
                const date = new Date(post.last_edited_time).toLocaleString(
                  'en-US',
                  {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  }
                );

                return (
                  <div key={post.id}>
                    <div className='px-12 py-4 mt-2 shadow-lg sm:rounded-3xl bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-lg'>
                      <p className='font-medium hover:underline'>
                        <Link href={`/${post.id}`}>
                          <a>{post.properties.Name.title[0]?.plain_text}</a>
                        </Link>
                      </p>
                      <Link href={`/${post.id}`}>
                        <a className='font-bold text-xs text-gray-600 text-opacity-50'>
                          {' '}
                          Read More
                        </a>
                      </Link>
                      <p className='text-gray-600 text-opacity-40 text-xs mt-3.5 font-sans'>
                        {date}
                        <a href='#' className='text-blue-400 hover:underline'>
                          - Admin
                        </a>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className='flex flex-col w-full'>
              <div className='w-full flex h-0.5 bg-yellow-700 bg-opacity-10'>
                <div className='w-1/2 bg-red-500 h-full'></div>
              </div>
              <Subscribe />
            </div>
          </div>
          <HeroRight />
          <Footer />
        </Container>
      </Background>
    </>
  );
}
export default Home;

const Container = tw.div`
container grid grid-cols-12 md:gap-10 font-serif mx-auto
`;
const Background = tw.div`
bg-gradient-to-r from-teal-200 to-lime-200 p-6 flex flex-col items-center min-h-screen justify-center 
`;
export const getStaticProps = async () => {
  const database = await getDatabase(process.env.DATABASE_ID);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
