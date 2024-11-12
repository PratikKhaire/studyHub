import React from 'react';
import { LiaDownloadSolid } from "react-icons/lia";

export const DownloadNotesBar = ({ subject, link }) => {
  const getDownloadLink = (link) => {
    // Handle file link
    const driveFileIdMatch = link.match(/(?:https:\/\/drive\.google\.com\/file\/d\/|\/open\?id=)([\w-]+)/);
    if (driveFileIdMatch) {
      const fileId = driveFileIdMatch[1];
      return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    
    // Handle folder link
    const driveFolderIdMatch = link.match(/(?:https:\/\/drive\.google\.com\/drive\/folders\/|\/folders\/)([\w-]+)/);
    if (driveFolderIdMatch) {
      const folderId = driveFolderIdMatch[1];
      return `https://drive.google.com/drive/folders/${folderId}`;
    }
    
    return link;
  };

  const downloadLink = getDownloadLink(link);

  return (
    <div className='flex justify-between items-center w-full p-4 mb-2 bg-black/40 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300'>
      <div className="font-medium flex-1 mr-4 text-white/90">
        {subject}
      </div>
      
      {/* Show download link on desktop (hidden on mobile) */}
      <a 
        href={downloadLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='hidden sm:flex items-center gap-2 px-4 py-1.5 bg-black rounded-full text-white hover:bg-blue-500/30 transition-colors duration-300'
      >
        <span className="text-sm font-medium">Download</span>
      </a>
      
      {/* Show download icon on mobile (below sm) */}
      <a 
        href={downloadLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='block sm:hidden p-2 rounded-full bg-blue-500/20 text-white hover:bg-blue-500/30 transition-colors duration-300'
      >
        <LiaDownloadSolid className='text-xl' />
      </a>
    </div>
  );
};