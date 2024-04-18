/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import BreadCrumbs from "@/app/_components/BreadCrumbs";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { variantsLeft, variantsRight } from "@/app/_components/variants";
import { usePathname } from "next/navigation";
import { serviceList } from "@/app/_components/servicesList";
import { zodResolver } from "@hookform/resolvers/zod";
import { IPainting, paintingSchema } from "@/app/validations/Order";
import Image from "next/image";
import Input from "@/app/_components/Input";
import EmailSent from "@/app/_components/EmailSent";
import EmailError from "@/app/_components/EmailError";
import OrderSide from "@/app/_components/OrderSide";

const page = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const srv = serviceList.filter(
    (item) => item.title === pathNames[pathNames.length - 1].toLowerCase()
  );
  const { title,label, description, img, extraDescription } = srv[0];
  
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IPainting>({
    resolver: zodResolver(paintingSchema),
  });
  const onSubmit: SubmitHandler<IPainting> = async ({
    firstName,
    lastName,
    phoneNumber,
    email,
    address,
    floor,
    numberOfRooms,
    notes
  }) => {
    setLoading(true);
    await fetch("/api/painting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title:label,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        floor,
        numberOfRooms,
        notes
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
  const serviceArr = [
    {
      idTag: "firstName",
      type: "text",
      placeholder: "Name",
      error: errors.firstName,
      register: register("firstName"),
      isTextArea: false,
    },
    {
      idTag: "lastName",
      type: "text",
      placeholder: "Vor Name",
      error: errors.lastName,
      register: register("lastName"),
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
      idTag: "phoneNumber",
      type: "tel",
      placeholder: "Handy nummer",
      error: errors.phoneNumber,
      register: register("phoneNumber"),
      isTextArea: false,
    },
    {
      idTag: "floor",
      type: "number",
      placeholder: "Etage",
      error: errors.floor,
      register: register("floor"),
      isTextArea: false,
    },
    {
      idTag: "numberOfRooms",
      type: "number",
      placeholder: "Zimmer Anzahl",
      error: errors.numberOfRooms,
      register: register("numberOfRooms"),
      isTextArea: false,
    },
    {
      idTag: "address",
      type: "text",
      placeholder: "Adresse",
      error: errors.address,
      register: register("address"),
      isTextArea: true,
      rows: 1.5,
    },
    {
      idTag: "notes",
      type: "text",
      placeholder: "Anmerkungen",
      error: errors.notes,
      register: register("notes"),
      isTextArea: true,
      rows: 1.5,
    },
  ];
  return (
    <div className="pt-24">
      <BreadCrumbs />
      <div className="container mx-auto">
        <>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 pb-12">
            <motion.div
              variants={variantsLeft}
              initial={variantsLeft.hidden}
              whileInView={variantsLeft.enter}
              className=" lg:max-w-[500px] flex justify-center items-center"
            >
              <Image
                src={img}
                alt={label}
                className="rounded-lg w-full lg:max-w-[550px] max-w-[400px] object-cover border-4 border-transparent hover:border-primary soft"
              />
            </motion.div>
            <motion.div
              variants={variantsRight}
              initial={variantsRight.hidden}
              whileInView={variantsRight.enter}
              className="font-bold flex flex-col gap-4 items-start justify-start"
            >
              <p className="text-primary text-2xl capitalize">{label}</p>
              <p className="text-gray-500 text-lg">{description}</p>
            </motion.div>
          </section>
          <section>
            <motion.div
              variants={variantsRight}
              initial={variantsRight.hidden}
              whileInView={variantsRight.enter}
              className=""
            >
              <div
                className="pb-10"
                dangerouslySetInnerHTML={{ __html: extraDescription }}
              />
            </motion.div>
          </section>
          <section className="pt-12 border-t grid grid-cols-1 lg:grid-cols-2 gap-5">
            <OrderSide />
            {emailSent && <EmailSent />}
            {emailError && <EmailError />}
            {!emailSent && !emailError && (
              <motion.form
                variants={variantsRight}
                initial={variantsRight.hidden}
                whileInView={variantsRight.enter}
                className="rounded-lg bg-white p-5 w-full mx-auto shadow-two space-y-4 max-w-[550px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <p className="font-bold text-center text-2xl bg-zinc-100 w-fit px-3 py-1 rounded-lg mx-auto">
                  {label}
                </p>
                {serviceArr.map((input, index) => {
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
                      <span>Sending...</span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </motion.form>
            )}
          </section>
        </>
      </div>
    </div>
  );
};

export default page;
