import React from "react";
import { FirstYear } from "@/components/FirstYear";
import { Intro } from "@/components/Intro";
import { AllYear } from "../components/all-years-component/AllYear";
import { SideBar } from "@/components/SideBar";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col font-poppins ">
   <header className="bg-indigo-600 font-poppins w-full flex justify-between text-white ">
  <SideBar />
  <img src="/logo1.png" alt="gsNOTES Logo" className="h-16" />
  <CiSearch className="h-8 w-8 mt-3 mx-4" /> 
</header>

      <FirstYear />
      <AllYear year="Second"/>
      <AllYear year="Third"/>
      <AllYear year="Final"/>
    </div>
  );
} 
