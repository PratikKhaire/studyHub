import React from "react";
import { SecondYearCard } from "./SecondYearCard";
import { ThirdYearCard } from "./ThirdYearCard";
import { FinalYearCard } from "./FinalYearCard";

export const AllYear = ({ year,id }) => {
  
  const yearComponents = {
    "Second": <SecondYearCard id="second-year" />,
    "Third": <ThirdYearCard />,
    "Final": <FinalYearCard />
  };
// tu use all year change at home
  
  const SelectedYearCard = yearComponents[year] || null;

  return (
    <div className="bg-indigo-700 lg:m-12 mx-4 my-6 rounded-lg" id={id} >
      <h1 className="text-white font-semibold text-2xl p-2">{year} Year</h1>
      {SelectedYearCard}
    </div>
  );
};
