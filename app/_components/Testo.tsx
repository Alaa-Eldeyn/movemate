"use client";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useGetTestimonials } from "../api/testimonials/getTestimonials";

const Testo = () => {
  const { loading, testimonials } = useGetTestimonials();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container pb-12 mx-auto text-center"
      >
        <Swiper
          modules={[Navigation, A11y, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-96 w-full my-10"
          breakpoints={{
            971: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map(
            (item: {
              id: string;
              description: string;
              customerName: string;
            }) => {
              return (
                <SwiperSlide key={item?.id}>
                  <div
                    className={` flex flex-col gap-5 justify-center items-center border-2 soft p-8 rounded-lg bg-white shadow-lg border-transparent hover:border-primary group ${
                      loading ? "animate-pulse" : null
                    } `}
                  >
                    <p className="p-5 text-white bg-primary rounded-full group-hover:shadow-lg soft">
                      <FaQuoteRight />
                    </p>
                    <p className="leading-loose text-gray-700 line-clamp-4">
                      {item?.description}
                    </p>
                    <p className=" text-green-600 uppercase font-bold">
                      {item?.customerName}
                    </p>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Testo;
