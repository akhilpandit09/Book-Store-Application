import React from 'react'
import Navbar from '../Navbar';
import Footers from '../Footers';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar />
      <div>
        <div className="hero min-h-screen max-w-screen-2xl container mx-auto md:px-20 px-4 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UY327_FMwebp_QL65_.jpg"
              className="max-w-sm rounded-lg shadow-2xl border-[8px] border-pink-600 p-6"
            />
            <div>
              <h1 className="text-3xl font-bold">
                We are from{" "}
                <span className="text-5xl font-bold text-pink-500">
                  Book Store!
                </span>{" "}
              </h1>
              <p className="py-6">
                <span>
                  📚 Welcome to Our Bookstore: Where Stories Come to Life
                </span>{" "}
                <br />
                At our online book store, we believe in the transformative power
                of storytelling. We're not just a place to buy books – we're a
                vibrant community of readers, writers, and book lovers united by
                our shared love of literature. Founded with a passion for
                connecting readers with the stories that ignite their
                imaginations, our bookstore is a haven for bibliophiles seeking
                new adventures between the pages. Whether you're searching for a
                gripping mystery to unravel, a heartwarming romance to lose
                yourself in, or a thought-provoking classic to ponder over,
                you'll find it here amidst our carefully curated collection.
              </p>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default About