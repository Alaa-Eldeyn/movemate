import React from "react";
import { MotionDiv } from "./motion";

const SubFooter = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20, x: 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      className="flex flex-col sm:flex-row gap-3 justify-evenly items-center p-6 mt-8 bg-[#ffffff5a] border-y"
    >
      <div>
        Copyright @ {new Date().getFullYear()} By -{" "}
        <a href="#" className="text-primary">
          DevArt
        </a>
      </div>
      <div>
        Developed By{" "}
        <a href="#" className="text-primary">
          @Alaa-Eldeyn
        </a>
      </div>
    </MotionDiv>
  );
};

export default SubFooter;
