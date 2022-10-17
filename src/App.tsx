import React from 'react';
import './App.css';

import HomePage from './pages/homepage';
import Startpage from './pages/startpage';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* homepage */}
        <Route path='/' element={<HomePage />} />

        {/* startpage */}
        <Route path='/startpage' element={<Startpage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
