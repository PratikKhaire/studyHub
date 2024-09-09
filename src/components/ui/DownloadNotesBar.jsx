import React from 'react';

export const DownloadNotesBar = ({ subject, link }) => {
  return (
    <div className='flex flex-wrap justify-between text-black  p-4 shadow shadow-red-400'>
      <div className="font-medium">{subject}</div>
      <div className='font-thin text-slate-700'><a href="http://">{link}</a></div>
    </div>
  );
};
