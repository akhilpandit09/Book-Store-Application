import React from "react";
// import bannerImg from "../../public/images/hero.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container  md:px-20  flex flex-col md:flex-row justify-between ">
        <div className="order-2 md:order-1 w-full mt-12 md:w-1/2 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Welcome to our online{" "}
              <span className="text-pink-500 text-6xl">Book Store</span>{" "}
            </h1>
            <p className="text-xl justify-items-center">
              Discover worlds unknown, meet characters who feel like old
              friends, and explore ideas that will ignite your mind. Whether
              you're seeking gripping thrillers, heartwarming romance,
              mind-bending science fiction, or profound classics, our shelves
              are stocked with treasures waiting to be unearthed.
            </p>
            <label className="input input-bordered flex items-center gap-2  dark:bg-slate-900 dark:text-white  dark:border-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70 dark:text-white"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-secondary ">Subscribe</button>
          </div>
        </div>
        <div className="order-1 w-full md:w-1/2 md:mt-32 md:ml-56">
          <img
            src="https://m.media-amazon.com/images/I/815WORuYMML._AC_UY327_FMwebp_QL65_.jpg"
            alt=""
            className=" sm:mt-33 items-center justify-center text-center border-[8px] border-pink-600 shadow-md p-6"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
