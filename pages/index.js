import React, { useRef } from 'react';
import tw from 'tailwind-styled-components';
import Footer from '../components/Footer';
import HeroRight from '../components/HeroRight';
import HeroLeft from '../components/HeroLeft';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Background>
        <Navbar />
        <Container>
          <HeroLeft />
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
