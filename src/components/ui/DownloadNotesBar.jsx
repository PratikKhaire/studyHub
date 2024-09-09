import React from 'react';
import { LiaDownloadSolid } from "react-icons/lia";

export const DownloadNotesBar = ({ subject, link }) => {
  return (
    <div className='flex flex-wrap justify-between items-center text-black p-4 shadow shadow-red-400'>
      <div className="font-medium">{subject}</div>
      
      {/* Show download link on desktop (sm and larger) */}
      <div className='hidden sm:block font-thin text-slate-700'>
        <a href={link} download target="_blank" rel="noopener noreferrer">{link}</a>
      </div>

      {/* Show download icon on mobile (below sm) */}
      <a href={link} download target="_blank" rel="noopener noreferrer" className="block sm:hidden">
        <LiaDownloadSolid className='text-xl' />
      </a>
    </div>
  );
};

