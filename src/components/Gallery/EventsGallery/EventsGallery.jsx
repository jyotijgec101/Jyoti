import React, { useState } from "react";
import Gallery from "../GalleryCard";
import photo1 from "./images/photo_1_2023-10-21_13-13-28.jpg";
import photo2 from "./images/photo_2_2023-10-21_13-13-28.jpg";
import photo3 from "./images/photo_3_2023-10-21_13-13-28.jpg";
import photo4 from "./images/photo_4_2023-10-21_13-13-28.jpg";
import photo5 from "./images/photo_5_2023-10-21_13-13-28.jpg";
import photo6 from "./images/photo_6_2023-10-21_13-13-28.jpg";

const EventsGallery = () => {
  const [btn, setbtn] = useState("Show More");
  const [styleimg, setstyleimg] = useState({
    display: "none",
  });
  const toggleStyle = () => {
    if (styleimg.display === "block") {
      setstyleimg({ display: "none" });
      setbtn("Show More");
    } else {
      setstyleimg({ display: "block" });
      setbtn("Show Less");
    }
  };

  const galleryImages = [
    {
      img: photo1,
    },
    {
      img: photo2,
    },
    {
      img: photo3,
    },
    {
      img: photo4,
    },
    {
      img: photo5,
    },
    {
      img: photo6,
    },
  ];
  const galleryImages1 = [
    {
      img: photo1,
    },
    {
      img: photo2,
    },
    {
      img: photo3,
    },
    {
      img: photo4,
    },
    {
      img: photo5,
    },
    {
      img: photo6,
    },
  ];

  return (
    <div className="">
      <div className="     lg:px-12 ">
        <p className=" pb-9 md:text-6xl lg:text-5xl text-[#b0703b]">
          
        </p>
        <Gallery galleryImages={galleryImages} />
        <div style={styleimg} className="mt-4 ">
          <Gallery galleryImages={galleryImages1} />
        </div>

        <button
          type="button"
          class="text-white mt-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={toggleStyle}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

export default EventsGallery;
