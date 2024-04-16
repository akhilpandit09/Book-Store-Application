import React from "react";

function Card({ item }) {
  // console.log(item);
  const { imageURL, title, category, price, genre, author, publisher } = item;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl mt-8  hover:bg-slate-50 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white ">
        <figure>
          <img src={imageURL} alt="book title" className="p-3" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-between">
            {title}
            <div className="badge badge-accent text-white p-3">{category}</div>
          </h2>
          <div className="flex flex-col gap-2 mb-2 mt-2 mx-3">
            <p className="text-base font-semibold">
              Author: <span className="text-sm text-slate-500">{author}</span>
            </p>
            <p className="text-base font-semibold">
              Genre: <span className="text-sm text-slate-500">{genre}</span>
            </p>
            <p className="text-base font-semibold">
              Publisher:{" "}
              <span className="text-sm text-slate-500">{publisher}</span>
            </p>
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-accent badge-lg font-medium text-bold p-3">
              ${price}
            </div>
            <div className="btn btn-sm btn-secondary cursor-pointer px-4 py-2 bg-transparent text-black hover:text-white dark:text-white">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
