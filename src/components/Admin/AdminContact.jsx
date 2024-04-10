import React, { useEffect } from "react";
import { useAuth } from "../Store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { getAllContacts, allcontacts, apiUrl } = useAuth();
  const deletecontact = async(id)=>{
    try {
      const response = await fetch(`${apiUrl}/api/admin/contacts_delete/${id}`,{
        method: "DELETE"
      })
      if(response.ok){
        toast.success("Contact deleted successfully");
        getAllContacts();
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                Name
              </th>
              <th scope="col" className="px-3 py-3">
                Email
              </th>
              <th scope="col" className="px-3 py-3">
                Telephone
              </th>
              <th scope="col" className="px-3 py-3">
                Ratings
              </th>
              <th scope="col" className="px-3 py-3">
                Message
              </th>
              <th scope="col" className="px-3 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {allcontacts &&
              allcontacts.map((user, index) => (
                <tr
                  key={index}
                  className=" border-b bg-gray-800 border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium  whitespace-nowrap text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-3 py-4">{user.email}</td>
                  <td className="px-3 py-4">{user.telephone}</td>
                  <td className="px-3 py-4">{user.subject}</td>
                  <td className="px-3 py-4">{user.message}</td>
                  <td className="px-3 py-4  ">
                    <button className=" p-2 px-3 bg-red-700 text-white rounded-lg" onClick={() => deletecontact(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminContacts;
