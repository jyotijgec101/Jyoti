import React, { useState } from "react";
import "./certistyle.css";
import { useAuth } from "../Store/auth";
const Certificates = () => {
  const { apiUrl } = useAuth();
  const [findCertificate, setfindCertificate] = useState({
    certinumber: "",
  });
  const [userdata, setuserdata] = useState("");
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setfindCertificate({
      ...findCertificate,
      [name]: value,
    });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${apiUrl}/api/certificate/get_certificate/${findCertificate.certinumber}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setuserdata(data);
      } else {
        setuserdata("No Certificates Found");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center px-8 pt-14 lg:p-14 items-center">
      <div className=" certiback flex lg:flex-row flex-col lg:justify-evenly justify-center lg:gap-14 gap-8 items-center  p-10  rounded-lg lg:w-[80%] md:w-full h-[60vh]">
        <div className="lg:w-[30%]">
          <h2
            className="lg:text-5xl text-center text-3xl font-medium lg:text-left  text-white"
            style={{ lineHeight: "1.5em" }}
          >
            Verify authenticity of certificate
          </h2>
        </div>
        <div className="flex gap-4 flex-col">
          <form onSubmit={handlesubmit} className="flex">
            <div>
              <input
                type="number"
                name="certinumber"
                onChange={handleinput}
                value={findCertificate.certinumber}
                className="p-2 pr-10 rounded-lg  placeholder:text-[15px]"
                placeholder="Certificate No."
              />
              <div className="m-4 border-[3px] border-amber-900"></div>
            </div>
            <div>
              <button className=" p-[10px] ml-4 px-[20px] text-white bg-amber-900 rounded-lg hover:bg-amber-800 transition-transform duration-200">
                Verify
              </button>
            </div>
          </form>
          {userdata && userdata ? (
            <>
              {userdata?.name ? (
                <>
                  <div>
                    <p className="text-center text-xl lg:text-3xl text-white font-medium">
                      This Certificate belongs to
                    </p>
                    <p className="text-center pt-4 lg:text-4xl text-3xl font-medium  text-amber-900">
                      {userdata?.name}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-center text-xl lg:text-2xl font-medium  text-amber-900">
                    Please enter a valid Certificate Number
                  </p>
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
