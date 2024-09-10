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

export const FinalYearCard = () => {
  const [selectedBranch, setSelectedBranch] = useState("");

  const branchNotes = {
    Common: [
      { subject: "Project Management", link: "Download" },
      { subject: "Entrepreneurship Development", link: "Download" },
      { subject: "Professional Ethics", link: "Download" },
    ],
    CSE: [
      { subject: "Big Data Analytics", link: "Download" },
      { subject: "Internet of Things", link: "Download" },
      { subject: "Cyber Security", link: "Download" },
      { subject: "Software Project Management", link: "Download" },
      { subject: "Blockchain Technology", link: "Download" },
      { subject: "Deep Learning", link: "Download" },
      { subject: "Human-Computer Interaction", link: "Download" },
    ],
    ECE: [
      { subject: "Wireless Communication", link: "Download" },
      { subject: "Radar and Navigation Systems", link: "Download" },
      { subject: "Nanoelectronics", link: "Download" },
      { subject: "Satellite Communication", link: "Download" },
      { subject: "Advanced Embedded Systems", link: "Download" },
      { subject: "Robotics", link: "Download" },
    ],
    EE: [
      { subject: "Power System Operation and Control", link: "Download" },
      { subject: "Electric Drives", link: "Download" },
      { subject: "Power Electronics", link: "Download" },
      { subject: "Energy Management", link: "Download" },
      { subject: "Smart Grid Technology", link: "Download" },
      { subject: "Electrical Vehicle Technology", link: "Download" },
    ],
    ME: [
      { subject: "Automobile Engineering", link: "Download" },
      { subject: "Robotics", link: "Download" },
      { subject: "Renewable Energy Systems", link: "Download" },
      { subject: "Advanced Machine Design", link: "Download" },
      { subject: "Supply Chain Management", link: "Download" },
      { subject: "Product Lifecycle Management", link: "Download" },
    ],
    CIVIL: [
      { subject: "Bridge Engineering", link: "Download" },
      { subject: "Advanced Structural Analysis", link: "Download" },
      { subject: "Environmental Impact Assessment", link: "Download" },
      { subject: "Construction Technology", link: "Download" },
      { subject: "Geotechnical Engineering", link: "Download" },
      { subject: "Urban Planning", link: "Download" },
    ],
    IPE: [
      { subject: "Industrial Safety", link: "Download" },
      { subject: "Ergonomics", link: "Download" },
      { subject: "Production Planning and Control", link: "Download" },
      { subject: "Materials Management", link: "Download" },
      { subject: "Supply Chain Design", link: "Download" },
    ],
    IT: [
      { subject: "Data Science", link: "Download" },
      { subject: "Mobile Computing", link: "Download" },
      { subject: "Advanced Web Technologies", link: "Download" },
      { subject: "Agile Software Development", link: "Download" },
      { subject: "Information Retrieval", link: "Download" },
    ],
    BME: [
      { subject: "Medical Signal Processing", link: "Download" },
      { subject: "Neural Engineering", link: "Download" },
      { subject: "Prosthetics and Orthotics", link: "Download" },
      { subject: "Biomechanics", link: "Download" },
      { subject: "Medical Devices", link: "Download" },
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

      <ScrollArea className="h-[220px] rounded-md w-full">
        {notes.map((note, index) => (
          <DownloadNotesBar key={index} subject={note.subject} link={note.link} />
        ))}
      </ScrollArea>
    </div>
  );
};
