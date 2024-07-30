import React from "react";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PaymentsIcon from "@mui/icons-material/Payments";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const AboutServices = () => {
    const iconStyle = {
        color:"#8e4cdf",
        fontSize:"4rem"
    }
  const serviceData = [
    {
      heading: "best services",
      icon: <TravelExploreIcon style={iconStyle} />,
    },
    {
      heading: "Trusted payment",
      icon: <PaymentsIcon style={iconStyle} />,
    },
    {
      heading: "Top facility",
      icon: <StarBorderIcon style={iconStyle} />,
    },
    {
      heading: "Awesome deals",
      icon: <LocalOfferIcon style={iconStyle} />,
    },
  ];
  return (
    <>
    <div className="flex gap-4 p-3 my-7 max-[490px]:flex-col">
    {serviceData.map((serviceCard, ids) => (
        <div key={ids} className="abtService p-5 rounded-xl cursor-pointer hover:-translate-y-1 transition-all ease-in-out">
          <div className="top">
            {serviceCard.icon}
          </div>
          <div className="btm">
            <h1 className="text-purple-500 font-semibold text-[1.1875rem]">{serviceCard.heading}</h1>
            <p className="text-slate-400 text-[1.0625rem] mt-3 text-justify">
            Phaseus site amet tristique ligua donec iaculis leo sus cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
            </p>
          </div>
        </div>
      ))}
    </div>
     
    </>
  );
};

export default AboutServices;
