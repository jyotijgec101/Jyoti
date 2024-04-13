import React, { useState } from 'react'
import { useAuth } from '../Store/auth'
import CertificateCreate from './CertificateCreate';
import { toast } from 'react-toastify';

const AdminCertificate = () => {
  const {displaycertificate,displayCertificate,apiUrl} = useAuth();
  const [seen, setSeen] = useState(false);
  function togglePop() {
    setSeen(!seen);
  }
  const deleteuser = async(id)=>{
    try {
      const response = await fetch(`${apiUrl}/api/admin/delete_certificate/${id}`,
      {
        method: "DELETE",
      }
      );
      if(response.ok){
        toast.success("Certificate Deleted");
        displayCertificate();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <div className="relative overflow-y-auto h-[50vh] overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs top-0 sticky  uppercase bg-gray-700 text-gray-400">
            <tr className="text-sm">
              <th scope="col" className="px-3 py-3">
                Name
              </th>
              <th scope="col" className="px-3 py-3">
                Certificate No.
              </th>
              {/* <th scope="col" className="px-3 py-3">
                Printed
              </th> */}
              <th scope="col" className="px-3 py-3">
                Delete
              </th>
              <th scope="col" className="px-3 text-right text-green-400 py-3">
                <button className="text-green-400" onClick={togglePop} >
                  Create
                </button>
                {seen ? <CertificateCreate toggle={togglePop} /> : null}
              </th>
            </tr>
          </thead>
          <tbody>
            {displaycertificate &&
              displaycertificate.map((user, index) => (
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
                  <td className="px-3 py-4">{user.certinumber}</td>
                  {/* <td className="px-3 py-4">{user.printed? "Yes": "No"}</td> */}
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
  )
}

export default AdminCertificate