import React from 'react'
import Navbar from '../Navbar';
import Banner from '../Banner';
import Freebooks from '../Freebooks';
import Footers from '../Footers';

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebooks />
      <Footers />
    </>
  );
}

export default Home