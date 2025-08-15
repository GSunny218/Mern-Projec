import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {navigate} from 'react-router-dom';
import FirstPage from './components/firstPage';
import Access from './components/access';
import About from './components/about';

function App() {
  return (
    <>
      {/*< FirstPage />*/}
      <About />
    </>
  );
}

export default App;
