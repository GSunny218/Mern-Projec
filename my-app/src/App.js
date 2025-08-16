import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { navigate, useNavigate } from 'react-router-dom';
import FirstPage from './components/firstPage';
import Access from './components/access';
import About from './components/about';
import Contact from './components/contact';

function App() {
  //const navigate = useNavigate();
  return (
    <>
      {/*<FirstPage />*/}
      {/*<About />*/}
      {/*<Access/>*/}
      <Contact />
      {/* Uncomment the following lines to enable routing */}
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>*/}
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/access" element={<Access />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <button onClick={() => navigate('/access')}>Go to Access</button>
      <button onClick={() => navigate('/about')}>Go to About</button>
      <button onClick={() => navigate('/')}>Go to Home</button>*/}
    </>
  );
}

export default App;
