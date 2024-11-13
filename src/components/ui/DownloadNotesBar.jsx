import React from 'react';
import { FiDownload } from "react-icons/fi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";

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
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className='flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300'
    >
      <div className="flex items-center gap-3 flex-1 mr-4">
        <div className="p-2 rounded-lg bg-blue-500/10">
          <HiOutlineDocumentText className="w-5 h-5 text-blue-400" />
        </div>
        <span className="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          {subject}
        </span>
      </div>
      
      {/* Show download link on desktop (hidden on mobile) */}
      <motion.a 
        href={downloadLink}
        whileTap={{ scale: 0.97 }}
        target="_blank" 
        rel="noopener noreferrer" 
        className='hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300'
      >
        <FiDownload className="w-4 h-4" />
        <span className="text-sm font-medium">Download</span>
      </motion.a>
      
      {/* Show download icon on mobile (below sm) */}
      <motion.a 
        href={downloadLink}
        whileTap={{ scale: 0.97 }}
        target="_blank" 
        rel="noopener noreferrer" 
        className='block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300'
      >
        <FiDownload className='w-5 h-5' />
      </motion.a>
    </motion.div>
  );
};