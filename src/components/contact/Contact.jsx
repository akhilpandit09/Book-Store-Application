import React from 'react'
import Signup from '../Signup'
import Navbar from '../Navbar';
import Footers from '../Footers';

function Contact() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="max-w-screen-2xl mt-10 container mx-auto md:px-20 px-4 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-pink-500">
                📚 Join Our Bookstore Community Today!
              </h1>
              <p className="py-6">
                Don't let this opportunity slip away. Join our online book store
                community today and embark on a journey that will enrich your
                mind, stir your soul, and ignite your passion for reading!
              </p>
            </div>
            <Signup />
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Contact