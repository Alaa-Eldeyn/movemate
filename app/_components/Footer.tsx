import React from "react";
import Logo from "./Logo";
import menuData from "./menuData";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MotionDiv } from "./motion";

const Footer = () => {
  const socialData = [
    {
      id: 1,
      color: "hover:text-blue-500",
      title: "Facebook",
      icon: <FaFacebook className="w-6 h-6" />,
    },
    {
      id: 2,
      color: "hover:text-red-500",
      title: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
    },
    {
      id: 3,
      color: "hover:text-primary",
      title: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
    },
  ];
  return (
    <>
      <footer className="bg-[#ffffff5a]">
        <MotionDiv
          initial={{ opacity: 0, y: 20, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 lg:px-8"
        >
          <div className="flex justify-center text-teal-600">
            <Logo />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {menuData.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    className="text-gray-700 transition hover:text-primary"
                    href={item?.path || "services"}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            {socialData.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className={`text-gray-700 transition ${item.color}`}
                  >
                    <span className="sr-only">{item.title}</span>
                    {item.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </MotionDiv>
      </footer>
    </>
  );
};

export default Footer;
