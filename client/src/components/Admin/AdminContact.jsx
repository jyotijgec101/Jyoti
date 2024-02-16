import React, { useEffect } from "react";
import { useAuth } from "../Store/auth";

const AdminContacts = () => {
  const { getAllContacts, allcontacts } = useAuth();
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminContacts;
