import React from 'react'
import {NavLink, Outlet, Navigate} from "react-router-dom"
import { useAuth } from '../Store/auth';
 
const AdminLayout = () => {
  
  const { user, loading, isLoggedIn } = useAuth();

  if(!isLoggedIn){
    return <Navigate to="/"/>
  }
  if (loading) {
    return <div>hello</div>;
  }
  if (!user.isAdmin) {
    alert("Ask admin to get access")
    return <Navigate to="/" />;
  }
  return (
    <>
    <div className="lg:m-8 m-2 mt-12   border-[2px] border-black lg:flex overflow-scroll" >
      
    <div className="border-r-2 border-r-red-500  " style={{backgroundColor:"orange"}}>
      <nav className=" ">
        <ul className="lg:grid flex flex-row p-4  text-xl pb-4 font-semibold  lg:gap-4">
          <li>
            <NavLink to="/admin/users" className="text-xl" style={({ isActive }) =>
            isActive ? { backgroundColor: "#e88146" } : {}
        }>Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/contacts" className="text-xl" style={({ isActive }) =>
            isActive ? { backgroundColor: "#e88146" } : {}
        }>Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/admin/notices" className="text-xl" style={({ isActive }) =>
            isActive ? { backgroundColor: "#e88146" } : {}
        }>Notices</NavLink>
          </li>
          <li>
            <NavLink to="/admin/certificates" className="text-xl" style={({ isActive }) =>
            isActive ? { backgroundColor: "#e88146" } : {}
        }>Certificates</NavLink>
          </li>
          <li>
            <NavLink to="/logout" className="text-xl" style={({ isActive }) =>
            isActive ? { backgroundColor: "#e88146" } : {}
        }>Logout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  
  <div className="w-full p-4">
    <h2 className="text-center text-2xl text-amber-700 pb-4 font-medium">Welcome To Admin Page</h2>
        <Outlet className=" overflow-scroll"/>
  </div>
</div>
        </>
  )
}

export default AdminLayout