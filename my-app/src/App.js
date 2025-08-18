import React from 'react';
import AppRouter from './components/approuter';
 // Importing BrowserRouter for routing
import FirstPage from './components/firstPage';

function App() {
  //const navigate = useNavigate();
  return (
    <>
      
        <AppRouter/>
      
      
      {/*<FirstPage />*/}
      {/*<About />*/}
      {/*<Access/>*/}
      {/*<Login />*/}
      {/*<Contact />*/}
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
