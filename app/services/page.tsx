import React from "react";
import WeDo_Icons from "../_components/WeDo_Icons";
import BreadCrumbs from "../_components/BreadCrumbs";

const page = () => {

  // todo - add a message input as a note for all pages
  
  return (
    <div className="pt-24">
      <BreadCrumbs />
      <WeDo_Icons />
    </div>
  );
};

export default page;
