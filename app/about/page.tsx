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
            <div className="w-full container mx-auto text-center max-w-[650px] mb-[60px]">
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Willkommen bei MoveMate
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                Wir sind Ihr One-Stop-Shop für alle Ihre Bedürfnisse rund um
                Umzug und Hauspflege. Egal, ob Sie einen stressfreien Umzug
                planen, Ihr Zuhause auf Vordermann bringen oder einfach einen
                neuen Anstrich benötigen - wir stehen Ihnen mit unserem
                erfahrenen Team und unseren erstklassigen Dienstleistungen zur
                Seite.
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
              <div className="pt-5">
                <div className="mb-5">
                  <p className="text-center text-[14px] leading-snug text-black dark:text-white md:text-[16px] lg:text-[18px] lg:text-left">
                    Unser Umzugsservice sorgt dafür, dass Ihr Umzug reibungslos
                    und effizient verläuft, damit Sie sich auf das Wesentliche
                    konzentrieren können. Mit unserer professionellen Reinigung
                    verwandeln wir Ihr Zuhause oder Büro in eine makellose Oase.<br/><br/>
                    Unser Entsorgungsdienst kümmert sich um alles, was Sie
                    loswerden möchten, auf umweltfreundliche und
                    gesetzeskonforme Weise. Und mit unseren hochwertigen
                    Malerarbeiten verleihen wir Ihren Räumen einen neuen Look
                    und bringen Frische in Ihr Leben.
                  </p>
                </div>
                {/* To do - لما يجي عملاء */}
                {/* <div className="flex w-full justify-center lg:justify-start items-center text-center lg:text-start">
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
                </div> */}
              </div>
            </MotionDiv>
          </div>
        </section>
        <section className="relative z-10 py-12 md:py-16 lg:py-24 bg-[#ffffff5a] border-y">
          <div className="container">
            <MotionDiv
              initial={{ opacity: 0, y: -20, x: 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              className={`w-full mx-auto text-center max-w-[650px] mb-[80px]`}
            >
              <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Wir sind bereit zu helfen
              </h2>
              <p className="text-base leading-relaxed text-body-color md:text-lg">
                Bei MoveMate legen wir großen Wert auf Qualität, Zuverlässigkeit
                und Kundenzufriedenheit. Lassen Sie uns Ihnen dabei helfen, Ihr
                Zuhause zu verschönern und Ihre Umzugserfahrung zu vereinfachen.
                Kontaktieren Sie uns noch heute für eine individuelle Beratung
                und lassen Sie uns gemeinsam Ihr nächstes Projekt angehen!
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
        <Title mainTitle="Referenzen" slogan="Was die Leute sagen" />
        <Testo />
      </div>
    </>
  );
};

export default page;
