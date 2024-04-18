import React from "react";
import { MotionDiv } from "./motion";

const Title = ({
  mainTitle,
  slogan,
}: {
  mainTitle: string;
  slogan: string;
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center pt-16"
    >
      <h6 className="head-small">{mainTitle}</h6>
      <h2 className="text-[40px] md:text-[50px] leading-none font-extrabold pt-2">
        {slogan}
      </h2>
    </MotionDiv>
  );
};

export default Title;
