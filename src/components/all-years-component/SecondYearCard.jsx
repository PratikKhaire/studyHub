"use client";

import React, { useState } from 'react';
import { DownloadNotesBar } from '../ui/DownloadNotesBar'; // Adjust the path if necessary
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SecondYearCard = () => {
  const [selectedBranch, setSelectedBranch] = useState("");

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

  return (
    <div className='flex flex-col rounded-lg bg-slate-800 p-5'>
      <Select className="m-5" onValueChange={setSelectedBranch}>
        <SelectTrigger className="w-[180px] bg-slate-600 text-white border-0 mb-4">
          <SelectValue placeholder="Select Branch" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 text-white border-none">
        <SelectItem value="BME">BME</SelectItem>
        <SelectItem value="CIVIL">CIVIL</SelectItem>
        <SelectItem value="CSE">CSE</SelectItem>
        <SelectItem value="ECE">ECE</SelectItem>
        <SelectItem value="EE">EE</SelectItem>
        <SelectItem value="IPE">IPE</SelectItem>
        <SelectItem value="IT">IT</SelectItem>
        <SelectItem value="ME">ME</SelectItem>

        </SelectContent>
      </Select>

      <ScrollArea className="h-[220px] rounded-md w-full">
        {notes.map((note, index) => (
          <DownloadNotesBar key={index} subject={note.subject} link={note.link} />
        ))}
      </ScrollArea>
    </div>
  );
};
