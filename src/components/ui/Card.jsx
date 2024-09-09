import React from 'react';
import { DownloadNotesBar } from './DownloadNotesBar'; // Adjust the path if necessary
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Card = () => {
  return (
   
        <div className='flex flex-col rounded-lg bg-red-300 p-5'>
          <Tabs defaultValue="account" className="w-full">
           
          <TabsList className="bg-slate-500 text-white rounded-md overflow-hidden w-full lg:max-w-lg">

              <TabsTrigger 
                value="account" 
                className="px-6 py-2 font-semibold transition-colors duration-300 hover:bg-slate-400 
                data-[state=active]:bg-red-300 w-full data-[state=active]:text-black rounded-t-md"
              >
                Physics Sem
              </TabsTrigger>
              <TabsTrigger 
                value="password" 
                className="px-6 py-2 font-semibold transition-colors duration-300 hover:bg-slate-400 
                data-[state=active]:bg-red-300 w-full data-[state=active]:text-black rounded-t-md"
              >
                Chemistry Sem
              </TabsTrigger>
            </TabsList>
    
            {/* Tab content for Physics Sem */}
            <TabsContent value="account" className="mt-4">
              <ScrollArea className="h-[200px] rounded-md border border-gray-300 w-full">
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Chemistry" link="Download" />
                <DownloadNotesBar subject="Maths" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
              </ScrollArea>
            </TabsContent>
    
            {/* Tab content for Chemistry Sem */}
            <TabsContent value="password" className="mt-4">
              <ScrollArea className="h-[200px] w-[350px] rounded-md border border-gray-300 w-full">
                <DownloadNotesBar subject="Chemistry" link="Download" />
                <DownloadNotesBar subject="Maths" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
                <DownloadNotesBar subject="Physics" link="Download" />
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      );
    };
    
 

