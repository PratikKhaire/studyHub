
import React from "react";
import { FirstYear } from "../components/all-years-component/FirstYear";
import { Intro } from "@/components/Intro";
import { AllYear } from "../components/all-years-component/AllYear";
import { SideBar } from "@/components/SideBar";
import { CiSearch } from "react-icons/ci";
import { Footer } from "@/components/Footer"; // Import the Footer component
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className=" min-h-screen bg-black flex flex-col font-poppins  "> 
      <NavBar/>
      <Intro />
      <FirstYear id="first-year" />
      <AllYear year="Second" id="second-year" /> 
      <Footer />
    </div>
  );
}
