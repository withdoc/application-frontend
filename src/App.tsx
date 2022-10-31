import React from 'react';
import './App.css';

import HomePage from './pages/homepage';
import Startpage from './pages/startpage';
import Mainpage from './pages/mainpage';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* homepage */}
        <Route path='/' element={<HomePage />} />

        {/* startpage */}
        <Route path='/startpage' element={<Startpage />} />

        {/* mainpage */}
        <Route path='/mainpage' element={<Mainpage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
