import React from "react";
import ContactUs from "../_components/ContactUs";
import Title from "../_components/Title";
import BreadCrumbs from "../_components/BreadCrumbs";

const page = () => {
  return (
    <div className="pt-24">
      <BreadCrumbs />
      <ContactUs />
    </div>
  );
};

export default page;
