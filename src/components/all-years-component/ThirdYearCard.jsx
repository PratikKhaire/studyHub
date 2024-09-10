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

export const ThirdYearCard = () => {
  const [selectedBranch, setSelectedBranch] = useState("");

  const branchNotes = {
    Common: [
      { subject: "Mathematics IV", link: "Download" },
      { subject: "Industrial Management", link: "Download" },
      { subject: "Open Electives", link: "Download" },
      { subject: "Environmental Studies", link: "Download" },
    ],
    CSE: [
      { subject: "Machine Learning", link: "Download" },
      { subject: "Computer Networks", link: "Download" },
      { subject: "Compiler Design", link: "Download" },
      { subject: "Distributed Systems", link: "Download" },
      { subject: "Artificial Intelligence", link: "Download" },
      { subject: "Advanced Database Systems", link: "Download" },
      { subject: "Cloud Computing", link: "Download" },
      { subject: "Cryptography", link: "Download" },
      { subject: "Data Mining", link: "Download" },
    ],
    ECE: [
      { subject: "Digital Signal Processing", link: "Download" },
      { subject: "VLSI Design", link: "Download" },
      { subject: "Microwave Engineering", link: "Download" },
      { subject: "Embedded Systems", link: "Download" },
      { subject: "Antennas and Propagation", link: "Download" },
      { subject: "Optical Communication", link: "Download" },
    ],
    EE: [
      { subject: "Power Systems II", link: "Download" },
      { subject: "Electrical Machine Design", link: "Download" },
      { subject: "High Voltage Engineering", link: "Download" },
      { subject: "Switchgear and Protection", link: "Download" },
      { subject: "Renewable Energy Systems", link: "Download" },
      { subject: "Advanced Control Systems", link: "Download" },
    ],
    ME: [
      { subject: "Heat Transfer", link: "Download" },
      { subject: "Refrigeration and Air Conditioning", link: "Download" },
      { subject: "Machine Design", link: "Download" },
      { subject: "Advanced Manufacturing", link: "Download" },
      { subject: "Finite Element Analysis", link: "Download" },
      { subject: "Mechanics of Solids", link: "Download" },
    ],
    CIVIL: [
      { subject: "Water Resources Engineering", link: "Download" },
      { subject: "Structural Design", link: "Download" },
      { subject: "Construction Planning and Management", link: "Download" },
      { subject: "Transportation Engineering", link: "Download" },
      { subject: "Hydraulic Structures", link: "Download" },
    ],
    IPE: [
      { subject: "Operations Research II", link: "Download" },
      { subject: "Lean Manufacturing", link: "Download" },
      { subject: "Industrial Automation", link: "Download" },
      { subject: "Supply Chain Management", link: "Download" },
      { subject: "Total Quality Management", link: "Download" },
    ],
    IT: [
      { subject: "Cloud Computing", link: "Download" },
      { subject: "Data Mining", link: "Download" },
      { subject: "Software Testing", link: "Download" },
      { subject: "Mobile Application Development", link: "Download" },
      { subject: "Network Security", link: "Download" },
    ],
    BME: [
      { subject: "Biomedical Image Processing", link: "Download" },
      { subject: "Artificial Organs", link: "Download" },
      { subject: "Biomaterials", link: "Download" },
      { subject: "Tissue Engineering", link: "Download" },
      { subject: "Medical Robotics", link: "Download" },
    ],
  };

  const notes = [
    ...(branchNotes[selectedBranch] || branchNotes['CIVIL']),
    ...branchNotes.Common,
  ];

  return (
    <div className='flex flex-col rounded-lg bg-indigo-900 p-5'>
      <Select className="m-5" onValueChange={setSelectedBranch}>
        <SelectTrigger className="w-[180px] bg-indigo-600 text-white border-0 mb-4">
          <SelectValue placeholder="Select Branch" />
        </SelectTrigger>
        <SelectContent className="bg-indigo-700 text-white border-none">
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

      <ScrollArea className="h-[200px] rounded-md w-full">
        {notes.map((note, index) => (
          <DownloadNotesBar key={index} subject={note.subject} link={note.link} />
        ))}
      </ScrollArea>
    </div>
  );
};
