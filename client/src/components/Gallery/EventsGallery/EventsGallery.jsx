import React from "react";
import Gallery from "../GalleryCard";
import photo1 from "./images/photo_1_2023-10-21_13-13-28.jpg";
import photo2 from "./images/photo_2_2023-10-21_13-13-28.jpg";
import photo3 from "./images/photo_3_2023-10-21_13-13-28.jpg";
import photo4 from "./images/photo_4_2023-10-21_13-13-28.jpg";
import photo5 from "./images/photo_5_2023-10-21_13-13-28.jpg";
import photo6 from "./images/photo_6_2023-10-21_13-13-28.jpg";
import { NavLink } from "react-router-dom";
const EventsGallery = () => {
  // const [btn, setbtn] = useState("Show More");
  // const [styleimg, setstyleimg] = useState({
  //   display: "none",
  // });
  // const toggleStyle = () => {
  //   if (styleimg.display === "block") {
  //     setstyleimg({ display: "none" });
  //     setbtn("Show More");
  //   } else {
  //     setstyleimg({ display: "block" });
  //     setbtn("Show Less");
  //   }
  //   window.scrollTo(0,0);
  // };

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
  // const galleryImages1 = [
  //   {
  //     img: photo1,
  //   },
  //   {
  //     img: photo2,
  //   },
  //   {
  //     img: photo3,
  //   },
  //   {
  //     img: photo4,
  //   },
  //   {
  //     img: photo5,
  //   },
  //   {
  //     img: photo6,
  //   },
  // ];

  return (
    <div className="">
      <div className="     lg:px-12 ">
        <p className=" pb-9 md:text-6xl lg:text-5xl text-[#b0703b]">
          
        </p>
        <Gallery galleryImages={galleryImages} />
        {/* <div style={styleimg} className="mt-4 ">
          <Gallery galleryImages={galleryImages1} />
        </div> */}

        <div className="flex mt-10 lg:mt-8 h-[8vh] justify-center items-center">
          <div className="border teambutton cursor-pointer border-black p-5 px-10">
            <NavLink to="https://drive.google.com/drive/folders/10E5U_wIMuOy73tsIGaHVJZ9z-pTDrDJV" target="_blank" onClick={()=>window.scrollTo(0,0)} className=" tinos-regular text-xl font-[400] shadow-md">
              Show More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGallery;
