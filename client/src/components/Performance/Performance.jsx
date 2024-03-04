import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import annualsports from "../images/anualspotsday.jpg";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import PerformanceCard from "./PerformanceCard";
import annualsports2 from "../images/annualsportsday2.jpg";
import annualsports3 from "../images/annualsportsday3.jpg";
import jeclet2k23 from "../images/jeclat2k23.jpg";
import jeclet2k231 from "../images/jeclat2k23 1.jpg";
import fest2011 from "../images/Fest2011.jpg";
import "./performancestyle.css";
const data = [
  {
    id: 1,
    img: `${annualsports}`,
    title: "Annual Sports Day",
  },
  {
    id: 2,
    img: `${annualsports2}`,
    title: "Annual Sports Day",
  },
  {
    id: 3,
    img: `${annualsports3}`,
    title: "Annual Sports Day",
  },
  {
    id: 3,
    img: `${jeclet2k23}`,
    title: "Jeclet 2k23",
  },
  {
    id: 4,
    img: `${jeclet2k231}`,
    title: "Jeclet 2k23",
  },
  {
    id: 5,
    img: `${fest2011}`,
    title: "Fest 2011",
  },
];

const Achievements = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div className="background">
      <div className=" p-6  text-center ">
        <div className="flex reveal slidedown justify-center items-center flex-col">
          <div className="font-medium  text-amber-700 md:text-4xl  text-3xl lg:text-4xl">
            Performance & Awards
          </div>
          <div className="border-[3px] mt-2  rounded  border-orange-800 w-[15%] lg:w-[8%]"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            "--swiper-navigation-size": "40px",
            "--swiper-navigation-color": "orange",
            "--swiper-navigation-font": "500",
            "--swiper-pagination-color": "orange",
            "padding-bottom": "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}

          className="mySwipe pt-14 gap-8 reveal slideup"
        >
          {data.map((e) => (
            <SwiperSlide>
              <PerformanceCard
                key={e.id}
                title={e.title}
                img={e.img}
                pad={e.pad}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <a href="/gallery">
          <button className="bg-transparent mt-2 mb-4 hover:bg-amber-500 hover:transition-colors text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded">
            Show More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Achievements;
