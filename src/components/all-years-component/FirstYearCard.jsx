"use client"

import React from 'react';
import { FaFlask, FaAtom } from "react-icons/fa";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DownloadNotesBar } from '../ui/DownloadNotesBar';

export const FirstYearCard = () => {
  return (
    <div className='flex flex-col  bg-black p-6 border border-white/10'>
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent_80%)]" />
      
      <Tabs defaultValue="physics" className="w-full relative">
        <TabsList className="bg-black w-full lg:max-w-lg p-1 rounded-lg mb-4 border border-white/10">
          <TabsTrigger
            value="physics"
            className="flex items-center gap-2 px-4 py-2.5 font-medium transition-all duration-300 
            data-[state=active]:bg-white/5 data-[state=active]:text-white
            data-[state=inactive]:text-white/70 hover:text-white
            w-full rounded-md text-sm"
          >
            <FaAtom className="text-lg text-blue-500" />
            <div>Physics Sem</div>
          </TabsTrigger>
          <TabsTrigger
            value="chemistry"
            className="flex items-center gap-2 px-4 py-2.5 font-medium transition-all duration-300 
            data-[state=active]:bg-white/5 data-[state=active]:text-white
            data-[state=inactive]:text-white/70 hover:text-white
            w-full rounded-md text-sm"
          >
            <FaFlask className="text-lg text-blue-500" />
            Chemistry Sem
          </TabsTrigger>
        </TabsList>

        <TabsContent value="physics" className="mt-0">
          <ScrollArea className="h-[440px] w-full pr-4">
            <DownloadNotesBar subject="Physics" link="https://drive.google.com/file/d/1IF3MjZdbcn8zmV7o-bYRz0go7HB5vAKT/view" />
            <DownloadNotesBar subject="Mathematics I" link="Download" />
            <DownloadNotesBar subject="Electrical Engineering" link="Download" />
            <DownloadNotesBar subject="Engineering Mechanics" link="Download" />
            <DownloadNotesBar subject="Engineering Graphics" link="Download" />
          </ScrollArea>
        </TabsContent>

        <TabsContent value="chemistry" className="mt-0">
          <ScrollArea className="h-[440px] w-full pr-4">
            <DownloadNotesBar subject="Chemistry" link="https://drive.google.com/file/d/1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03/view?usp=drive_link" />
            <DownloadNotesBar subject="Mathematics II" link="Download" />
            <DownloadNotesBar subject="Chem Lab" link="Download" />
            <DownloadNotesBar subject="C Programming" link="https://drive.google.com/file/d/1oyGYqwVTkQGFbAAoE-ptiIW5bGHAL4MM/view" />
            <DownloadNotesBar subject="Technical English" link="https://drive.google.com/file/d/1zypKzAPSXVlwJl0XCP_ItrR0WlbTyNOb/view?usp=drive_link" />
            <DownloadNotesBar subject="Basic Electronics" link="https://drive.google.com/file/d/1YsWXZjQYy-uKCd9DubliV9eVsTPhjtC5/view" />
            <DownloadNotesBar subject="IP Workshop" link="Download" />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};
