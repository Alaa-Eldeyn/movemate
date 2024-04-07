"use client";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { images } from "@/public/images";
import { motion } from "framer-motion";

const Hero = () => {
  // Todo - custom swiper navigation (https://codesandbox.io/p/sandbox/prod-darkness-o483y?file=%2Fsrc%2FApp.js)
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-24 dark:bg-gray-dark"
      >
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-[620px] w-full select-none relative"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-full h-full items-center justify-center -z-20">
                <Image
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full block"
                />
              </div>
              <div
                id="overlay"
                className="bg-black/60 absolute w-full h-full top-0 left-0 tracking-tighter z-10 flex flex-col items-center justify-center text-white text-center"
              >
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute w-[80%] lg:w-[90%] h-[80%] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-tighter z-10 flex flex-col items-center justify-center text-white text-center">
          <motion.p
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            className=" -mt-3 text-2xl"
          >
            Right place to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[45px] md:text-[55px] lg:text-[65px] my-3 font-extrabold max-w-[60%] leading-none"
          >
            Moving Every Customer With Care
          </motion.h1>
          <motion.a
            initial={{ opacity: 0, y: 50, x: 0 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay: 0.15 }}
            href={`/services`}
            className="overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group mt-4"
          >
            Discover
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
            <span className="absolute w-36 h-32 -top-8 -left-2 bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
            <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-7 z-10">
              Services
            </span>
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Hero;
