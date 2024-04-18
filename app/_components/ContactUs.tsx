"use client";
import Lottie from "lottie-react";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import contactUsAnimation from "../../public/an.json";
import contactUsErrAnimation from "../../public/an-err.json";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { variantsLeft, variantsRight } from "./variants";
import Input from "./Input";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const supportSchema = z.object({
    fullName: z
      .string()
      .min(1, { message: "Ihr Name ist erforderlich." })
      .max(50, { message: "Ihr Name ist zu lang." }),
    email: z
      .string()
      .min(1, { message: "Ihre E-Mail-Adresse ist erforderlich." })
      .email({ message: "Ungültige E-Mail." }),
    subject: z
      .string()
      .min(1, { message: "Der Titel muss mindestens 1 Zeichen enthalten." }),
    message: z
      .string()
      .min(1, { message: "Die Nachricht muss mindestens 1 Zeichen enthalten." }),
  });
  type ISupport = z.infer<typeof supportSchema>;
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ISupport>({
    resolver: zodResolver(supportSchema),
  });
  const onSubmit: SubmitHandler<ISupport> = async ({
    fullName,
    email,
    subject,
    message,
  }) => {
    setLoading(true);
    await fetch("api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        title: subject,
        description: message,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setEmailSent(true);
        } else {
          setEmailError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const contactArr = [
    {
      idTag: "username",
      type: "text",
      placeholder: "Name",
      error: errors.fullName,
      register: register("fullName"),
      isTextArea: false,
    },
    {
      idTag: "email",
      type: "email",
      placeholder: "Email",
      error: errors.email,
      register: register("email"),
      isTextArea: false,
    },
    {
      idTag: "subject",
      type: "text",
      placeholder: "Thema",
      error: errors.subject,
      register: register("subject"),
      isTextArea: false,
    },
    {
      idTag: "message",
      type: "text",
      placeholder: "Nachricht",
      error: errors.message,
      register: register("message"),
      isTextArea: true,
      rows: 6,
    },
  ];
  return (
    <div className="pb-24 pt-8">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
          <motion.div
            variants={variantsLeft}
            initial={variantsLeft.hidden}
            animate={variantsLeft.enter}
          >
            <h1 className="text-3xl font-extrabold">{`Lass uns reden`}</h1>
            <p className="text-sm text-gray-400 mt-3">
              {`Sie möchten eine große Idee oder Marke entwickeln und benötigen Hilfe? Dann wenden Sie sich an uns. Wir würden uns freuen, von Ihrem Projekt zu hören und Ihnen zu helfen.`}
            </p>
            <div className="mt-12">
              <h2 className="text-lg font-extrabold">Email</h2>
              <ul className="mt-3">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] text-xl h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <MdMailOutline />
                  </div>
                  <a
                    href="mailto:info@MoveMate.ch"
                    className="text-gray-600 soft hover:text-primary text-sm ml-3"
                    target="_blank"
                  >
                    <small className="block">Post</small>
                    <strong>info@MoveMate.ch</strong>
                  </a>
                </li>
                <li className="flex items-center pt-5">
                  <div className="bg-[#e6e6e6cf] text-xl h-10 w-10 rounded-full flex items-center justify-center shrink-0">
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
              <h2 className="text-xl font-extrabold">Soziale Netzwerke</h2>
              <ul className="flex mt-3 space-x-4">
                <li className="bg-[#e6e6e6cf] hover:text-white hover:bg-blue-500 soft cursor-pointer hover:scale-110 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] hover:text-white hover:bg-sky-700 soft cursor-pointer hover:scale-110 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="bg-[#e6e6e6cf] hover:text-white hover:bg-gradient-to-br from-purple-600 via-red-500 to-yellow-400 soft cursor-pointer hover:scale-110 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
          {emailSent && (
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
                Zurück nach Hause
              </a>
            </motion.div>
          )}
          {emailError && (
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
                Zurück nach Hause
              </a>
            </motion.div>
          )}
          {!emailSent && !emailError && (
            <motion.form
              variants={variantsRight}
              initial={variantsRight.hidden}
              animate={variantsRight.enter}
              className="ml-auto w-full space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {contactArr.map((input, index) => {
                const {
                  idTag,
                  type,
                  placeholder,
                  error,
                  register,
                  isTextArea,
                  rows,
                } = input;
                return (
                  <Input
                    key={index}
                    idTag={idTag}
                    type={type}
                    placeholder={placeholder}
                    error={error}
                    register={register}
                    isTextArea={isTextArea}
                    rows={rows}
                  />
                );
              })}

              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-primary hover:bg-sky-800 soft font-semibold rounded-md text-sm px-4 py-2.5 w-full inline-flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 me-2 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>Senden...</span>
                  </>
                ) : (
                  "Nachricht senden"
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
