import React from "react";
import { FirstYear } from "@/components/FirstYear";
import { SecondYear } from "@/components/SecondYear"
import { ThirdYear } from "@/components/ThirdYear";
import { FinalYear } from "@/components/FinalYear";




export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col font-poppins">
      <header className="bg-gradient-to-r from-rose-500 to-red-500 font-poppins w-full  flex justify-center text-white">
        <img src="/gsnoteslogo.png" alt="gsNOTES Logo" className="h-16 " />
       
      </header>
      <FirstYear />
      <SecondYear />
      <ThirdYear />
      <FinalYear />
    </div>
  );
} 
