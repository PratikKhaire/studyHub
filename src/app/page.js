import React from "react";
import { FirstYear } from "@/components/FirstYear";
import { Intro } from "@/components/Intro";
import { AllYear } from "@/components/AllYear";


export default function Home() {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col font-poppins">
      <header className="bg-gradient-to-r from-rose-500 to-red-500 font-poppins w-full  flex justify-center text-white">
        <img src="/gsnoteslogo.png" alt="gsNOTES Logo" className="h-16 " />
       
      </header>
      <Intro/>
      <FirstYear />
      <AllYear year="Second"/>
      <AllYear year="Third"/>
      <AllYear year="Final"/>
    </div>
  );
} 
