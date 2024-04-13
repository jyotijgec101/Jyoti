import React from "react";
import logo from "../images/Logo.png";
import { FaInstagram, FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="lg:p-10 md:p-8 mt-5 pt-8  bg-[#4f181ef1] ">
      <div className="  grid md:grid lg:grid-cols-3 md:grid-cols-3  gap-4  ">
        <div className="flex flex-col slideleft lg:items-start md:items-start items-center ">
          <img src={logo} width={"50%"}  alt="" />
          <div className="lg:px-10 py-4">
            <h2 className=" text-yellow-500 font-medium text-3xl">
              Get in Touch
            </h2>
            <div className=" w-[20%] mt-2 border-[3px] rounded border-orange-600"></div>
          </div>
          <div className="lg:px-10 pt-4  flex flex-col gap-3 text-yellow-500">
            <div className="flex lg:items-center gap-1">
              <FaLocationDot className=" text-xl"/>{" "}
              <p className="text-white text-[18px] font-medium">
                {" "}
                JGEC - Jalpaiguri, West
                Bengal 735102
              </p>
            </div>
            {/* <div className="flex items-center gap-1">
              <IoIosCall className="text-xl"/>
              <p className="text-white font-medium text-[18px]">
                +91-xxxxxxxxxx
              </p>
            </div> */}
            <div className="flex items-center gap-1">
              <MdEmail className="text-xl"/>
              <p className="text-white font-medium text-[18px]">
              jyoti@jgec.ac.in
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex  slideup py-8 hidden  px-10 lg:p-0 md:p-0 flex-col">
          <div className="pb-10 ">
            <h2 className=" text-yellow-500 font-medium text-3xl">
              Quick Links
            </h2>
            <div className=" w-[20%]  mt-2 border-[3px] rounded border-orange-600"></div>
          </div>
          <div className="text-white text-[18px] flex flex-col gap-8 font-medium">
            <ul>
              <li>
                <div className="flex flex-row gap-4 items-center">
                  <FaGreaterThan className="text-yellow-500" />
                  <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
                </div>
                <div className="w-[80%]  mt-1 border-[1px] rounded  border-gray-500"></div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="flex flex-row gap-4 items-center">
                  <FaGreaterThan className="text-yellow-500" />
                  <NavLink to="/gallery" onClick={scrollToTop}>Gallery</NavLink>
                </div>
                <div className="w-[80%]  mt-1 border-[1px] rounded  border-gray-500"></div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="flex flex-row gap-4 items-center">
                  <FaGreaterThan className="text-yellow-500" />
                  <NavLink to="/team" onClick={scrollToTop}>Team</NavLink>
                </div>
                <div className="w-[80%]  mt-1 border-[1px] rounded  border-gray-500"></div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="flex flex-row gap-4 items-center">
                  <FaGreaterThan className="text-yellow-500" />
                  <NavLink to="/notice" onClick={scrollToTop}>Notice</NavLink>
                </div>
                <div className="w-[80%]  mt-1 border-[1px] rounded  border-gray-500"></div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="flex flex-row gap-4 items-center">
                  <FaGreaterThan className="text-yellow-500" />
                  <NavLink to="/verify" onClick={scrollToTop}>Verify</NavLink>
                </div>
                <div className="w-[80%] mt-1  border-[1px] rounded  border-gray-500"></div>
              </li>
            </ul>
            <ul>
              <li>
                <div className="flex flex-row gap-4 items-center">
                  <FaGreaterThan className="text-yellow-500" />
                  <NavLink to="/contact" onClick={scrollToTop}>Contact</NavLink>
                </div>
                <div className=" w-[80%]  mt-1 border-[1px] rounded  border-gray-500"></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex lg:p-0 slideright md:p-0 px-10 pt-8 flex-col">
          <div className="pb-10">
            <h2 className=" text-yellow-500 font-medium text-3xl">About Us</h2>
            <div className=" w-[20%] mt-2 border-[3px] rounded border-orange-600"></div>
          </div>
          <div className="text-white font-normal lg:text-xl">
            JYOTI - A Ray of Hope is indeed a wonderful initiative that provides
            quality education to economically-challenged students from nearby
            villages, slums, and tea gardens. It is truly inspiring to see
            college students selflessly dedicate their time and effort to help
            these underprivileged children.
          </div>
          <div>
            <div className="pt-10">
              <h2 className=" text-yellow-500 font-medium text-3xl">
                Social Media
              </h2>
              <div className=" w-[20%] mt-2 border-[3px] rounded border-orange-600"></div>
            </div>
            <div className="pt-6 flex gap-2 flex-col">
              <div className="flex gap-2 text-white font-medium items-center">
                <FaLinkedin className="text-xl text-yellow-600" />
                <NavLink
                  to="https://www.linkedin.com/company/jyotijgec/"
                  className="text-[18px]" target="_blank"
                >
                  - LinkedIn
                </NavLink>
              </div>
              <div className="flex gap-2 text-white font-medium items-center">
                <FaFacebook className="text-xl text-yellow-600" />
                <NavLink
                  to="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL"
                  className="text-[18px]" target="_blank"
                >
                  - Facebook
                </NavLink>
              </div>
              <div className="flex gap-2 text-white font-medium items-center">
                <FaInstagram className="text-xl text-yellow-600" />
                <NavLink
                  to="https://www.instagram.com/jyotijgec?igsh=aDNpcHkxM2k0NTAx"
                  className="text-[18px]"
                  target="_blank"
                >
                  - Instagram
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[1px] mt-14 border-gray-600"></div>
      <span className="block  lg:text-lg mt-4 text-xs text-gray-400 text-center ">
        © 2024{" "}
        <a href="/" className="hover:underline">
          Jyoti JGEC™
        </a>
        . All Rights Reserved.
      </span>
      <div className="block pb-2 lg:text-sm mt-2 text-xs text-center">
       <span className=" text-amber-400 font-medium" >Made by <a href="https://www.linkedin.com/in/souhardya-deb-921578254/" target="_blank" rel="noreferrer" className="text-white">Souhardya Deb </a> and <a href="https://www.linkedin.com/in/arijit-mitra-984668254/" target="_blank" rel="noreferrer" className="text-white">Arijit Mitra</a></span>
      </div>
    </footer>
  );
};

export default Footer;
