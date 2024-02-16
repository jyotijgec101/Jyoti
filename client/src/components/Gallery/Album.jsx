import React, { useState } from "react";
import EventsGallery from "./EventsGallery/EventsGallery";
import PrizeGallery from "./PrizeGallery/PrizeGallery";
import "./albumstyle.css";

const Album = () => {
  const [show, setshow] = useState(false)
  const [showprize, setshowprize] = useState(false)
  const [latest, setlatest] = useState(true)
  const events = ()=>{
    setshow(!show);
    setshowprize(false)
    setlatest(false)
    
    
  }
  const prizes = ()=>{
    setshowprize(!showprize);
    setshow(false)
    setlatest(false)
  }
  const  latestAlbum =()=>{
    setlatest(!latest);
    setshowprize(false);
    setshow(false)
  }
  return (
    <div className="albumbackground p-3 md:p-10 lg:p-0 ">
      <div className="lg:px-12  pt-12 flex items-center slideleft lg:flex-row md:flex-row gap-4 flex-col justify-between">
        <div className="flex flex-col justify-center ">

        {latest?<div className="text-amber-700 md:text-5xl text-3xl lg:text-5xl">Gallery-Latest</div>:null}
        {show?<div className="text-amber-700 md:text-5xl text-3xl lg:text-5xl">Gallery-Events</div>:null}
        {showprize?<div className="text-amber-700 md:text-5xl text-3xl lg:text-5xl">Gallery-Prizes</div>:null}
        <div className="border-[3px] rounded m-1 border-orange-700  w-[25%]"></div>
        </div>
        <div className="">
          <ul className="flex  font-medium slideright lg:gap-8 md:gap-8 gap-4 lg:text-2xl text-xl md:text-2xl">
            <li>
              <div onClick={latestAlbum} className="cursor-pointer hover:scale-110 transition-transform hover:text-amber-600">Latest</div>
            </li>
            <li>
              <div onClick={events} className="cursor-pointer hover:scale-110 transition-transform hover:text-amber-600">Events</div>
            </li>
            <li>
              <div className="cursor-pointer hover:scale-110 transition-transform hover:text-amber-600" onClick={prizes}>Prizes</div>
            </li>
          </ul>
        </div>
      </div >
      {latest?<div className="fadein"><EventsGallery/><PrizeGallery/></div>:null}
      {show?<div className="fadein">
        <EventsGallery />
      </div>:null}
      {showprize?<div className="fadein">
        <PrizeGallery />
      </div>:null}
      
      
    </div>
  );
};

export default Album;
