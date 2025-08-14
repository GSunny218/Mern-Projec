import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {navigate} from 'react-router-dom';
import FirstPage from './components/firstPage';
import Access from './components/access';
import About from './components/about';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/firstPage" element={<FirstPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
