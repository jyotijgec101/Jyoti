import React from "react";
import "./herostyle.css"
import Achievements from "../Achievements/Achievements";
import Performance from  "../Performance/Performance";
const Hero = () => {
  return (
    <>
    <div className=" herobackground  ml-2 ">
      <div className=" lg:grid md:grid md:grid-cols-2  lg:grid-cols-2 ">
        <div className=" lg:h-[100vh]"></div>
        <div className="lg:pt-0 pt-[2em]  flex items-center  ">
          <div className=" font-semibold trans text-style lg:p-8 md:p-2 p-4 md:text-[25px] text-[20px]  lg:text-[32px]  " style={{ color: "rgb(154 99 18)" }}>
            Welcome to Jyoti: A Ray of Hope. This initiative, established in
            2010, is a testiment to the commitment of the students from JGEC.
            <br/><span className="text-red-500">Our mission</span> is to offer quality education and guidance to
            underprivileged children. With the unwavering support of our college
            alumini, we have been successfully running this initiative for over
            a decade. Join us as we continue to illuminate young minds and
            foster a brighter future.
          </div>
        </div>
      </div>
      
    </div>
    
    <Achievements/>
    <Performance/>
    </>
  );
};

export default Hero;
