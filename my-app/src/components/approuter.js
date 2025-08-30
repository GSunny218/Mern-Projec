import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPage from '../components/firstPage';
import Contact from '../components/Contact';
import AboutUs from '../components/About';
import Access from '../components/access';
import Layout from '../components/layout';
import Login from './login';
import MainPage from './mainPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/access" element={<Access/>}/>
        <Route path="/layout" element={<Layout />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/mainPage' element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;