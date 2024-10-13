import SelectTag from './components/SelectTag/SelectTag';
import CountryDetails from './components/CountryDetails/CountryDetails';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<SelectTag/>} />
          <Route path="/:country" element={<CountryDetails/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;