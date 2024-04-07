import React from "react";
import { FaHeadset } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { serviceList } from "./servicesList";
import Link from "next/link";
import { MotionDiv } from "./motion";

const WeDo = () => {
  return (
    <>
      <div className="section section-lg text-center pb-24" id="our-services">
        <div className="container">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 mt-3 text-center sm:mt-10 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-10">
              {serviceList.map((item, index) => {
                return (
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.id}
                    className={`soft md:px-8 lg:px-14 pt-10 pb-4 md:border-gray-200 flex flex-col justify-center items-center group hover:bg-primary rounded-lg ${
                      item.id > 3 ? "md:border-t" : ""
                    } ${item.id == 2 ? "md:border-x" : ""}${
                      item.id == 5 ? "md:border-x" : ""
                    } `}
                  >
                    <div className="w-14 h-14 rounded-full bg-sky-200 flex justify-center items-center soft group-hover:-translate-y-2 group-hover:scale-125">
                      <FaHeadset className="text-3xl text-gray-900" />
                    </div>
                    <h3 className="my-5 text-xl font-bold group-hover:text-white text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-base group-hover:text-white text-gray-600 line-clamp-3">
                      {item.description}
                    </p>
                    <hr className="w-1/2 bg-gray-200 mt-7" />
                    <Link
                      href={"/services/" + item.title}
                      className="p-3  group-hover:text-white font-bold flex items-center justify-center"
                    >
                      Read More
                      <FaArrowRightLong className="ml-2 soft group-hover:translate-x-1" />
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
