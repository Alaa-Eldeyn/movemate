"use client"
import { motion } from "framer-motion";
import { variantsRight } from "./variants";
import Lottie from "lottie-react";
import contactUsErrAnimation from "@/public/an-err.json"
const EmailError = () => {
  return (
    <motion.div
      variants={variantsRight}
      initial={variantsRight.hidden}
      animate={variantsRight.enter}
      className="flex justify-center items-center flex-col gap-3 "
    >
      <Lottie
        className="w-72 mb-5"
        animationData={contactUsErrAnimation}
        loop={true}
      />
      <p className=" text-center text-red-700 font-bold">
        E-Mail nicht gesendet. Bitte versuchen Sie es erneut.
      </p>
      <a
        href="/"
        className="px-5 py-2 text-white bg-primary cursor-pointer hover:bg-sky-700 rounded-lg soft"
      >
        Zurück nach Hauptseite
      </a>
    </motion.div>
  );
}

export default EmailError