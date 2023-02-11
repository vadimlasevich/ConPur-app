import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contracts from './pages/Contracts';
import Layout from './components/Layout/Layout';
import NewContract from './pages/NewContract';
import Reports from './components/Reports/Reports';
import Home from './pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="contracts" element={<Contracts />} />
        <Route path="new-contract" element={<NewContract />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default App;
