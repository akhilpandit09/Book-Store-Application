import React from "react";
import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card/Card";

function Freebooks() {
  const filterData = list.filter((data) => data.category === "free");

  // react slick slider code
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl mt-10 container mx-auto md:px-20 px-4">
        <div>
          <h2 className="font-semibold text-2xl pb-2">Free offered Books</h2>
          <p>
            Don't miss out on this opportunity to experience the magic of
            "Echoes of Eternity" for free. Download your copy today and embark
            on a journey that will linger in your heart long after the final
            page.
          </p>
          <p className="mt-12 mb-8 text-2xl font-semibold flex flex-col text-center justify-center items-center">
            Offer valid for a limited time.{" "}
            <span className=" text-3xl font-bold text-pink-600">Grab your free copy now and let the adventure begin!</span>
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebooks;
