"use client";
import BreadCrumbs from "@/app/_components/BreadCrumbs";
import { serviceList } from "@/app/_components/servicesList";
import { usePathname } from "next/navigation";
import React from "react";
import ServiceTemplate from "../_servicesComponents/ServiceTemplate"
const Page = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const srv = serviceList.filter(
    (item) =>
      item.title.toLowerCase() === pathNames[pathNames.length - 1].toLowerCase()
  );
  return (
    <div className="pt-24">
      <BreadCrumbs />
      <div className="container mx-auto">
        {srv.map((item) => {
          return (
            <ServiceTemplate key={item.id} title={ item.title} description={item.description} img={item.img} />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
