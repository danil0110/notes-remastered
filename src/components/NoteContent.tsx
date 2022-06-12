import React from 'react';
import trashIcon from '../assets/trash-icon.svg';

const NoteContent = () => {
  return (
    <div className='bg-lightGrey p-5'>
      <div className='grid grid-cols-noteContent grid-rows-noteContent h-full gap-[10px]'>
        <input
          type='text'
          placeholder='Title...'
          className='font-medium text-lg text-white bg-grey rounded-md px-3 focus:outline-none'
        />
        <button className='flex justify-center items-center bg-grey rounded-md'>
          <img src={trashIcon} alt='' />
        </button>
        <textarea
          name='body'
          id=''
          placeholder='Note content...'
          className='bg-grey p-3 text-sm text-white font-light rounded-md resize-none col-start-1 col-end-3 outline-none'
        ></textarea>
      </div>
    </div>
  );
};

export default NoteContent;
