import React from "react";
import { FirstYear } from "@/components/FirstYear";
import { SecondYear } from "@/components/SecondYear"
import { ThirdYear } from "@/components/ThirdYear";
import { FinalYear } from "@/components/FinalYear";



export default function Home() {
  return (
    <div className="bg-#000000 min-h-screen flex flex-col font-poppins">
      <header className="bg-gradient-to-r from-rose-500 to-red-500 font-poppins w-full p-3 flex justify-center font-semibold text-3xl text-white">
        gsNOTES
      </header>
      <FirstYear></FirstYear>
      <SecondYear></SecondYear>
      <ThirdYear></ThirdYear>
      <FinalYear></FinalYear>
    </div>
  );
}
