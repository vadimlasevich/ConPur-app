import { createContext, useState } from 'react';

export const ContractsContext = createContext([]);

export const ContractsContextProvider = ({ children }) => {
  const [contracts, setContracts] = useState([]);

  const getContracts = (contract) => setContracts((prevContract) => [...prevContract, contract]);

  console.log(contracts);

  return <ContractsContext.Provider value={{ contracts, getContracts }}>{children}</ContractsContext.Provider>;
};
