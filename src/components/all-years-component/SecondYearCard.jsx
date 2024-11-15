"use client";

import React, { useState } from 'react';
import { DownloadNotesBar } from '../ui/DownloadNotesBar'; // Adjust the path if necessary
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SecondYearCard = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Define notes for 2nd-year subjects for each branch
  const branchNotes = {
    // Common subjects across branches
    Common: [
      { subject: "Mathematics III ", link: "Download" },
      { subject: "Engineering Economics ", link: "Download" },
      { subject: "Environmental Science", link: "Download" },
      { subject: "Universal Human Values", link: "Download" },
      { subject: "Open Electives", link: "Download" }, // Can vary for different branches
    ],
    // Branch-Specific Subjects
    CSE: [
      { subject: "Data Structures and Algorithms", link: "Download" },
      { subject: "OOPS (C++/Java)", link: "Download" },
      { subject: "Discrete Mathematics", link: "Download" },
      { subject: "Database Management Systems (DBMS)", link: "Download" },
      { subject: "Operating Systems", link: "Download" },
      { subject: "Computer Organization and Architecture", link: "Download" },
      { subject: "Software Engineering", link: "Download" },
      { subject: "Design and Analysis of Algorithms", link: "Download" },
      { subject: "Theory of Computation", link: "Download" },
    ],
    ECE: [
      { subject: "Analog Circuits", link: "Download" },
      { subject: "Digital Electronics", link: "Download" },
      { subject: "Signals and Systems", link: "Download" },
      { subject: "Electronic Devices and Circuits", link: "Download" },
      { subject: "Network Analysis", link: "Download" },
      { subject: "Electromagnetic Theory", link: "Download" },
      { subject: "Communication Systems", link: "Download" },
      { subject: "Microprocessors and Microcontrollers", link: "Download" },
    ],
    EE: [
      { subject: "Electrical Machines", link: "Download" },
      { subject: "Control Systems", link: "Download" },
      { subject: "Power Electronics", link: "Download" },
      { subject: "Electrical Circuits", link: "Download" },
      { subject: "Digital Electronics", link: "Download" },
      { subject: "Electrical Measurement and Instrumentation", link: "Download" },
      { subject: "Electrical Power Systems", link: "Download" },
    ],
    ME: [
      { subject: "Thermodynamics", link: "Download" },
      { subject: "Fluid Mechanics", link: "Download" },
      { subject: "Strength of Materials", link: "Download" },
      { subject: "Engineering Mechanics", link: "Download" },
      { subject: "Kinematics of Machines", link: "Download" },
      { subject: "Dynamics of Machines", link: "Download" },
      { subject: "Manufacturing Processes", link: "Download" },
    ],
    CIVIL: [
      { subject: "Building Materials", link: "Download" },
      { subject: "Fluid Mechanics", link: "Download" },
      { subject: "Surveying", link: "Download" },
      { subject: "Structural Analysis", link: "Download" },
      { subject: "Geotechnical Engineering", link: "Download" },
      { subject: "Transportation Engineering", link: "Download" },
      { subject: "Concrete Technology", link: "Download" },
    ],
    IPE: [
      { subject: "Operations Research", link: "Download" },
      { subject: "Production Technology", link: "Download" },
      { subject: "Industrial Engineering", link: "Download" },
      { subject: "Work Study and Ergonomics", link: "Download" },
      { subject: "Quality Control and Reliability", link: "Download" },
      { subject: "Supply Chain Management", link: "Download" },
    ],
    IT: [
      { subject: "Web Technologies", link: "Download" },
      { subject: "OOPS (C++)", link: "Download" },
      { subject: "Data Structures and Algorithms", link: "Download" },
      { subject: "Database Management Systems", link: "Download" },
      { subject: "Computer Networks", link: "Download" },
      { subject: "Operating Systems", link: "Download" },
    ],
    BME: [
      { subject: "Biomedical Signal Processing", link: "Download" },
      { subject: "Medical Electronics", link: "Download" },
      { subject: "Biomechanics", link: "Download" },
      { subject: "Medical Imaging", link: "Download" },
      { subject: "Biomedical Instrumentation", link: "Download" },
      { subject: "Rehabilitation Engineering", link: "Download" },
    ],
  };

  
  const notes = [
    ...(branchNotes[selectedBranch] || branchNotes['CIVIL']), 
    ...branchNotes.Common,
  ];

  const displayedNotes = showAll ? notes : notes.slice(0, 7);

  return (
    <div className="flex flex-col bg-zinc-950 p-6 shadow-xl rounded-xl border border-zinc-800/50 ">
     

      <Select onValueChange={setSelectedBranch}>
        <SelectTrigger className="w-[180px] bg-black/50 text-gray-200 border-zinc-800 hover:bg-zinc-900 mb-4 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50">
          <SelectValue placeholder="Select Branch" />
        </SelectTrigger>
        <SelectContent className="bg-black/90 backdrop-blur-md border-zinc-800">
          {["BME", "CIVIL", "CSE", "ECE", "EE", "IPE", "IT", "ME"].map((branch) => (
            <SelectItem 
              key={branch} 
              value={branch}
              className="text-gray-200 hover:bg-zinc-900 focus:bg-zinc-900 focus:text-blue-500"
            >
              {branch}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="space-y-2 transition-all duration-300">
        {displayedNotes.map((note, index) => (
          <div 
            key={index}
            className="transform transition-all duration-300 hover:scale-[1.01]"
          >
            <DownloadNotesBar subject={note.subject} link={note.link} />
          </div>
        ))}
      </div>

      {notes.length > 7 && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-gray-200 hover:text-blue-400 flex items-center gap-2 mx-auto py-2 px-4 rounded-lg
          bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20
          border border-zinc-800 transition-all duration-300 hover:border-blue-500/50"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View All <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
};
