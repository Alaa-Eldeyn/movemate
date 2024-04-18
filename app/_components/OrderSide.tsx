"use client";
import { motion } from "framer-motion";
import { variantsLeft } from "./variants";
import { MdMailOutline } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const OrderSide = () => {
  return (
    <motion.div
      variants={variantsLeft}
      initial={variantsLeft.hidden}
      whileInView={variantsLeft.enter}
      className="flex flex-col items-start justify-start"
    >
      <h1 className="text-3xl font-extrabold">{`Bestellservice`}</h1>
      <p className="text-sm text-gray-400 mt-3">
        {`Wir sind hier, um Ihnen bei Ihrer Bestellung behilflich zu sein. Bitte füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.`}
      </p>
      <div className="mt-12">
        <h2 className="text-lg font-extrabold">Unser Soziales</h2>
        <ul className="mt-3">
          <li className="flex items-center">
            <div className="bg-sky-200 text-xl h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <MdMailOutline />
            </div>
            <a
              href="mailto:info@MoveMate.ch"
              className="text-gray-600 soft hover:text-primary text-sm ml-3"
              target="_blank"
            >
              <small className="block">Mail</small>
              <strong>info@MoveMate.ch</strong>
            </a>
          </li>
          <li className="flex items-center pt-5">
            <div className="bg-sky-200 text-xl h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <FaPhoneAlt />
            </div>
            <a
              href="https://wa.me/+41779919854"
              className="text-gray-600 soft hover:text-primary text-sm ml-3"
              target="_blank"
            >
              <small className="block">Telefon</small>
              <strong>+41779919854</strong>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-extrabold">Sozialen Medien</h2>
        <ul className="flex mt-3 space-x-4">
          <li className="bg-sky-200 hover:text-white hover:bg-blue-500 soft cursor-pointer hover:scale-110 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <a href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className="bg-sky-200 hover:text-white hover:bg-sky-700 soft cursor-pointer hover:scale-110 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <a href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="bg-sky-200 hover:text-white hover:bg-gradient-to-br from-purple-600 via-red-500 to-yellow-400 soft cursor-pointer hover:scale-110 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-5 texz-800">
        Habe ein Problem ?{" "}
        <a
          href="/contact"
          className=" text-primary underline soft hover:tracking-wider"
        >
          Bitte sagen Sie uns
        </a>
      </p>
    </motion.div>
  );
};

export default OrderSide;
