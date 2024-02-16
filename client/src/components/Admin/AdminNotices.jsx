import React, {  useState } from "react";

import NoticeCreate from "./NoticeCreate"
import { toast } from "react-toastify";
import { useAuth } from "../Store/auth";
const AdminNotices = () => {
  
  const [seen, setSeen] = useState(false);
  const {service,getServices, apiUrl} = useAuth()
  function togglePop() {
    setSeen(!seen);
  }
  
  const deleteuser = async (id) => {
    try {
      const response = await fetch(
        `${apiUrl}/api/admin/servicelist/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        toast.success("Service deleted");
        getServices();
      }
    } catch (error) {
      console.log("Error deleting Service");
    }
  };
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-400">
            <tr className="text-sm">
              <th scope="col" className="px-3 py-3">
                Url
              </th>
              <th scope="col" className="px-3 py-3">
                Title
              </th>
              <th scope="col" className="px-3 py-3">
                Date
              </th>
              <th scope="col" className="px-3 py-3">
                Delete
              </th>
              <th scope="col" className="px-3 text-right text-green-400 py-3">
                <button className="text-green-400" onClick={togglePop}>Create</button>
                {seen ? <NoticeCreate toggle={togglePop} /> : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {service &&
              service.map((user, index) => (
                <tr
                  key={index}
                  className=" border-b bg-gray-800 border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    <a href={user.url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </th>
                  <td className="px-3 py-4">{user.title}</td>
                  <td className="px-3 py-4">{user.date}</td>
                  <td className="px-3 py-4 ">
                    <button
                      className=" p-2 px-3 bg-red-700 text-white rounded-lg"
                      onClick={() => deleteuser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-3 py-4"></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminNotices;
