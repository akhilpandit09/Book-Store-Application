import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import list from '../../public/list.json';
import Card from "./Card/Card";
import {Link} from "react-router-dom"
function Books() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 text-lg">
            Our dedicated team is committed to curating a diverse selection of
            books that cater to every taste and interest. Whether you're in the
            mood for a gripping thriller, a heartwarming romance, a mind-bending
            science fiction epic, or a thought-provoking literary classic,
            you'll find something to captivate your imagination here.
          </p>
          <Link to="/">
            <button className="flex flex-row items-center gap-1  bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-12 ">
              <IoMdArrowBack />
              Back
            </button>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Books;
