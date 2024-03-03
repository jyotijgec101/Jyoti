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
      <div className=" certiback flex lg:flex-row flex-col md:flex-row lg:justify-evenly md:justify-evenly md:items-center lg:items-center  lg:gap-12 gap-8   p-10  rounded-lg lg:w-[80%] md:w-full lg:h-[60vh] h-[60vh]">
        <div className="lg:w-[30%]">
          <h2
            className="lg:text-6xl font-serif text-center text-3xl font-[540] lg:text-left lg:pt-0 md:pt-0 pt-12  text-white"
            style={{ lineHeight: "1.5em" }}
          >
            Verify authenticity of certificate
          </h2>
        </div>
        <div className="flex gap-2 p-4 lg:justify-center lg:items-center flex-col lg:mt-14 lg:w-[40%] lg:h-[50vh]  pb-14">
          <form
            onSubmit={handlesubmit}
            className="flex lg:mt-14 md:mt-14  lg:h-[20vh] md:h-[10vh] "
          >
            <div>
              <input
                type="number"
                name="certinumber"
                onChange={handleinput}
                value={findCertificate.certinumber}
                className="lg:p-4 p-[0.85em] pr-10 lg:pr-32 focus:outline-none rounded-lg  placeholder:text-[15px][appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
                "
                required
                placeholder="Certificate No."
              />
              <div className="m-4 border-[3px] border-amber-900"></div>
            </div>
            <div>
              <button className=" p-[14px] mt-[1px] ml-3 px-[24px] text-white verify rounded-lg hover:bg-amber-800 transition-transform duration-200">
                Verify
              </button>
            </div>
          </form>
          <div className="lg:h-[100vh] md:h-[5vh]  lg:w-[90%] ">
            {userdata && userdata ? (
              <>
                {userdata?.name ? (
                  <>
                    <div className="">
                      <p className="text-center text-2xl lg:text-3xl text-white font-medium">
                        This Certificate belongs to
                      </p>
                      <p className="text-center pt-4 lg:text-4xl text-3xl font-medium  text-amber-900">
                        {userdata?.name}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center  text-xl lg:text-xl font-medium  text-amber-900">
                      Please enter a valid Certificate Number
                    </div>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
