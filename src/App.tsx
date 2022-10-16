import React from 'react';
import './App.css';
import Startpage from './pages/startpage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/startpage' element={<Startpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
