import React from "react";
import BreadCrumbs from "../_components/BreadCrumbs";
import Image from "next/image";
import img1 from "../../public/image-1.webp";
import img2 from "../../public/image-2.webp";
import Testo from "../_components/Testo";
import { MotionDiv } from "../_components/motion";
import { variantsLeft, variantsRight } from "../_components/variants";
import Title from "../_components/Title";
import ScrollUp from "../_components/ScrollUp";

const page = () => {
  return (
    <>
      <ScrollUp />
      <div className=" pt-24 ">
        <BreadCrumbs />
        <section>
          <MotionDiv
            initial={{ opacity: 0, y: -20, x: 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
          >
            <div
              className="w-full container mx-auto text-center"
              style={{ maxWidth: "670px", marginBottom: "60px" }}
            >
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                We’re on a mission to make building your business
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                varius eros eget sapien consectetur ultrices. Ut quis dapibus
                libero.{" "}
              </p>
            </div>
          </MotionDiv>
          <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-2 container mx-auto ">
            <MotionDiv
              variants={variantsLeft}
              initial={variantsLeft.hidden}
              animate={variantsLeft.enter}
              className="w-full"
            >
              <Image
                src={img1}
                alt="about image"
                className="w-full rounded-lg shadow-sm"
              />
            </MotionDiv>
            <MotionDiv
              variants={variantsRight}
              initial={variantsRight.hidden}
              animate={variantsRight.enter}
              className="w-full"
            >
              <Image
                src={img2}
                alt="about image"
                className="w-full rounded-lg shadow-sm"
              />
              <div className="pt-10">
                <div className="mb-10">
                  <h3 className="text-center text-[28px] font-semibold leading-snug text-black dark:text-white sm:text-[32px] lg:text-left">
                    More than 15k+ companies use our products services.
                  </h3>
                </div>
                <div className="flex w-full justify-center lg:justify-start items-center text-center lg:text-start">
                  <div>
                    <h4 className="text-3xl font-bold text-black dark:text-white">
                      14K+
                    </h4>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Happy Clients
                    </p>
                  </div>
                  <span className="mx-9 inline-block h-[50px] w-px bg-stroke dark:bg-stroke-dark"></span>
                  <div>
                    <h4 className="text-3xl font-bold text-black dark:text-white">
                      100%
                    </h4>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>
        <section className="relative z-10 py-12 md:py-16 lg:py-24 bg-[#ffffff5a] border-y">
          <div className="container">
            <MotionDiv
              initial={{ opacity: 0, y: -20, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              className="w-full mx-auto text-center"
              style={{ maxWidth: "570px", marginBottom: "80px" }}
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                We are ready to help
              </h2>
              <p className="text-base leading-relaxed text-body-color md:text-lg">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </MotionDiv>
          </div>
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                  <MotionDiv
                    initial={{ opacity: 0, y: 20, x: 0 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    className="relative aspect-[77/40] items-center justify-center"
                  >
                    <Image
                      src={img2}
                      alt="about image"
                      className="object-cover w-full shadow-lg rounded-lg"
                    />
                  </MotionDiv>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-cover bg-center bg-no-repeat"></div>
          </div>
        </section>
        <Title mainTitle="Testimonials" slogan="What People Say" />
        <Testo />
      </div>
    </>
  );
};

export default page;
