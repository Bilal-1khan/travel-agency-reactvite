import React, { useState } from "react";
import ContactInformation from "../Js & JsonFile/ContactInformation.json";

const ContactInfo = () => {
  return (
    <>
      {ContactInformation.map((elem,ids) => (
        <div key={ids} className="information my-3 rounded-xl p-3 hover:bg-slate-600 hover:-translate-y-1 cursor-default ease-in-out transition-all hover:text-white">
          <h1 className="capitalize font-semibold">{elem.title}</h1>
          <p className="">{elem.para1}</p>
          <p className="">{elem.para2}</p>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
