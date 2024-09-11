import React from "react";
import { FirstYear } from "../components/all-years-component/FirstYear";
import { Intro } from "@/components/Intro";
import { AllYear } from "../components/all-years-component/AllYear";
import { SideBar } from "@/components/SideBar";
import { CiSearch } from "react-icons/ci";
import { Footer } from "@/components/Footer"; // Import the Footer component

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col font-poppins">
      <header className="bg-indigo-900 text-white font-poppins w-full flex items-center justify-between p-3 shadow-md">
        <SideBar />
        <div className="text-2xl font-bold text-slate-100">SGSITS NOTES</div>
        <a href="https://www.linkedin.com/in/shridmishra" target="_blank" rel="no opener no referrer">
        <img src="/person.png"  className="h-7 filter invert brightness-100 saturate-0" alt="Person" />
        </a>
      </header>

      <Intro />
      <FirstYear id="first-year" />
      <AllYear year="Second" id="second-year" />
      <AllYear year="Third" id="third-year" />
      <AllYear year="Final" id="final-year" />
      
      <Footer />
    </div>
  );
}
