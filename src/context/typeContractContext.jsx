import { createContext, useState } from 'react';

export const TypeContractContext = createContext('');

const typesContracts = ['budget', 'own', 'sponsor'];

export const TypeContractContextProvider = ({ children }) => {
  const [typeContract, setTypeContract] = useState(typesContracts[0]);

  const handleIndexType = (index) => {
    setTypeContract(typesContracts[index]);
  };

  return <TypeContractContext.Provider value={{ typeContract, handleIndexType }}>{children}</TypeContractContext.Provider>;
};
