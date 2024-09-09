

import React from "react";
import { AllYearCard } from "../components/ui/AllYearCard";

export const AllYear = ({year}) => (
  <div className="bg-gradient-to-r from-rose-500 to-red-500 lg:m-12 mx-4 my-6 rounded-lg">
    <h1 className="text-white font-semibold text-2xl  p-2 ">{year} Year</h1>
    <AllYearCard></AllYearCard>
  </div>
);
