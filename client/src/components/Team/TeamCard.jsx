import React from 'react'
import { NavLink } from 'react-router-dom'

const TeamCard = (props) => {
  return (
    <div>
      <section
            className="w-80 font-sans relative hover:scale-105 transition-transform lg:mb-4  bg-[#f6f7f8] rounded-[6px]  overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0, 0, 0, 0.2)" }}
          >
            <a href={props.link} rel='noreferrer' target="_blank" className=" overflow-hidden">
              <img
                src={props.image}
                className="rounded-full w-[120px] overflow-hidden mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd " alt=''
              />
            </a>
            <h1 className="text-xl text-black font-bold text-center">
              {props.name}
            </h1>
            <small className="block my-1 text-gray-800 text-center">{props.department}</small>
            <p className="mt-5 text-blue-gray-400 text-center">{props.position}</p>
            <div className="flex items-center justify-center gap-2 w-[50%] mx-auto mt-5 mb-10">
              <button className="flex-1 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#b57632] transition-all duration-150 ease-in hover:bg-[#472e99]">
                <NavLink to={props.link} target='_blank' className='text-white font-medium hover:bg-transparent' >Message</NavLink>
              </button>
            </div>
          </section>
    </div>
  )
}

export default TeamCard
