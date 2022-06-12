import React from 'react';
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import NoteContent from './components/NoteContent';

const App = () => {
  return (
    <>
      <Header />
      <div className='container grid grid-cols-main grid-rows-main mx-auto'>
        <LeftPanel />
        <NoteContent />
      </div>
    </>
  );
};

export default App;
