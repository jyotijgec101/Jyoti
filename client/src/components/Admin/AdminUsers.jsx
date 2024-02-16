import React, { useEffect } from "react";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";
import { Link, Outlet } from "react-router-dom";
const AdminUsers = () => {
  const { alluser, authorizationToken, getAllUsers, apiUrl } = useAuth();
  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        toast.success("User has been deleted");
        getAllUsers();
      }
    } catch (error) {
      console.log("Error deleting user");
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className=" text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                First Name
              </th>
              <th scope="col" className="px-3 py-3">
                Last Name
              </th>
              <th scope="col" className="px-3 py-3">
                Department
              </th>
              <th scope="col" className="px-3 py-3">
                Year
              </th>
              <th scope="col" className="px-3 py-3">
                Email
              </th>
              <th scope="col" className="px-3 py-3">
                Admin
              </th>
              <th scope="col" className="px-3 py-3">
                Delete
              </th>
              <th scope="col" className="px-3 py-3">
                Update
              </th>
            </tr>
          </thead>
          <tbody>
            {alluser &&
              alluser.map((user, index) => (
                <tr key={index} className="border-b dark:bg-gray-800 border-gray-700">
                  <th
                    
                    scope="row"
                    className="px-3   py-4 font-medium text-white whitespace-nowrap "
                  >
                    {user.firstname}
                  </th>
                  <th
                    
                    scope="row"
                    className="px-3   py-4 font-medium text-white whitespace-nowrap "
                  >
                    {user.lastname}
                  </th>
                  <td className="  px-3 py-4">{user.department}</td>
                  <td className="px-3 py-4  ">{user.year}</td>
                  <td className="px-3 py-4  ">{user.email}</td>
                  <td className="px-3 py-4  ">{user.isAdmin?"Yes":"No"}</td>
                  
                  <td className="px-3 py-4  ">
                    <button className=" p-2 px-3 bg-red-700 text-white rounded-lg" onClick={() => deleteuser(user._id)}>Delete</button>
                  </td>
                  <td className="px-3 py-4">
                    <Link to={`/admin/users/${user._id}/edit`} className=" p-2 px-4 bg-green-700 text-white rounded-lg">Edit</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Outlet/>
      </div>
    </>
  );
};

export default AdminUsers;
