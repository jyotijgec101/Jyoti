import React from "react";
import TeamCard from "./TeamCard";
import AyeswariyaAgarwal from "../images/Ayeswariya  Agarwal.jpeg";
import PriyaangshuDey from "../images/PriyaangshuDey.jpeg";
import SOUMISEBAIT from "../images/SoumiSebait.jpeg";
import ACHHIAKHATUN from "../images/ACHHIAKHATUN.jpeg";
import SkHabibulIslam from "../images/Sk Habibul Islam.jpeg";
import BibekNaskar from "../images/Bibek Naskar.jpeg";
import SOURAVGhosh from "../images/SOURAV Ghosh.jpeg";
import DiyaMaiti from "../images/Diya Maiti.jpeg";
import RajdipMondal from "..//images/Rajdip Monadal.jpeg";
import subditoghosh from "../images/subidito ghosh.jpeg";
import "./teamstyle.css"
const data = [
  {
    id: 1,
    name: "Dr. Soupayan Mitra",
    department: "HOD (ME), JGEC",
    position: "President-Jyoti",
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  },
  {
    id: 2,
    name: "Dr. Amitava Ray",
    department: "Principal, JGEC",
    position: "Advisor",
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
  },
  {
    id: 3,
    name: "Aeswarya Agarwal",
    department: "CE-2024",
    position: "Secretary-Jyoti",
    image: `${AyeswariyaAgarwal}`,
    link: "https://www.linkedin.com/in/aeswarya-agarwal-5b995b206/",
  },
  {
    id: 4,
    name: "Priyaangshu Dey",
    department: "EE-2024",
    position: "Secretary-Jyoti",
    image: `${PriyaangshuDey}`,
    link: "https://www.linkedin.com/in/deypriyaangshu/",
  },
  {
    id: 5,
    name: "Krishnendu Mallick",
    department: "ME-2024",
    position: "Cashier-Jyoti",
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    link: "https://www.linkedin.com/in/krishnendu-mallick-00078516b/",
  },
  {
    id: 6,
    name: "Soumi Sebait",
    department: "CE-2024",
    position: "Memeber-Jyoti",
    image: `${SOUMISEBAIT}`,
    link: "https://www.linkedin.com/in/soumi-sebait-638730207/",
  },

  {
    id: 7,
    name: "Sk Habibul Islam",
    department: "EE-2024",
    position: "Memeber-Jyoti",
    image: `${SkHabibulIslam}`,
    link: "https://www.linkedin.com/in/skhabibulislam/",
  },
  {
    id: 8,
    name: "Bibek Naskar",
    department: "EE-2024",
    position: "Memeber-Jyoti",
    image: `${BibekNaskar}`,
    link: "https://www.linkedin.com/in/bibek-naskar-1b1973202/",
  },
  {
    id: 9,
    name: "Saikat Mitar",
    department: "EE-2024",
    position: "Memeber-Jyoti",
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg",
    link: "https://www.linkedin.com/in/saikat-mitar-674b1220b/",
  },
  {
    id: 10,
    name: "Sourav Ghosh",
    department: "EE-2024",
    position: "Memeber-Jyoti",
    image: `${SOURAVGhosh}`,
    link: "https://www.linkedin.com/in/sourav-ghosh-02b3ba213/",
  },
  {
    id: 11,
    name: "Diya Maiti",
    department: "CE-2024",
    position: "Memeber-Jyoti",
    image: `${DiyaMaiti}`,
    link: "https://www.linkedin.com/in/diya-maiti-298590207/",
  },
  {
    id: 12,
    name: "Achhia Khatun",
    department: "CE-2024",
    position: "Memeber-Jyoti",
    image: `${ACHHIAKHATUN}`,
    link: "https://www.linkedin.com/in/achhia-khatun-86aa6b207/",
  },
  {
    id: 13,
    name: "Subidito Ghosh",
    department: "EE-2024",
    position: "Memeber-Jyoti",
    image: `${subditoghosh}`,
    link: "https://www.linkedin.com/in/subidito-ghosh-383430203/",
  },
  {
    id: 14,
    name: "Rajdip Mondal",
    department: "EE-2024",
    position: "Memeber-Jyoti",
    image: `${RajdipMondal}`,
    link: "https://www.linkedin.com/in/rajdip-mondal-91273923b/",
  },
];

const Team = () => {
  return (
    <div className="teambackground ">
      <div className="items-center pb-4 lg:h-auto pt-8 lg:p-8 text-[#9e9cb6]">
        <div className="flex flex-col justify-center items-center pb-10">

        <div className="text-[#915f2e] slideleft font-medium  text-[34px] ">
          Core Team - JYOTI
        </div>
        <div className="border-[3px] rounded m-1 border-amber-700 slideright w-[5%]"></div>
        </div>
        
        <div className="flex justify-center fadein flex-wrap gap-8 ">
          {data.map((e) => (
            <TeamCard
              name={e.name}
              department={e.department}
              position={e.position}
              image={e.image}
              link={e.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
