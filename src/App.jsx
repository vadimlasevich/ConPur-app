import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { TypeContractContextProvider } from './context/typeContractContext';
import { ContractsContextProvider } from './context/contractsContext';
import { EditContractContextProvider } from './context/editContractContext';

import Contracts from './pages/Contracts';
import Layout from './components/Layout/Layout';
import NewContract from './pages/NewContract';
import Reports from './pages/Reports';
import Home from './pages/Home';
import EditContract from './pages/EditContract';

const App = () => {
  return (
    <TypeContractContextProvider>
      <ContractsContextProvider>
        <EditContractContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="new-contract" element={<NewContract />} />
              <Route path="reports" element={<Reports />} />
              <Route path="edit-contract/:number" element={<EditContract />} />
            </Route>
          </Routes>
        </EditContractContextProvider>
      </ContractsContextProvider>
    </TypeContractContextProvider>
  );
};

export default App;
