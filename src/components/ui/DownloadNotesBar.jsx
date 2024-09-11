import React from 'react';
import { LiaDownloadSolid } from "react-icons/lia";

export const DownloadNotesBar = ({ subject, link }) => {
  return (
    <div className='flex justify-between items-center w-full text-white p-4 m-0 shadow shadow-indigo-700 bg-slate-600'>
      <div className="font-medium flex-1 mr-4">
        {subject}
      </div>
      
      {/* Show download link on desktop (sm and larger) */}
      <div className='hidden sm:flex items-center space-x-2'>
        <a href={link} download target="_blank" rel="noopener noreferrer" className="font-thin text-white break-all">
          {link}
        </a>
        <LiaDownloadSolid className='text-xl text-white' />
      </div>

      {/* Show download icon on mobile (below sm) */}
      <a href={link} download target="_blank" rel="noopener noreferrer" className="block sm:hidden text-white">
        <LiaDownloadSolid className='text-xl' />
      </a>
    </div>
  );
};
