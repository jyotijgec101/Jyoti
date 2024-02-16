import React from "react";
import "./noticestyle.css";
import { useAuth } from "../Store/auth";
const Notice = () => {
  const { service } = useAuth();

  return (
    <div className=" flex-col noticeback  h-full">
      <div className="flex justify-center pt-8 items-center flex-col">
        <h3 className="text-center font-semibold text-4xl text-amber-700 pt-5 ">
          NOTICE BOARD
        </h3>
        <div className="border-[2px]  border-amber-600 mt-2 w-[10%]"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content  content-full-width">
            <div className="profile-content py-8">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline ">
                    {service &&
                      service.map((item, e) => (
                        <li key={e}>
                          <div className="timeline-time lg:block md:block hidden">
                            <span className="date">{item.date}</span>
                          </div>

                          <div className="timeline-icon">
                            <a href="/">&nbsp;</a>
                          </div>

                          <div className="timeline-body ">
                            <div className="timeline-header">
                              <span className="username">
                                <p className=" text-right text-sm font-medium">
                                  Notice {e + 1}
                                </p>
                              </span>
                            </div>
                            <div className="timeline-content">
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[18px] text-black font-medium"
                              >
                                {item.title}
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
