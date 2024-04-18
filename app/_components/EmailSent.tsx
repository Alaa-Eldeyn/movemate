"use client"
import { motion } from "framer-motion";
import { variantsRight } from "./variants";
import Lottie from "lottie-react";
import contactUsAnimation from "@/public/an.json";
const EmailSent = () => {
  return (
    <motion.div
      variants={variantsRight}
      initial={variantsRight.hidden}
      animate={variantsRight.enter}
      className="flex justify-center items-center flex-col gap-3 "
    >
      <Lottie
        className="-mt-8"
        animationData={contactUsAnimation}
        loop={false}
      />
      <p className=" text-center text-green-700 !-mt-10 font-bold">
        Email wurde erfolgreich Versendet
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

export default EmailSent