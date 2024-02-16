import React from 'react'
import logo from "../images/Logo.png"
import "./loaderstyle.css"
const Loader = () => {
  return (
    <div className="loader bg-[#d3d3de]">
    <div className="ringloader"></div>
    <div className="ringloader"></div>
    <div className="ringloader"></div>
    <div className="ringloader "></div>
    <div className=' text-center' ><img src={logo} className=' w-24 animate-pulse ' alt="" /></div>
  </div>  
    
  )
}

export default Loader
