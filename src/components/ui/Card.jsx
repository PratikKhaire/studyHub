import React from 'react';
import { DownloadNotesBar } from './DownloadNotesBar'; // Adjust the path if necessary

export const Card = () => {
  return (
    <div className='flex flex-col rounded bg-red-300 '>
      <DownloadNotesBar subject="Physics" link="Download" />
      <DownloadNotesBar subject="Physics" link="Download" />
      <DownloadNotesBar subject="Physics" link="Download" />
      <DownloadNotesBar subject="Physics" link="Download" />
    </div>
  );
};
