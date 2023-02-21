import { createContext, useState } from 'react';

export const ContractsContext = createContext([]);

export const ContractsContextProvider = ({ children }) => {
  const [contracts, setContracts] = useState([]);

  const getContracts = (contract) => setContracts((prevContract) => [...prevContract, contract]);

  const handleEditContract = (editContract) => {
    console.log(editContract);

    setContracts((prevContract) => {
      const updateContract = prevContract.map((contract) => {
        return contract.id === editContract.id ? { ...editContract } : contract;
      });

      return updateContract;
    });

    // prevContract.map((contract) => {
    //   return contract.id === editContract.id ? { ...editContract } : contract;
    // });
  };

  return (
    <ContractsContext.Provider value={{ contracts, getContracts, handleEditContract }}>{children}</ContractsContext.Provider>
  );
};
