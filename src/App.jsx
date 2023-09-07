import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Home, Create } from './pages';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/create' exact element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
