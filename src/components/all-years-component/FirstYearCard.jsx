"use client";

import React from 'react';
import { DownloadNotesBar } from '../ui/DownloadNotesBar'; // Adjust the path if necessary
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const FirstYearCard = () => {
  return (
    <div className='flex flex-col rounded-lg bg-gray-900 p-4'>
      <Tabs defaultValue="physics" className="w-full">
        <TabsList className="bg-slate-500 text-white w-full lg:max-w-lg p-0 rounded-b-none">
          <TabsTrigger 
            value="physics" 
            className="px-0 py-2.5 font-semibold transition-colors duration-300 hover:bg-slate-400 
            data-[state=active]:bg-slate-600 w-full text-slate-300 data-[state=active]:text-white text-md rounded-t-lg rounded-b-none shadow-xl"
          >
            Physics Sem
          </TabsTrigger>
          <TabsTrigger 
            value="chemistry" 
            className="px-0 py-2.5 font-semibold transition-colors duration-300 hover:bg-slate-400 
            data-[state=active]:bg-slate-600 w-full text-slate-300 data-[state=active]:text-white text-md rounded-t-lg rounded-b-none"
          >
            Chemistry Sem
          </TabsTrigger>
        </TabsList>

        {/* Tab content for Physics Sem */}
        <TabsContent value="physics" className="mt-0">
          <ScrollArea className="h-[440px] rounded-md w-full rounded-t-sm">
            <DownloadNotesBar subject="Physics" link="https://drive.google.com/file/d/1IF3MjZdbcn8zmV7o-bYRz0go7HB5vAKT/view" />
            <DownloadNotesBar subject="Mathematics I " link="Download" />
            <DownloadNotesBar subject="Electrical Engineering" link="Download" />
            <DownloadNotesBar subject="Engineering Mechanics" link="Download" />
            
             <DownloadNotesBar subject="Engineering Graphics" link="Download" />
          </ScrollArea>
        </TabsContent>

        {/* Tab content for Chemistry Sem */}
        <TabsContent value="chemistry" className="mt-0">
          <ScrollArea className="h-full rounded-md w-full rounded-t-sm">
            <DownloadNotesBar subject="Chemistry" link="https://drive.google.com/file/d/1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03/view?usp=drive_link" />
            <DownloadNotesBar subject="Mathematics II " link="Download" />
            <DownloadNotesBar subject="Chem Lab" link="Download" />
            <DownloadNotesBar subject="C Programming" link="https://drive.google.com/file/d/1oyGYqwVTkQGFbAAoE-ptiIW5bGHAL4MM/view" />
            <DownloadNotesBar subject="Technical English" link="https://drive.google.com/file/d/1zypKzAPSXVlwJl0XCP_ItrR0WlbTyNOb/view?usp=drive_link" />
            <DownloadNotesBar subject="Basic Electronics " link="https://drive.google.com/file/d/1YsWXZjQYy-uKCd9DubliV9eVsTPhjtC5/view" />
            <DownloadNotesBar subject="IP Workshop" link="Download" />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};
