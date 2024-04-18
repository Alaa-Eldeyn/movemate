import React from "react";
import { FaHeadset } from "react-icons/fa";
import { serviceList } from "./servicesList";
import Link from "next/link";
import { MotionDiv } from "./motion";

const WeDo = () => {
  return (
    <>
      <div className="section section-lg text-center pb-24" id="our-services">
        <div className="container">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="lg:-mb-5 mt-5 font-bold text-xl text-start lg:text-3xl lg:px-4">
              Wählen Sie den gewünschten Service:
            </h1>
            <div className="grid grid-cols-1 mt-3 text-center sm:mt-10 sm:grid-cols-2 sm:gap-x-6 gap-y-6 md:grid-cols-3 md:gap-0 xl:mt-10">
              {serviceList.map((item, index) => {
                return (
                  <MotionDiv
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`cursor-pointer p-2 lg:p-5 md:border-gray-200`}
                  >
                    <Link href={`/services/${item.title.toLowerCase()}`}>
                      <div className="shadow-md soft flex flex-col justify-center items-center group border hover:bg-primary hover:scale-110 rounded-lg p-8 h-48">
                        <div className="w-14 h-14 rounded-full bg-sky-200 flex justify-center items-center soft">
                          <FaHeadset className="text-3xl text-gray-900" />
                        </div>
                        <h3 className="mt-3 text-xl font-bold group-hover:text-white text-gray-900 line-clamp-2">
                          {item.label}
                        </h3>
                      </div>
                    </Link>
                  </MotionDiv>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeDo;
