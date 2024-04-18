import Image from "next/image";
import React from "react";
import img from "../../public/about-01-530x467.jpg";
import img2 from "../../public/about-02-530x467.jpg";
import Logo from "./Logo";
import { MotionDiv } from "./motion";
import { variantsLeft, variantsRight } from "./variants";
const WhyUs = () => {
  return (
    <div className="bg-[#ffffff5a] border-y py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-8 justify-between">
        <MotionDiv
          variants={variantsLeft}
          initial={variantsLeft.hidden}
          whileInView={variantsLeft.enter}
          className="lg:pr-5"
        >
          <p className="head-small">Über Uns</p>
          <h2 className="font-extrabold text-[40px] md:text-[50px] lg:text-[55px] text-zinc-800 leading-none py-3">
            MoveMate Ihre Quelle für Neubeginn und Frische!.
          </h2>
          <div className="pt-5">
            <Image alt="rfe" src={img} className="rounded-lg w-full" />
          </div>
        </MotionDiv>
        <MotionDiv
          variants={variantsRight}
          initial={variantsRight.hidden}
          whileInView={variantsRight.enter}
        >
          <div className="flex flex-col justify-center items-end relative">
            <Image
              alt="efr"
              src={img2}
              className="rounded-lg w-full lg:max-w-[80%]"
            />
            <div className="rounded-lg w-full h-full mt-32 mr-16 border-[10px] border-primary max-w-[80%] absolute hidden lg:block"></div>
          </div>
          <div className="flex gap-2 mt-12 lg:mt-32 relative">
            <div className="w-[40%] flex justify-center items-center">
              <Logo />
            </div>
            <p className="max-w-[60%] leading-loose">
              Verabschieden Sie sich von Stress und Unordnung, Ihrem
              Allround-Experten für mühelose Umzüge, strahlende Reinigung,
              umweltfreundliche Entsorgung inspirierende Malerarbeiten im
              Innenbereich
            </p>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default WhyUs;
