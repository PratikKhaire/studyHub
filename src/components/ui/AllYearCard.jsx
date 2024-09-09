"use client";

import React, { useState } from 'react';
import { DownloadNotesBar } from './DownloadNotesBar'; // Adjust the path if necessary
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AllYearCard = () => {
  const [selectedBranch, setSelectedBranch] = useState("");

  // Define notes for each branch
  const branchNotes = {
    Civil: [
      { subject: "Physics", link: "Download" },
      { subject: "Chemistry", link: "Download" },
      // Add more notes as needed
    ],
    Mechanical: [
      { subject: "Maths", link: "Download" },
      // Add more notes as needed
    ],
    Electrical: [
      { subject: "Electrical Engineering Basics", link: "Download" },
      // Add more notes as needed
    ],
  };

  // Get the notes for the selected branch
  const notes = branchNotes[selectedBranch] || [];

  return (
    <div className='flex flex-col rounded-lg bg-red-300 p-5'>
      <Select className="m-5" onValueChange={setSelectedBranch}>
        <SelectTrigger className="w-[180px] bg-slate-500">
          <SelectValue placeholder="Select Branch" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Civil">Civil</SelectItem>
          <SelectItem value="Mechanical">Mechanical</SelectItem>
          <SelectItem value="Electrical">Electrical</SelectItem>
        </SelectContent>
      </Select>

      <ScrollArea className="h-[200px] rounded-md border border-gray-300 w-full">
        {notes.map((note, index) => (
          <DownloadNotesBar key={index} subject={note.subject} link={note.link} />
        ))}
      </ScrollArea>
    </div>
  );
};

 

